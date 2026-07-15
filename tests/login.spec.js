import{test,expect}from'@playwright/test';
import LoginPage from'../pages/LoginPage.js';

test("valid login",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('Admin','admin123');
    await expect(page).toHaveURL(/dashboard/);
})