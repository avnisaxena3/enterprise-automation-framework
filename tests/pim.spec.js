import { test, expect } from '../fixtures/baseFixtures.js';
import loginData from '../test-data/loginData.js';

test('Navigate to PIM Module', async ({ loginPage }) => {

    await loginPage.navigate();

    const dashboardPage = await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    const pimPage = await dashboardPage.clickPIMMenu();

});