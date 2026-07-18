import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class AdminPage extends BasePage {
    constructor(page) {
        super(page);
        // Page Verification
        this.systemUsersHeading = page.getByRole('heading', {
            name: 'System Users'
        });
        // Search User
        this.searchForm = page.locator('form');
        this.usernameTextbox =this.searchForm.getByRole('textbox').first();
        this.searchButton = page.getByRole('button', {name: 'Search'});
        // Search Result
        this.firstUserName = page.locator('.oxd-table-card').first();
    }

    // ----------------------------
    // Page Verification
    // ----------------------------

    async waitForPage() {
        await expect(this.systemUsersHeading).toBeVisible();
    }

    // ----------------------------
    // Small Actions
    // ----------------------------

    async enterUsername(username) {
        await this.usernameTextbox.fill(username);
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }

    // ----------------------------
    // Business Methods
    // ----------------------------

    async searchUser(username) {

        await this.enterUsername(username);

        await this.clickSearchButton();

    }

}

export default AdminPage;