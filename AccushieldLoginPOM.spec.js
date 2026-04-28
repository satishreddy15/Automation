import { test, expect } from "@playwright/test";
import { LoginPage } from "./loginpageAccushield";
import { HomePage } from "./homepageAccushield";
import { LogoutPage } from "./logoutpageAccushield";

test("login,home,logout pages using POM", async ({ page }) => {

  // Initialize page object
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const logoutPage = new LogoutPage(page);

  // Perform login
  await loginPage.gotoLoginPage();
  await loginPage.login('satish@yopmail.com', 'Satish@155');

  // Navigate to reports in home page
  await homePage.navigateToPreScheduledReport();

  // Perform logout
  await logoutPage.logout();
});


 




