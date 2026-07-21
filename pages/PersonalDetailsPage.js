import BasePage from './BasePage.js';
import { expect } from '@playwright/test';

class PersonalDetailsPage extends BasePage {

    constructor(page) {
        super(page);
        this.personalDetailsHeader = page.getByRole('heading', { name: 'Personal Details' });
    }

    async waitForPage() {
        await expect(this.personalDetailsHeader).toBeVisible();
        
    }

}

export default PersonalDetailsPage;