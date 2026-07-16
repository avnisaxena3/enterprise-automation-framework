import BasePage from './BasePage.js';

class AdminPage extends BasePage {

    constructor(page) {
        super(page);
        this.usernameTextbox = page.getByRole('textbox').nth(1);
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.firstUserName = page.locator('.oxd-table-card').first();
    }

    async enterUsername(username) {
        await this.usernameTextbox.fill(username);
    }
    async clickSearchButton() {
        await this.searchButton.click();
    }
    async searchUser(username) {
        await this.enterUsername(username);
        await this.clickSearchButton();
    }
    async getFirstUserName() {
    return await this.firstUserName.textContent();
}

}

export default AdminPage;