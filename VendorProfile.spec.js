  import { test, expect } from '@playwright/test';
  test('VendorCreation test', async ({ page }) => { 

  //Application URL  
  await page.goto('https://qa.accushield.com');

  //Login
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('satishtest@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password1@34');
  await page.getByText('visibility_off').click();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.locator("//span[text()=' SIGN IN']").click();

  // Authentication
  await page.getByText('Authenticator Code').click();
  await page.getByRole('textbox', { name: 'OTP' }).fill('122344');
  await page.locator('a').click(); 

  // Creation of new Vendor
  await page.getByRole('link', { name: 'Service/Vendor type' }).click();
  await page.getByRole('button', { name: 'ADD' }).click();
  await page.getByRole('textbox', { name: 'firstName' }).click();
  await page.getByRole('textbox', { name: 'firstName' }).fill('kranthi');
  await page.locator('#mat-mdc-form-field-label-26').getByText('Last Name').click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('kumar');
  await page.locator('div').filter({ hasText: /^Email$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'email' }).fill('kranthi@yopmail.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('600-001-1111');
  await page.locator('.mat-mdc-select-placeholder').first().click();
  await page.getByText('HealthBridge HomeCare').click();
  await page.locator('div').filter({ hasText: /^Primary Service Type$/ }).nth(3).click();
  await page.getByText('Home Health (Medical)').click();
  await page.locator('.mat-mdc-select-placeholder').first().click();
  await page.getByText('Private Duty Aide').click();
  await page.locator('#mat-mdc-slide-toggle-2-button').click();
  await page.getByRole('button', { name: 'Save' }).click();

  });







