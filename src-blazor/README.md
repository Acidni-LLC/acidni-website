# Acidni Blazor Container App

This folder contains a Blazor Server (.NET 9) containerized application that reproduces the Acidni website with identical styling and working feedback/contact endpoints.

## Run locally

```bash
dotnet build src-blazor/Acidni.Web/Acidni.Web.csproj
dotnet run --project src-blazor/Acidni.Web/Acidni.Web.csproj
# open http://localhost:8080
```

## Container build & run

```bash
docker build -t acidni-web:latest src-blazor/Acidni.Web
docker run -p 8080:8080 --env RECAPTCHA_SECRET_KEY=... --env EMAIL_NOTIFICATION_ENDPOINT=... --env NOTIFICATION_EMAIL=contact@acidni.net acidni-web:latest
# open http://localhost:8080
```

## Environment variables
- `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA v3 secret (optional)
- `EMAIL_NOTIFICATION_ENDPOINT`: APIM email endpoint URL
- `NOTIFICATION_EMAIL`: Destination email

## Notes
- Styling uses a minimal copy of the compiled Tailwind CSS (`wwwroot/css/site.css`). Replace with the full compiled CSS from Next.js `out/_next/static/css/*.css` for perfect parity.
- Routes:
  - `/` home
  - `/products` list
  - `/feedback` form → `/api/feedback`
  - `/api/contact` minimal endpoint
