export class LoginPage {
  constructor(page) {  
    this.page = page;
    this.emailTextbox = page.getByPlaceholder('Email Address');
    this.passwordTextbox = page.getByPlaceholder('Password');
    this.visibilityOff = page.getByText('visibility_off');
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me' });
    this.signInButton = page.locator("//span[text()=' SIGN IN']");
   }

  async gotoLoginPage() {
    await this.page.goto('https://qa.accushield.com/auth/login');
  }

    async login(email, password) {   
    await this.emailTextbox.fill(email);
    await this.passwordTextbox.fill(password);
    await this.visibilityOff.click();
    await this.rememberMeCheckbox.check();
    await this.signInButton.click();
  }
}









