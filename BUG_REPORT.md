# Bug Report

## Bug 1 - Language Inconsistency

### Description

The Shopware demo website dynamically changes between different languages (English/German), which may cause automated UI selectors based on visible text to become unstable.

---

### Steps To Reproduce

1. Open the Shopware demo site
2. Navigate through product and checkout pages
3. Observe changing button and label languages

---

### Expected Result

The website language should remain consistent during the user session.

---

### Actual Result

Some pages display different languages, causing inconsistent UI text.

---

### Severity

Medium

---

## Bug 2 - Dynamic Selector Instability

### Description

Some checkout elements use dynamic text or multiple matching elements, which may create automation instability with strict selectors.

---

### Expected Result

UI elements should have stable identifiers or unique selectors.

---

### Actual Result

Some selectors require regex or semantic role handling to avoid strict mode conflicts.

---

### Severity

Low
