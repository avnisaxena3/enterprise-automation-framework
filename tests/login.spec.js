import{test,expect}from'@playwright/test';
import LoginPage from'../pages/LoginPage.js';

test("valid login",async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.navigate();
    const dashboardPage = await loginPage.login('Admin','admin123');
    
    
})