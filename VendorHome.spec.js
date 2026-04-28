import { test, expect } from '@playwright/test';
test('VendorVisit test', async ({ page }) => { 
  await page.goto('https://qa.accushield.com');

  //Login
  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('satishtest@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password1@34');
  await page.getByText('visibility_off').click();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.locator("//span[text()=' SIGN IN']").click();

  //Authentication
  await page.getByText('Authenticator Code').click();
  await page.getByRole('textbox', { name: 'OTP' }).fill('122344');
  await page.locator('a').click();

  //Community selection
  // await page.locator('#mat-select-value-1').click();
  // await page.getByRole('textbox', { name: 'dropdown search' }).fill('cs');
  // await page.getByRole('option', { name: 'CS Quest - Honolulu' }).click();
  
  // await page.locator('text=Accounts40').nth(1).click();

  //Search visitor
  await page.getByRole('button', { name: 'ADD' }).first().click();
  await page.getByRole('menuitem', { name: 'Visit', exact: true }).click();
  await page.getByRole('menuitem', { name: 'Service/Vendor type' }).click();
  await page.getByRole('textbox', { name: 'searchVisitor' }).click();
  await page.getByRole('textbox', { name: 'searchVisitor' }).fill('958-655-7535');
  await page.getByRole('button', { name: 'SEARCH' }).click();
  await page.getByRole('row', { name: 'Rushil Qa Test' }).getByLabel('', { exact: true }).check();

  //Company & Service types selection
  await page.getByText('Company Name / Self-employed').click();
  await page.getByText('HealthBridge HomeCare').click();
  await page.getByText('Primary Service Type', { exact: true }).click();
  await page.getByText('Hospice').click();
  await page.getByText('Secondary Service Type', { exact: true }).click();
  await page.getByText('Licensed Practical Nurse (LPN)').click();

  //Reason for visit & MCQ'S
  await page.locator('.mat-mdc-select-placeholder').first().click();
  await page.getByText('Visit custom patient type').click();
  await page.getByRole('row', { name: 'Dhanush Kumr' }).getByLabel('', { exact: true }).check();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.locator('#mat-radio-9-input').check();

  // await page.getByLabel('Fahrenheit', { exact: true }).click();
  // await page.getByRole('textbox', { name: 'Fahrenheit' }).click();
  // await page.getByRole('textbox', { name: 'Fahrenheit' }).fill('96');
  await page.locator("//span[normalize-space()='SAVE']").click();

});









