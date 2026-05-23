# Manual Test Plan – Guest Checkout Flow

## Goal

The purpose of this testing is to verify that a guest user can search for a product, add it to the cart, and complete checkout using the "Cash on delivery" payment method.

---

# Positive Test Cases

## TC-01 – Complete checkout with valid information

Priority: High

Preconditions:

* User is on the homepage

Steps:

1. Search for a product
2. Open the product page
3. Add the product to the cart
4. Proceed to checkout
5. Fill in all required customer information
6. Select "Cash on delivery"
7. Place the order

Expected Result:

* The order is completed successfully

---

## TC-02 – Search for a product

Priority: High

Preconditions:

* Homepage is loaded

Steps:

1. Enter a product name in the search bar
2. Start the search

Expected Result:

* Matching products are displayed

---

## TC-03 – Add product to cart

Priority: High

Preconditions:

* Product page is opened

Steps:

1. Click the "Add to cart" button

Expected Result:

* Product appears in the shopping cart

---

## TC-04 – Open checkout page

Priority: High

Preconditions:

* Product already exists in cart

Steps:

1. Open the cart
2. Continue to checkout

Expected Result:

* Checkout page opens successfully

---

## TC-05 – Select Cash on delivery payment

Priority: Medium

Preconditions:

* User is on checkout page

Steps:

1. Select "Cash on delivery" payment method

Expected Result:

* Payment method becomes selected

---

# Negative Test Cases

## TC-06 – Submit form with empty required fields

Priority: High

Preconditions:

* Checkout page is open

Steps:

1. Leave required fields empty
2. Try to place the order

Expected Result:

* Validation errors are displayed

---

## TC-07 – Invalid email format

Priority: High

Preconditions:

* Checkout form is visible

Steps:

1. Enter an invalid email format
2. Submit the form

Expected Result:

* Email validation message appears

---

## TC-08 – Checkout with empty cart

Priority: Medium

Preconditions:

* Cart contains no products

Steps:

1. Try to access checkout

Expected Result:

* User cannot continue checkout

---

# Edge Cases

## TC-09 – Very long customer name

Priority: Medium

Preconditions:

* Checkout page is open

Steps:

1. Enter extremely long first and last names
2. Submit the form

Expected Result:

* System handles the input correctly or shows validation

---

## TC-10 – Special characters in address fields

Priority: Medium

Preconditions:

* Checkout form is open

Steps:

1. Enter special characters in address fields
2. Submit the form

Expected Result:

* Form handles input safely without crashing

---

# Testing Environment

* Website: Shopware 6 Demo Store
* Testing type: Manual Testing and Automation Testing
* Automation tool: Playwright
* Browsers tested:

  * Chromium
  * Firefox
  * WebKit
* Operating system: Windows

---

# Notes

During testing, the website occasionally switched between English and German labels. Because of this, regex-based selectors were used in the Playwright automation test to make the test more stable across language changes.
