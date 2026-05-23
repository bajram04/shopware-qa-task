# Shopware QA Automation Task

## Project Overview

This project contains an automated end-to-end checkout test created using Playwright.

The test automates the following flow:

* Open Shopware demo store
* Search for a product
* Open product page
* Add product to cart
* Proceed to checkout
* Fill guest checkout form
* Select Cash on Delivery payment method
* Submit order
* Verify successful checkout flow

---

## Technologies Used

* Playwright
* JavaScript
* Node.js

---

## Installation

Install dependencies:

npm install


Install Playwright browsers:

npx playwright install

---

## Running The Tests

Run all tests:

npx playwright test

Run tests with visible browser:

npx playwright test --headed

Run only Chromium:

npx playwright test --project=chromium --headed

---

## Test File

Main test file:

tests/guest-checkout.spec.js

---

## Notes

The automation uses dynamic selectors and regex matching to improve stability across different languages and UI variations on the Shopware demo site.