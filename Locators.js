//1.page.getByRole():
// locates elements based on their ARIA role, accessible name, and accessibility attributes.
//It works using: 
//Implicit roles (e.g., <button>, <input>)
//Explicit roles (role="button")
//Syntax:
//page.getByRole(role, options)
//Button by visible name - await page.getByRole('button', { name: 'Sign In' }).click();
//Textbox (Email) - await page.getByRole('textbox', { name: 'Email Address' }).fill('satish@gmail.com');
//Checkbox - await page.getByRole('checkbox', { name: 'Remember me' }).check();
//Heading - await expect(
//   page.getByRole('heading', { name: 'Login' })
// ).toBeVisible();
// Why use it?
// Stable
// Accessibility aligned
// Works even if HTML structure changes


//2.page.getByText():
// locates an element by visible text content.
// It matches what the user sees on the screen.
//Syntax:
// page.getByText(text, options)
//Click text - await page.getByText('SIGN IN').click();
//Partial text match - await page.getByText('Sign', { exact: false }).click();
//Assertion - await expect(
//   page.getByText('Invalid email or password')
// ).toBeVisible();
//Caution:
// Avoid if text changes often
// Prefer getByRole() for buttons/links


//3.page.getByPlaceholder():
// Locates an input element using its placeholder text.
//Syntax:
// page.getByPlaceholder(placeholderText)
//Email input - await page
//   .getByPlaceholder('Email Address')
//   .fill('satish@gmail.com');
//Search box - await page
//   .getByPlaceholder('Search...')
//   .fill('Playwright');
//Note:
// Use only if placeholder text is stable
// Not ideal if placeholder disappears after typing


//4.page.getByLabel():
//  locates form fields using the label text associated with them.
// Works with:
// <label for="id">
// Wrapped <input>
// aria-label
//Syntax:
// page.getByLabel(labelText)
//Email field - await page.getByLabel('Email Address').fill('satish@gmail.com');
//Password field - await page.getByLabel('Password').fill('Password@123');
//Checkbox - await page.getByLabel('Remember Me').check();
//Why it’s great?
// Perfect for forms
// Human-readable
// Highly stable


//5.page.getByAltText():
// Locates elements (mostly images) using their alt text.
// Used mainly for:
// Logos
// Icons
// Accessibility validation
//Syntax:
// page.getByAltText(altText)
//Logo visibility - await expect(
//   page.getByAltText('Company Logo')
// ).toBeVisible();
//Click image - await page.getByAltText('User Profile').click();
//Best use:
// Image validation
// Accessibility checks
