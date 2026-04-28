import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';

const Validations = JSON.parse(readFileSync(new URL('./Validations.json', import.meta.url)).toString());

test("Successful login", async ({ page }) => {
  await page.goto("/auth/login");
  await expect(page.locator("//img[@class='accuLogo']")).toBeVisible();
  await page.getByPlaceholder("Email Address").fill(Validations.validLogin.email);
  await page.getByPlaceholder("Password").fill(Validations.validLogin.password);
  await page.getByText("visibility_off").click({ timeout: 150000 });
  if (Validations.validLogin.rememberMe) {
    await page.getByRole("checkbox", { name: "Remember me" }).check();
  }
  await page.locator("//span[text()=' SIGN IN']").click();
  await expect(page.locator("//div[@class='blockEntry p-3']")).toBeVisible({ timeout: 150000 });
});


test("Invalid Credentials", async ({ page }) => {
  await page.goto("/auth/login");
  await page.getByPlaceholder("Email Address").fill(Validations.invalidLogin.email);
  await page.getByPlaceholder("Password").fill(Validations.invalidLogin.password);
  await page.getByText("visibility_off").click({ timeout: 150000 });
  if (Validations.invalidLogin.rememberMe) {
    await page.getByRole("checkbox", { name: "Remember me" }).check();
  }
  await page.locator("//span[text()=' SIGN IN']").click();
  await expect(page.getByText('Please enter valid email and password.')).toBeVisible({ timeout: 150000 });
});


test("Logout Functionality", async ({ page }) => {
  await page.goto("/auth/login");
  await page.getByPlaceholder("Email Address").fill(Validations.logoutLogin.email);
  await expect(page.getByPlaceholder("Email Address")).toBeVisible();
  await page.getByPlaceholder("Password").fill(Validations.logoutLogin.password);
  await page.getByText("visibility_off").click({ timeout: 150000 });
  if (Validations.logoutLogin.rememberMe) {
    await page.getByRole("checkbox", { name: "Remember me" }).check();
  }
  await page.locator("//span[text()=' SIGN IN']").click();
  await expect(page.locator('span:has-text("account_circle")')).toBeVisible({ timeout: 150000 });
  await page.locator('span:has-text("account_circle")').click();
  await page.locator("//li/a[text()='Logout']").click();
  await expect(page).toHaveURL("/auth/login");
});


















