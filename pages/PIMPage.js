import BasePage from './BasePage.js';
import { expect } from '@playwright/test';
import AddEmployeePage from './AddEmployeePage.js';

class PIMPage extends BasePage {

    constructor(page) {
        super(page);
        this.pimHeader = page.getByRole('heading', { name: 'PIM' });
        this.addEmployeeButton = page.getByRole('link', {name: 'Add Employee'});
    }
    async waitForPage() {
        await expect(this.pimHeader).toBeVisible();
    }
    async clickAddEmployee() {

    await Promise.all([
        this.page.waitForURL(/addEmployee/),
        this.addEmployeeButton.click()
    ]);
    const addEmployeePage = new AddEmployeePage(this.page);
    await addEmployeePage.waitForPage();
    return addEmployeePage;
}

}

export default PIMPage;