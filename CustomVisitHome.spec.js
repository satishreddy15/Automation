import { test, expect } from '@playwright/test';
test('CustomPatientDashboardVisit', async ({ page }) => { 

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
await page.locator('#mat-menu-panel-3').getByText('custom patient type').click();
await page.getByRole('textbox', { name: 'searchVisitor' }).click();
await page.getByRole('textbox', { name: 'searchVisitor' }).fill('630-855-8555');
await page.getByRole('button', { name: 'SEARCH' }).click();
await page.getByRole('row', { name: 'Sai Test 630-855-8555' }).getByLabel('', { exact: true }).check();

await page.locator('.mat-mdc-select-placeholder').first().click();
await page.getByText('Visit Staff visitor type').click();
await page.getByRole('row', { name: 'Akash Redddy' }).getByLabel('', { exact: true }).check();

await page.getByRole('radio', { name: 'Yes' }).check();
await page.getByRole('radio', { name: 'Yes' }).last().check();
await page.getByRole('button', { name: 'SAVE' }).click();

await page.getByRole('row', { name: /630-855-8555/ }).locator('input[type="checkbox"]').first().check();
await page.getByRole('button', { name: 'SIGN OUT' }).click();
await page.getByRole('radio', { name: 'Yes' }).check();
await page.getByRole('radio', { name: 'Yes' }).last().check();
await page.getByRole('button', { name: 'SAVE' }).click();

});



