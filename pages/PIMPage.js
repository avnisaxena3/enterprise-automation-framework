import BasePage from './BasePage.js';
import { expect } from '@playwright/test';


class PIMPage extends BasePage {

    constructor(page) {
        super(page);
        this.pimHeader = page.getByRole('heading', { name: 'PIM' });
    }
    async waitForPage() {
        await expect(this.pimHeader).toBeVisible();
    }

}

export default PIMPage;