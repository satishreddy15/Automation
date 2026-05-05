import { test, expect } from '@playwright/test';
test('VolunteerDashboardVisit', async ({ page }) => { 

  await page.goto('https://qa.accushield.com');

  await page.getByRole('textbox', { name: 'email' }).click();
  await page.getByRole('textbox', { name: 'email' }).fill('satish@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Satish@155');
  await page.getByText('visibility_off').click();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await page.locator("//span[text()=' SIGN IN']").click();

  await page.getByRole('button', { name: 'ADD' }).first().click();
  await page.getByText('Visit', { exact: true }).click();

  await page.locator('#mat-menu-panel-3').getByText('custom Volunteer type').click();
  await page.getByRole('textbox', { name: 'searchVisitor' }).click();
  await page.getByRole('textbox', { name: 'searchVisitor' }).fill('630-828-5556');
  await page.getByRole('button', { name: 'SEARCH' }).click();
  await page.getByRole('row', { name: 'Satish Volunter 630-828-5556' }).getByLabel('', { exact: true }).check();
  await page.getByText('Reason', { exact: true }).click();
  await page.getByText('Attend Event for Fr Quest').click();
  await page.getByRole('row', { name: '15th Event' }).getByLabel('', { exact: true }).check();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.locator('#mat-radio-9-input').check();
  await page.getByRole('radio', { name: 'Accept' }).check();

// await page.getByRole('textbox', { name: 'Fahrenheit' }).fill('98.6');
await page.locator("//span[normalize-space()='SAVE']").click();

//  await page.getByRole('button', { name: 'SUBMIT' }).click();
await page.locator('//mat-row[.//text()[contains(.,"630-828-5556")]]//mat-checkbox//input').first().check();
//   await page.getByRole('row', { name: '05/04/2026 02:40 AM --- In' }).getByLabel('', { exact: true }).check();
await page.getByRole('button', { name: 'SIGN OUT' }).click();
await page.getByRole('radio', { name: 'Yes' }).check();

// await page.locator('#mat-radio-5-input').check();
await page.getByRole('radio', { name: 'Yes' }).last().check();

await page.getByRole('radio', { name: 'Accept' }).check({timeout: 3000});

// await page.getByRole('textbox', { name: 'Fahrenheit' }).fill('99.6');
await page.locator("//span[normalize-space()='SAVE']").click();

});






