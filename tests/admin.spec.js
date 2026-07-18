import{test,expect}from'../fixtures/baseFixtures.js';
import loginData from'../test-data/loginData.js';

test("Search Admin User",async({loginPage})=>{
    
    await loginPage.navigate();
    const dashboardPage = await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
);
    const adminPage = await dashboardPage.clickAdminMenu();
    await adminPage.searchUser('Admin');
    await expect(adminPage.firstUserName).toContainText('Admin');
})