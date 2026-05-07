export class Guest1 {

    constructor(page) {
    this.page = page;
        this.emailTextbox = page.getByRole('textbox', { name: 'email' });
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
        this.visibilityIcon = page.getByText('visibility_off');
        this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me' });
        this.signInButton = page.locator("//span[text()=' SIGN IN']");
        this.addButton = page.getByRole('button', { name: 'ADD' }).first();
        this.visitOption = page.getByText('Visit', { exact: true });
        this.familyGuestVisitorType = page.locator('#mat-menu-panel-3').getByText('Family Guest visitor type');
        this.phoneNameSearch = page.getByText('Phone/Name');
        this.searchVisitorTextbox = page.getByRole('textbox', { name: 'searchVisitor' });
        this.searchButton = page.getByRole('button', { name: 'SEARCH' });
        this.visitorCheckbox = page.getByRole('row', { name: 'Mounika Resident 630-685-7535' }).getByLabel('', { exact: true });
        this.visitResidentDropdown = page.locator('.mat-mdc-select-placeholder').first();
        this.visitResidentType = page.getByText('Visit Resident type');
        this.residentCheckbox = page.getByRole('row', { name: 'Abhi Q Test Assisted Living' }).getByLabel('', { exact: true });
        this.firstYesRadio = page.getByRole('radio', { name: 'Yes' });
        this.secondYesRadio = page.locator('#mat-radio-9-input');
        this.saveButton = page.locator("//span[normalize-space()='SAVE']");
        this.checkCircle = page.getByText('check_circle_outline Finalize');

        
        this.signOutCheckbox = page.locator('//mat-row[.//text()[contains(.,"Mounika")]]//mat-checkbox//input').first();
        this.signOutButton = page.getByRole('button', { name: 'SIGN OUT' });
        this.acceptRadio = page.getByRole('radio', { name: 'Accept' });
    }

    async login(email, password) {

        await this.page.goto('https://qa.accushield.com');
        await this.emailTextbox.fill(email);
        await this.passwordTextbox.fill(password);
        await this.visibilityIcon.click();
        await this.rememberMeCheckbox.check();
        await this.signInButton.click();
    }

    async addGuestVisit() {

        await this.addButton.click();
        await this.visitOption.click();
        await this.familyGuestVisitorType.click();
        await this.phoneNameSearch.click();
        await this.searchVisitorTextbox.fill('mounika');
        await this.searchButton.click();
        await this.visitorCheckbox.check();
        await this.visitResidentDropdown.click();
        await this.visitResidentType.click();
        await this.residentCheckbox.check();
        await this.firstYesRadio.check();
        await this.secondYesRadio.check();
        await this.saveButton.click();
        await this.checkCircle.click();

    }

    async signOutGuest() {

        await this.signOutCheckbox.check();
        await this.signOutButton.click();
        await this.firstYesRadio.check();
        await this.page.getByRole('radio', { name: 'Yes' }).last().check();
        await this.acceptRadio.check({ timeout: 3000 });
        await this.saveButton.click();
    }
}