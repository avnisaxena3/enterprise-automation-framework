class LoginPage {
    constructor(page){
        this.page=page;

        this.usernameTextbox=page.getByRole('textbox',{name:'Username'});
        this.passwordTextBox=page.getByRole('textbox',{name:'Password'});
        this.loginButton=page.getByRole('button',{name:'Login'});
        this.forgotPasswordLink=page.getByText('Forgot your password?');
    }

    async navigate(){
        await this.page.goto('/');
    }
    async enterUsername(username){
        await this.usernameTextbox.fill(username);
    }
    async enterPassword(password){
        await this.passwordTextBox.fill(password);
    }
    async clickLoginButton(){
        await this.loginButton.click();
    }
    async login(username,password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}
export default LoginPage;