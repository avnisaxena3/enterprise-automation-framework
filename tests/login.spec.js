import{test,expect}from'../fixtures/baseFixtures.js';
import loginData from'../test-data/loginData.js';

test("valid login",async({loginPage})=>{
    
    await loginPage.navigate();

    const dashboardPage = await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
);

    
    
})