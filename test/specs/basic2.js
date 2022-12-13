describe('SwagLabs - Saucedemo', async() => {
    it('Error LogIn', async() => {
        browser.url('https://www.saucedemo.com/');
        
        const username = await $("#user-name");
        await username.setValue("fjkehwurh");

        const password = await $("#password");
        await password.setValue("password");

        const logIn = await $("#login-button");
        await logIn.click();

        const error = await $("div .error-message-container");
        await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');        
    });

    it('Log In', async() => {
              
        const username = await $("#user-name");
        await username.setValue("standard_user");

        const password = await $("#password");
        await password.setValue("secret_sauce");

        const logIn = await $("#login-button");
        await logIn.click();

        const homePage = await $("select .product_sort_container");
        await homePage.isExisting();        
    });

    it('Log Out', async() => {
              
        const menu = await $("#react-burger-menu-btn");
        await menu.click();

        const logOut = await $("#logout_sidebar_link");
        await logOut.click();

        const logInAppeared = await $("#login_button_container");
        await logInAppeared.isDisplayed();

    })
})