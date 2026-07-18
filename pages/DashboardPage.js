import BasePage from './BasePage';
import AdminPage from './AdminPage';
import PIMPage from './PIMPage.js';
import { expect } from '@playwright/test';

class DashboardPage extends BasePage {

    constructor(page) {
        super(page);
        this.adminMenu = page.getByRole('link', { name: 'Admin' });
        this.PIMMenu = page.getByRole('link', { name: 'PIM' });
        this.dashboardHeader =page.getByRole('heading',{name:'Dashboard'});
    }
async clickAdminMenu() {
    await Promise.all([
        this.page.waitForURL(/admin/),
        this.adminMenu.click()
    ]);
    const adminPage = new AdminPage(this.page);
    await adminPage.waitForPage();
    return adminPage;
}
async waitForPage(){

    await expect(this.dashboardHeader).toBeVisible();

}
async clickPIMMenu() {
    await Promise.all([
        this.page.waitForURL(/pim/),
        this.PIMMenu.click()
    ]);
    const pimPage = new PIMPage(this.page);
    await pimPage.waitForPage();
    return pimPage;
}
}

export default DashboardPage;