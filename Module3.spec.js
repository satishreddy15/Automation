import dotenv from 'dotenv';
dotenv.config();
import { test, expect } from '@playwright/test';

test("Successful login", async ({ page }) => {

  await page.goto("/auth/login");
  await expect(page.getByPlaceholder("Email Address")).toBeVisible();
  await page.getByPlaceholder("Email Address").fill(process.env.VALID_EMAIL);
  await expect(page.getByPlaceholder("Password")).toBeEditable();
  await page.getByPlaceholder("Password").fill(process.env.VALID_PASSWORD);
  await expect(page.getByText("visibility_off")).toBeVisible({ timeout: 5000 });
  await page.getByText("visibility_off").click();
  await expect(page.getByRole("checkbox", { name: "Remember me" })).toBeVisible({ timeout: 5000 });
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await expect(page.getByText('SIGN IN', { exact: true })).toBeEnabled();
  await page.getByText('SIGN IN', { exact: true }).click();
});


test("Invalid Credentials", async ({ page }) => {

  await page.goto("/auth/login");
  await expect(page.getByPlaceholder("Email Address")).toBeVisible();
  await page.getByPlaceholder("Email Address").fill(process.env.INVALID_EMAIL);
  await expect(page.getByPlaceholder("Password")).toBeVisible();
  await page.getByPlaceholder("Password").fill(process.env.INVALID_PASSWORD);
  await expect(page.getByText("visibility_off")).toBeVisible({ timeout: 5000 });
  await page.getByText("visibility_off").click();
  await expect(page.getByRole("checkbox", { name: "Remember me" })).toBeVisible();
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await expect(page.getByText('SIGN IN', { exact: true })).toBeEnabled();
  await page.getByText('SIGN IN', { exact: true }).click();
  await expect(page.getByText('Please enter valid email and password.')).toBeVisible({ timeout: 6000 });
  await expect(page.getByText('Please enter valid email and password.')).toContainText('valid email');
  await expect(page).toHaveURL(/.*login/, { timeout: 5000 });
});


test("Logout Functionality", async ({ page }) => {

  await page.goto("/auth/login");
  await expect(page.getByPlaceholder("Email Address")).toBeVisible();
  await page.getByPlaceholder("Email Address").fill(process.env.VALID_EMAIL);
  await expect(page.getByPlaceholder("Password")).toBeEditable();
  await page.getByPlaceholder("Password").fill(process.env.VALID_PASSWORD);
  await expect(page.getByText("visibility_off")).toBeVisible({ timeout: 5000 });
  await page.getByText("visibility_off").click();
  await page.getByRole("checkbox", { name: "Remember me" }).check();
  await expect(page.getByText('SIGN IN', { exact: true })).toBeVisible();
  await expect(page.getByText('SIGN IN', { exact: true })).toBeEnabled();
  await page.getByText('SIGN IN', { exact: true }).click();
  await expect(page.locator('span:has-text("account_circle")')).toBeVisible({ timeout: 6000 });
  await page.locator('span:has-text("account_circle")').click();
  await expect(page.locator("li a:has-text('Logout')")).toBeVisible();
  await page.locator("li a:has-text('Logout')").click();
  await expect(page).toHaveURL("/auth/login", { timeout: 5000 });
});


















































