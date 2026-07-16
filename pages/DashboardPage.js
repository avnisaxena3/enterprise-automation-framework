import BasePage from './BasePage';
import AdminPage from './AdminPage';
class DashboardPage extends BasePage {

    constructor(page) {
        super(page);
        this.adminMenu = page.getByRole('link', { name: 'Admin' });
    }
async clickAdminMenu() {
    await this.adminMenu.click();
    return new AdminPage(this.page);
}
}

export default DashboardPage;