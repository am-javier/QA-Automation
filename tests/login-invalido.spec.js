const { test, expect } = require('@playwright/test');

test('login invalido muestra error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'usuario_falso');
  await page.fill('[data-test="password"]', 'clave_falsa');
  await page.click('[data-test="login-button"]');
  await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
});