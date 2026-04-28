export class LogoutPage {
  constructor(page) {   //All these are attribute of the elements
    this.page = page;
    this.accountCircleIcon = page.locator('span:has-text("account_circle")');
    this.logoutLink = page.locator("//li/a[text()='Logout']");
  }

  async logout() {   //All these are corresponding action methods
    await this.accountCircleIcon.click();
    await this.logoutLink.click();
  }
}