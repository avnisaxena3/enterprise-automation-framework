import BasePage from './BasePage.js';
import { expect } from '@playwright/test';
import PersonalDetailsPage from './PersonalDetailsPage.js';

class AddEmployeePage extends BasePage {

    constructor(page) {
        super(page);
        this.addEmployeeHeader = page.getByRole('heading', { name: 'Add Employee' });
        this.firstNameTextbox = page.getByRole('textbox', { name: 'First Name' });
        this.middleNameTextbox = page.getByRole('textbox', { name: 'Middle Name' });
        this.lastNameTextbox = page.getByRole('textbox', { name: 'Last Name' });
        
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async waitForPage() {
        await expect(this.addEmployeeHeader).toBeVisible();
    }
    async enterFirstName(firstName) {
        await this.firstNameTextbox.fill(firstName);
    }
    async enterMiddleName(middleName) {
        await this.middleNameTextbox.fill(middleName);
    }
    async enterLastName(lastName) {
        await this.lastNameTextbox.fill(lastName);
    }
    
    async clickSaveButton() {
        await this.saveButton.click();
    }
    async addEmployee(firstName, middleName, lastName) {
        await this.enterFirstName(firstName);
        await this.enterMiddleName(middleName);
        await this.enterLastName(lastName);
        
        await Promise.all([
    this.page.waitForURL(/viewPersonalDetails/),
    this.clickSaveButton()
]);
    
    const personalDetailsPage = new PersonalDetailsPage(this.page);
    await personalDetailsPage.waitForPage();
    return personalDetailsPage;
    }

}

export default AddEmployeePage;