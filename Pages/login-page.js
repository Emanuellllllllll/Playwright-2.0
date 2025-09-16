const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        
        // URL
        this.url = 'https://www.saucedemo.com';
        
        // Locators
        this.usernameField = '#user-name';
        this.passwordField = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '[data-test="error"]';
        this.loginForm = '.login_wrapper';
        this.inventoryContainer = '[data-test="inventory-container"]';
        this.burgerMenu = '#react-burger-menu-btn';
        this.logoutLink = '#logout_sidebar_link';
    }

    // Actions
    async navigate() {
        await this.page.goto(this.url);
    }

    async fillUsername(username) {
        await this.page.fill(this.usernameField, username);
    }

    async fillPassword(password) {
        await this.page.fill(this.passwordField, password);
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    async login(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    async logout() {
        await this.page.click(this.burgerMenu);
        await this.page.click(this.logoutLink);
    }

    // Assertions
    async verifyRedirectedToInventory() {
        await expect(this.page).toHaveURL(/.*inventory\.html/);
    }

    async verifyRemainsOnLoginPage() {
        await expect(this.page).toHaveURL(this.url);
    }

    async verifyNoErrorDisplayed() {
        await expect(this.page.locator(this.errorMessage)).not.toBeVisible();
    }

    async verifyErrorDisplayed(expectedMessage) {
        await expect(this.page.locator(this.errorMessage)).toBeVisible();
        await expect(this.page.locator(this.errorMessage)).toHaveText(expectedMessage);
    }

    async verifyLoginFormVisible() {
        await expect(this.page.locator(this.loginForm)).toBeVisible();
    }

    async verifyLoginFormNotVisible() {
        await expect(this.page.locator(this.loginForm)).not.toBeVisible();
    }

    async verifyInventoryPageDisplayed() {
        await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    }
}

module.exports = LoginPage;
