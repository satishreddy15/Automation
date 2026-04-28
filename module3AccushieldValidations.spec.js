import { test, expect } from '@playwright/test';
  test("Successful login", async ({ page }) => {
  await page.goto("/auth/login");
  await expect(page.locator("//img[@class='accuLogo']")).toBeVisible();
  await page.getByPlaceholder("Email Address").fill("satish@yopmail.com");
  await page.getByPlaceholder("Password").fill("Satish@155");
  await page.getByText("visibility_off").click({ timeout: 150000 });
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await expect(page.locator("//span[normalize-space()='SIGN IN']")).toBeEnabled();
  await page.locator("//span[text()=' SIGN IN']").click();
  await expect(page.locator("//div[@class='blockEntry p-3']")).toBeVisible({ timeout: 150000 });
});


test("Invalid Credentials", async ({ page }) => {
  await page.goto("/auth/login");
  await page.getByPlaceholder("Email Address").fill("satishch@yopmail.com");
  await page.getByPlaceholder("Password").fill("Satish$15");
  await page.getByText("visibility_off").click({ timeout: 150000 });
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await page.locator("//span[text()=' SIGN IN']").click();
  await expect(page.getByText('Please enter valid email and password.')).toBeVisible({ timeout: 150000 });
});


test("Logout Functionality", async ({ page }) => {
  await page.goto("/auth/login");
  await page.getByPlaceholder("Email Address").fill("satish@yopmail.com");
  await expect(page.getByPlaceholder("Email Address")).toBeVisible();
  await page.getByPlaceholder("Password").fill("Satish@155");
  await page.getByText("visibility_off").click({ timeout: 150000 });
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await expect(page.locator("//span[normalize-space()='SIGN IN']")).toBeEnabled();
  await page.locator("//span[text()=' SIGN IN']").click();
  await expect(page.locator('span:has-text("account_circle")')).toBeVisible({ timeout: 150000 });
  await page.locator('span:has-text("account_circle")').click();
  await page.locator("//li/a[text()='Logout']").click();
  await expect(page).toHaveURL("/auth/login");
});










































