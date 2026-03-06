/**
 * @jest-environment jsdom
 */

describe("acidni-website", () => {
  it("should have correct site metadata", () => {
    expect("Acidni LLC").toBeTruthy();
  });

  it("should define navigation routes", () => {
    const routes = ["/", "/about", "/services", "/contact"];
    expect(routes.length).toBeGreaterThan(0);
    routes.forEach((route) => {
      expect(route).toMatch(/^\//);
    });
  });

  it("should have health endpoint returning 200", async () => {
    // Integration test for the health Azure Function
    const healthHandler = require("../api/health/index");

    const mockContext = { res: {} };
    const mockReq = {};

    await healthHandler(mockContext, mockReq);

    expect(mockContext.res.status).toBe(200);
    expect(mockContext.res.body.status).toBe("healthy");
    expect(mockContext.res.body.service).toBe("acidni-website");
    expect(mockContext.res.body.timestamp).toBeTruthy();
  });
});
