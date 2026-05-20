import { test, expect } from '@playwright/test';   
import fs from 'fs'; 

const html = fs.readFileSync('testData.html', 'utf8');

test.beforeEach(async ({ page }) => {

  await page.goto('/auth/login');
  await expect(page.getByPlaceholder('Email Address')).toBeVisible();
  await expect(page.getByPlaceholder('Password')).toBeVisible();

});


test('Successful Login', async ({ page }) => {

  await page.getByPlaceholder("Email Address").fill(
        html.split('id="email1"')[1].split('value="')[1].split('"')[0]);
  await expect(page.getByPlaceholder("Password")).toBeEditable();
  await page.getByPlaceholder("Password").fill(
        html.split('id="password1"')[1].split('value="')[1].split('"')[0]);
  await expect(page.getByText('visibility_off')).toBeVisible();
  await page.getByText('visibility_off').click();
  await expect(page.getByRole('checkbox', { name: 'Remember me' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await expect(page.getByText('SIGN IN', { exact: true })).toBeEnabled();
  await page.getByText('SIGN IN', { exact: true }).click();
  await expect(page.locator('span:has-text("account_circle")')).toBeVisible({ timeout: 6000 });

});


test('Invalid Credentials', async ({ page }) => {

  await page.getByPlaceholder("Email Address").fill(
        html.split('id="email2"')[1].split('value="')[1].split('"')[0]);
  await expect(page.getByPlaceholder("Password")).toBeEditable();
  await page.getByPlaceholder("Password").fill(
        html.split('id="password2"')[1].split('value="')[1].split('"')[0]);
  await expect(page.getByText('visibility_off')).toBeVisible();
  await page.getByText('visibility_off').click();
  await expect(page.getByRole('checkbox', { name: 'Remember me' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await expect(page.getByText('SIGN IN', { exact: true })).toBeEnabled();
  await page.getByText('SIGN IN', { exact: true }).click();
  await expect(page.getByText('Please enter valid email and password.')).toBeVisible({ timeout: 6000 });
  await expect(page.getByText('Please enter valid email and password.')).toContainText('valid email');
  await expect(page).toHaveURL(/.*login/);

});


test('Logout Functionality', async ({ page }) => {

  await page.getByPlaceholder("Email Address").fill(
        html.split('id="email1"')[1].split('value="')[1].split('"')[0]);
  await expect(page.getByPlaceholder("Password")).toBeEditable();
  await page.getByPlaceholder("Password").fill(
        html.split('id="password1"')[1].split('value="')[1].split('"')[0]);
  await expect(page.getByText('visibility_off')).toBeVisible();
  await page.getByText('visibility_off').click();
  await expect(page.getByRole('checkbox', { name: 'Remember me' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'Remember me' }).check();
  await expect(page.getByText('SIGN IN', { exact: true })).toBeEnabled();
  await page.getByText('SIGN IN', { exact: true }).click();
  await expect(page.locator('span:has-text("account_circle")')).toBeVisible({ timeout: 6000 });
  await page.locator('span:has-text("account_circle")').click();
  await expect(page.locator("li a:has-text('Logout')")).toBeVisible();
  await page.locator( "li a:has-text('Logout')").click();
  await expect(page).toHaveURL('/auth/login');

});


















// import { test, expect } from '@playwright/test';
// What it does: Imports the core building blocks from the Playwright Test library.
// test is used to declare and run your test blocks.
// expect is the assertion library used to verify that things look or behave the way they are supposed to.


// import fs from 'fs';
// What it does: Imports Node.js's built-in File System (fs) module. This module allows the script to interact with your computer's files.


// const html = fs.readFileSync('testData.html', 'utf8');
// What it does: Reads a file named testData.html from your project folder.
// readFileSync means it stops everything and reads the file completely before moving to the next line.
// 'utf8' tells Node to read it as a readable text string (instead of raw binary data) and stores that text inside the html constant.


// test.beforeEach(async ({ page }) => {
// What it does: Defines a hook that will automatically run before each individual test in this file.
// async ({ page }) creates an asynchronous function and passes in Playwright's page object, which represents an isolated browser tab.


//   await page.getByPlaceholder("Email Address").fill(
//         html.split('id="email1"')[1].split('value="')[1].split('"')[0]);
// html.split('id="email1"')[1] cuts the HTML text in half at id="email1" and grabs everything after it.
// .split('value="')[1] cuts that remaining text at value=" and grabs everything after that.
// .split('"')[0] cuts it at the very next quotation mark and grabs the text before it.
// Result: It isolates whatever text is inside the value attribute for the element with id="email1" (e.g., "user@example.com").














//Why It Is STILL Not Framework-Level
  //❌ 1. Repeated Login Flow
  //❌ 2. No POM (Biggest Missing Part)
  //❌ 3. Hardcoded Data
         //should come from:
        // testData
       // JSON
       // env
  //❌ 4. Not Easily Maintainable