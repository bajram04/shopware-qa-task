import { test, expect } from '@playwright/test';

test('Guest checkout with cash on delivery', async ({ page }) => {

  // Open homepage
  await page.goto('https://www.shopware6-demo.development-s25.com/');

  // Verify homepage loaded
  await expect(page).toHaveURL(/shopware6-demo/);

  // Search for product
  await page
    .getByRole('combobox', { name: /Suchbegriff|Search/i })
    .fill('Demo');

  // Open product page
  await page
    .getByRole('link', { name: /Demo Produkt|Demo Product/i })
    .click();

  // Add to cart button
  const addToCartButton = page.getByRole('button', {
    name: /In den Warenkorb|Add to Cart/i
  });

  await expect(addToCartButton).toBeVisible();

  // Add product to cart
  await addToCartButton.click();

  // Checkout link
  const checkoutLink = page.getByRole('link', {
    name: /To the checkout|Zur Kasse/i
  });

  await expect(checkoutLink).toBeVisible({
    timeout: 10000
  });

  // Go to checkout
  await checkoutLink.click();

  // Verify checkout page
  await expect(page).toHaveURL(/checkout/);

  // Fill customer information
  await page.getByRole('textbox', {
    name: /Vorname|First name/i
  }).fill('John');

  await page.getByRole('textbox', {
    name: /Nachname|Last name/i
  }).fill('Doe');

  await page.getByRole('textbox', {
    name: /E-Mail-Adresse|Email/i
  }).fill('test@example.com');

  // Fill address
  await page.getByRole('textbox', {
    name: /Street and house number|Straße/i
  }).fill('Main Street 1');

  await page.getByRole('textbox', {
    name: /PLZ|ZIP/i
  }).fill('10000');

  await page.getByRole('textbox', {
    name: /Location|City|Ort/i
  }).fill('Berlin');

  // Continue button - Direct click utilizes auto-waiting
  await page.getByRole('button', {
    name: /Further|Weiter|Continue/i
  }).click();

  // Accept terms and conditions - Direct check forces Playwright to wait for it to appear
  await page.getByRole('checkbox', {
    name: /AGB|terms/i
  }).check();

  // Select cash on delivery
  const cashOnDeliveryOption = page.getByRole('radio', {
    name: /Cash on delivery|Nachnahme/i
  });

  await expect(cashOnDeliveryOption).toBeVisible();
  await cashOnDeliveryOption.check();

  // Submit order button
  const submitOrderButton = page.getByRole('button', {
    name: /Zahlungspflichtig bestellen|Submit order|Complete order/i
  });

  await expect(submitOrderButton).toBeVisible();

  // Submit order and wait for navigation
  await Promise.all([
    page.waitForURL(/account\/order|finish/i, {
      timeout: 15000
    }),
    submitOrderButton.click()
  ]);

  // Verify success page heading
  await expect(
    page.getByRole('heading', {
      name: /Vielen Dank|Thank you/i
    })
  ).toBeVisible({
    timeout: 10000
  });

});