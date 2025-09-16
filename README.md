# Playwright JavaScript Testing Framework

This project contains automated tests for the SauceDemo website using Playwright with the Page Object Model pattern.

## Project Structure

```
playwright-js-framework/
├── Pages/
│   └── login-page.js          # Page Object Model for login page
├── tests/
│   └── test-login.js          # Test scenarios for login functionality
├── package.json               # Node.js dependencies and scripts
├── playwright.config.js       # Playwright configuration
└── README.md                  # This file
```

## Features

- **Page Object Model**: Organized page objects with locators and actions
- **Comprehensive Test Coverage**: Valid login, locked out user, and logout scenarios
- **Cross-browser Testing**: Chrome, Firefox, Safari, and mobile browsers
- **Screenshot and Video Capture**: Automatic capture on test failures
- **HTML Reports**: Detailed test execution reports

## Test Scenarios

### Scenario 1: Valid Login
- **Username**: `standard_user`
- **Password**: `secret_sauce`
- **Verifications**:
  - User is redirected to `/inventory.html`
  - No error message is displayed
  - Login form is no longer visible
  - Inventory page is displayed successfully

### Scenario 2: Locked Out User
- **Username**: `locked_out_user`
- **Password**: `secret_sauce`
- **Verifications**:
  - User remains on the login page
  - Login form is still visible
  - Error message "Epic sadface: Sorry, this user has been locked out." is displayed

### Scenario 3: Complete Flow
- Tests login and logout functionality together

## Installation

1. Navigate to the project directory:
   ```bash
   cd playwright-js-framework
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Run specific test file
```bash
npx playwright test tests/test-login.js
```

### Run tests for specific browser
```bash
npx playwright test --project=chromium
```

## Viewing Test Results

After running tests, view the HTML report:
```bash
npm run report
```

## Page Object Model

The `LoginPage` class in `Pages/login-page.js` contains:

- **URLs**: Base URL for the login page
- **Locators**: CSS selectors for all page elements
- **Actions**: Methods to interact with page elements
- **Assertions**: Methods to verify page state

## Configuration

The `playwright.config.js` file contains:
- Test directory configuration
- Browser configurations
- Screenshot and video capture settings
- Reporter settings
- Retry and timeout configurations

## Dependencies

- `@playwright/test`: Playwright testing framework
- Node.js (version 16 or higher)

## Browser Support

- Chrome/Chromium
- Firefox
- Safari/WebKit
- Mobile Chrome
- Mobile Safari

## MCP Integration

This framework was generated using Playwright MCP Server integration, ensuring all browser interactions are properly routed through the MCP server for validation and automation.
