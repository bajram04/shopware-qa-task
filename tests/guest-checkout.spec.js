import { test, expect } from '@playwright/test';

test('Guest checkout with cash on delivery', async ({ page }) => {

  await page.goto('https://www.shopware6-demo.development-s25.com/');

  await expect(page).toHaveURL(/shopware6-demo/);

  await page
    .getByRole('combobox', { name: /Suchbegriff|Search/i })
    .fill('Demo');

  await page
    .getByRole('link', { name: /Demo Produkt|Demo Product/i })
    .click();

  const addToCartButton = page.getByRole('button', {
    name: /In den Warenkorb|Add to Cart/i
  });

  await expect(addToCartButton).toBeVisible();

  await addToCartButton.click();

  await page
    .getByRole('link', { name: /To the checkout|Zur Kasse/i })
    .click();

  await expect(page).toHaveURL(/checkout/);

  await page.getByRole('textbox', {
    name: /Vorname|First name/i
  }).fill('John');

  await page.getByRole('textbox', {
    name: /Nachname|Last name/i
  }).fill('Doe');

  await page.getByRole('textbox', {
    name: /E-Mail-Adresse|Email/i
  }).fill('test@example.com');

  await page.getByRole('textbox', {
    name: /Street and house number|Straße/i
  }).fill('Main Street 1');

  await page.getByRole('textbox', {
    name: /PLZ|ZIP/i
  }).fill('10000');

  await page.getByRole('textbox', {
    name: /Location|City|Ort/i
  }).fill('Berlin');

  const continueButton = page.getByRole('button', {
    name: /Further|Weiter|Continue/i
  });

  if (await continueButton.isVisible()) {
    await continueButton.click();
  }

  const termsCheckbox = page.getByRole('checkbox', {
    name: /AGB|terms/i
  });

  if (await termsCheckbox.isVisible()) {
    await termsCheckbox.check();
  }

  const cashOnDeliveryOption = page.getByRole('radio', {
    name: /Cash on delivery|Nachnahme/i
  });

  await expect(cashOnDeliveryOption).toBeVisible();

  await cashOnDeliveryOption.check();

  await page.getByRole('button', {
    name: /Zahlungspflichtig bestellen|Submit order|Complete order/i
  }).click();

  await expect(page).toHaveURL(/account\/order|finish|checkout/i);

  await expect(
    page.getByRole('heading', {
      name: /Bestellung abschließen|Complete order/i
    })
  ).toBeVisible();

});