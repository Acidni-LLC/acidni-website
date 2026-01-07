using Azure;
using Azure.Communication.Email;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddHttpClient();

// Add Azure Communication Services Email client
var acsConnectionString = Environment.GetEnvironmentVariable("ACS_CONNECTION_STRING");
if (!string.IsNullOrWhiteSpace(acsConnectionString))
{
    builder.Services.AddSingleton(new EmailClient(acsConnectionString));
}

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// Contact form endpoint
app.MapPost("/api/contact", async (HttpRequest req, IServiceProvider sp) =>
{
    var body = await JsonSerializer.DeserializeAsync<JsonElement>(req.Body);
    var name = body.GetProperty("name").GetString() ?? "";
    var email = body.GetProperty("email").GetString() ?? "";
    var company = body.TryGetProperty("company", out var cProp) ? cProp.GetString() ?? "" : "";
    var service = body.TryGetProperty("service", out var sProp) ? sProp.GetString() ?? "General" : "General";
    var message = body.TryGetProperty("message", out var mProp) ? mProp.GetString() ?? "" : "";

    var emailClient = sp.GetService<EmailClient>();
    var notificationEmail = Environment.GetEnvironmentVariable("NOTIFICATION_EMAIL") ?? "jgill@acidni.net";
    var senderEmail = Environment.GetEnvironmentVariable("SENDER_EMAIL") ?? "noreply@acidni.net";
    
    if (emailClient != null)
    {
        try
        {
            var htmlContent = $@"
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Company:</strong> {company}</p>
                <p><strong>Service Interest:</strong> {service}</p>
                <h3>Message:</h3>
                <p>{message}</p>
            ";
            
            var emailMessage = new EmailMessage(
                senderAddress: senderEmail,
                content: new EmailContent($"[Acidni.net] Contact from {name} - {service}")
                {
                    Html = htmlContent,
                    PlainText = $"Name: {name}\nEmail: {email}\nCompany: {company}\nService: {service}\n\nMessage:\n{message}"
                },
                recipients: new EmailRecipients(new List<EmailAddress> { new EmailAddress(notificationEmail) })
            );
            
            // Add reply-to so you can reply directly to the sender
            emailMessage.ReplyTo.Add(new EmailAddress(email, name));
            
            var operation = await emailClient.SendAsync(WaitUntil.Started, emailMessage);
            Console.WriteLine($"Contact email sent, operation id: {operation.Id}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to send contact email: {ex.Message}");
            return Results.Problem("Failed to send email");
        }
    }
    else
    {
        Console.WriteLine($"Email client not configured - Contact: {name} <{email}>, Service: {service}");
    }
    
    return Results.Ok(new { success = true });
});

// Feedback form endpoint
app.MapPost("/api/feedback", async (HttpRequest req, IServiceProvider sp, IHttpClientFactory httpFactory) =>
{
    var body = await JsonSerializer.DeserializeAsync<JsonElement>(req.Body);
    var recaptchaToken = body.TryGetProperty("recaptchaToken", out var tProp) ? tProp.GetString() : null;
    var type = body.GetProperty("type").GetString() ?? "feedback";
    var title = body.GetProperty("title").GetString() ?? "";
    var description = body.GetProperty("description").GetString() ?? "";
    var email = body.TryGetProperty("email", out var eProp) ? eProp.GetString() ?? "" : "";

    // Verify reCAPTCHA v3 (optional)
    var secret = Environment.GetEnvironmentVariable("RECAPTCHA_SECRET_KEY");
    if (!string.IsNullOrWhiteSpace(secret) && !string.IsNullOrWhiteSpace(recaptchaToken))
    {
        var client = httpFactory.CreateClient();
        var verifyResp = await client.PostAsync($"https://www.google.com/recaptcha/api/siteverify?secret={secret}&response={recaptchaToken}", new StringContent(""));
        var verifyJson = await verifyResp.Content.ReadFromJsonAsync<JsonElement>();
        if (!verifyJson.TryGetProperty("success", out var s) || s.GetBoolean() == false)
        {
            return Results.BadRequest(new { error = "reCAPTCHA verification failed" });
        }
    }

    var emailClient = sp.GetService<EmailClient>();
    var notificationEmail = Environment.GetEnvironmentVariable("NOTIFICATION_EMAIL") ?? "jgill@acidni.net";
    var senderEmail = Environment.GetEnvironmentVariable("SENDER_EMAIL") ?? "noreply@acidni.net";
    var ticketId = $"FB-{DateTimeOffset.UtcNow.ToUnixTimeSeconds()}";
    
    if (emailClient != null)
    {
        try
        {
            var htmlContent = $@"
                <h2>New {type} Submitted</h2>
                <p><strong>Ticket ID:</strong> {ticketId}</p>
                <p><strong>From:</strong> {email}</p>
                <p><strong>Title:</strong> {title}</p>
                <h3>Description:</h3>
                <p>{description}</p>
            ";
            
            var emailMessage = new EmailMessage(
                senderAddress: senderEmail,
                content: new EmailContent($"[Acidni.net] Feedback: {title}")
                {
                    Html = htmlContent,
                    PlainText = $"Ticket: {ticketId}\nFrom: {email}\nTitle: {title}\n\nDescription:\n{description}"
                },
                recipients: new EmailRecipients(new List<EmailAddress> { new EmailAddress(notificationEmail) })
            );
            
            if (!string.IsNullOrWhiteSpace(email))
            {
                emailMessage.ReplyTo.Add(new EmailAddress(email));
            }
            
            var operation = await emailClient.SendAsync(WaitUntil.Started, emailMessage);
            Console.WriteLine($"Feedback email sent, operation id: {operation.Id}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed to send feedback email: {ex.Message}");
        }
    }
    
    return Results.Ok(new { success = true, ticketId, message = "Feedback submitted" });
});

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
