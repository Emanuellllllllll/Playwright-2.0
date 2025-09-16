const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/login-page');

test.describe('SauceDemo Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test('Scenario 1: Valid Login - standard_user', async ({ page }) => {
        // Test data
        const username = 'standard_user';
        const password = 'secret_sauce';

        // Execute login
        await loginPage.login(username, password);

        // Verify redirect to inventory page
        await loginPage.verifyRedirectedToInventory();

        // Verify no error message is displayed
        await loginPage.verifyNoErrorDisplayed();

        // Verify login form is no longer visible
        await loginPage.verifyLoginFormNotVisible();

        // Verify inventory page is displayed successfully
        await loginPage.verifyInventoryPageDisplayed();
    });

    test('Scenario 2: Locked Out User - locked_out_user', async ({ page }) => {
        // Test data
        const username = 'locked_out_user';
        const password = 'secret_sauce';
        const expectedErrorMessage = 'Epic sadface: Sorry, this user has been locked out.';

        // Execute login
        await loginPage.login(username, password);

        // Verify user remains on login page
        await loginPage.verifyRemainsOnLoginPage();

        // Verify login form is still visible
        await loginPage.verifyLoginFormVisible();

        // Verify error message is displayed
        await loginPage.verifyErrorDisplayed(expectedErrorMessage);
    });

    test('Scenario 3: Complete Flow - Login and Logout', async ({ page }) => {
        // Test valid login
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.verifyRedirectedToInventory();
        await loginPage.verifyInventoryPageDisplayed();

        // Test logout
        await loginPage.logout();
        await loginPage.verifyRemainsOnLoginPage();
        await loginPage.verifyLoginFormVisible();
    });
});
