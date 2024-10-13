import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {

  await page.goto('https://rewards.bing.com/');
  await expect(page).toHaveTitle("Sign in to Microsoft Rewards");

  const loginField = page.getByTestId('i0116');
  const passField = page.getByTestId('i0118');


  await loginField.fill("soldermain69@outlook.com");
  await loginField.press('Enter');
  await passField.fill("fervexSOLDER");
  await passField.press('Enter');
  await expect(page).toHaveTitle("Stay signed in?");
  await page.locator('#declineButton').click();
  await expect(page).toHaveTitle("Microsoft Rewards");

  await expect(page.locator('.c-card-content a').first()).toBeVisible();
  const rewards = page.locator('.c-card-content a');

  for (let i = 0; i < await rewards.count(); i++) {
    await rewards.nth(i).click();
    //console.log("Reward");
  }

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
