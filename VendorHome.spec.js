import { test, expect } from '@playwright/test';
test('VendorDashboardVisit', async ({ page }) => { 
  await page.goto('https://qa.accushield.com');

  //Login
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('satish@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Satish@155');
  await page.getByText('visibility_off').click();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.locator("//span[text()=' SIGN IN']").click();

//Vendor Search
await page.getByRole('button', { name: 'ADD' }).first().click();
await page.getByRole('menuitem', { name: 'Visit', exact: true }).click();
await page.locator('#mat-menu-panel-3').getByText('Service/Vendor type').click();
await page.getByRole('textbox', { name: 'searchVisitor' }).click();
await page.getByRole('textbox', { name: 'searchVisitor' }).fill('630-753-5762');
await page.getByRole('button', { name: 'SEARCH' }).click();
await page.getByRole('row', { name: 'Tharun Test 630-753-5762' }).getByLabel('', { exact: true }).check();

//Company & Service types selection
await page.getByText('Company Name / Self-employed').click();
await page.getByRole('option', { name: 'HealthBridge HomeCare Services Pvt. Ltd.' }).click();
await page.getByText('Primary Service Type', { exact: true }).click();
await page.getByRole('option', { name: 'Home care (Non-Medical)' }).click();
await page.getByText('Secondary Service Type', { exact: true }).click();
await page.getByRole('option', { name: 'Licensed Practical Nurse (LPN)' }).click();

//Reason for visit selection
await page.locator('.mat-mdc-select-placeholder').first().click();
await page.getByText('Visit custom patient type').click();
await page.getByRole('row', { name: 'Hari Krishna' }).getByLabel('', { exact: true }).check();

//Sign-in with MCQ's 
await page.getByRole('radio', { name: 'Yes', exact: true }).check();
await page.locator('#mat-radio-9-input').check();
await page.getByRole('radio', { name: 'yes', exact: true }).check();
await page.getByRole('button', { name: 'SAVE' }).click();

//Sign-out with MCQ's
await page.locator('//mat-row[.//text()[contains(.,"630-753-5762")]]//mat-checkbox//input').first().check();
await page.getByRole('button', { name: 'SIGN OUT' }).click();
await page.getByRole('radio', { name: 'Yes' }).check();
await page.locator('#mat-radio-15-input').check();
await page.getByRole('button', { name: 'SAVE' }).click();

});












