# Shopware QA Automation Task

## Overview

This project was created as part of a QA automation task using Playwright.

The goal of the test was to automate a guest checkout flow on the Shopware 6 demo website. The automated test covers searching for a product, adding it to the cart, completing the checkout form, selecting the "Cash on delivery" payment method, and submitting the order.

The test was executed successfully on:

* Chromium
* Firefox
* WebKit

---

# Technologies Used

* Playwright
* JavaScript
* Node.js

---

# Project Structure

```text
tests/
└── guest-checkout.spec.js
```

Main automation test:

* `guest-checkout.spec.js`

Documentation files:

* `README.md`
* `TEST_PLAN.md`
* `BUG_REPORT.md`

---

# Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Running The Tests

Run all tests:

```bash
npx playwright test
```

Run tests with visible browser:

```bash
npx playwright test --headed
```

Run only Chromium:

```bash
npx playwright test --project=chromium --headed
```

---

# Automated Test Flow

The automation covers the following steps:

1. Open Shopware demo website
2. Search for a product
3. Open product page
4. Add product to cart
5. Continue to checkout
6. Fill guest checkout form
7. Accept terms and conditions
8. Select "Cash on delivery"
9. Submit order
10. Verify successful checkout flow

---

# Notes

During testing, the Shopware demo website sometimes switched between English and German labels. Because of this, regex-based selectors were used to make the Playwright test more stable across different UI languages.
