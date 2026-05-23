# Bug Report

## Bug 1 – Website language changes during checkout

### Description

While testing the checkout flow, some pages switched between English and German labels. This can make the user experience inconsistent and can also affect UI automation tests that rely on visible text.

---

### Steps To Reproduce

1. Open the Shopware demo website
2. Navigate through products and checkout pages
3. Observe that some buttons and labels appear in different languages

---

### Expected Result

The website language should remain consistent during the session.

---

### Actual Result

Some parts of the website appear in German while others appear in English.

---

### Severity

Medium

---

## Bug 2 – Multiple elements matching the same text

### Description

Some UI elements share similar visible text, which may cause selector conflicts during automation testing.

Example:

* "Cash on delivery" matched more than one element on the page.

---

### Steps To Reproduce

1. Open checkout page
2. Try locating payment option using text-only selectors

---

### Expected Result

Elements should have more unique identifiers or clearer accessibility labels.

---

### Actual Result

Multiple elements can match the same selector text.

---

### Severity

Low

---

## Bug 3 – Dynamic checkout elements

### Description

Some checkout elements appear conditionally depending on the current checkout state, such as buttons or form sections.

This may create instability during automated testing if selectors are not handled carefully.

---

### Expected Result

Checkout elements should behave consistently during the flow.

---

### Actual Result

Certain buttons or sections appear only in specific situations.

---

### Severity

Low

