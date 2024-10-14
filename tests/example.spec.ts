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

  //await expect(page.locator('.c-card-content a').first()).toBeVisible();
  const rewards = page.locator('.c-card-content a');

  for (let i = 0; i < 2; i++) {
    await rewards.nth(i).click();
    //console.log("Reward");
  }

});

test('execute 30 searches', async ({ page }) => {
  test.slow();
  await page.goto('https://bing.com/');
  await page.locator('#bnp_btn_accept').click();
  const search = page.locator('#sb_form_q');
  const loginField = page.getByTestId('i0116');
  const passField = page.getByTestId('i0118');
  await page.locator('#id_l').click();
  await page.locator('#b_idProviders li a').first().click();
  await loginField.fill("soldermain69@outlook.com");
  await loginField.press('Enter');
  await passField.fill("fervexSOLDER");
  await passField.press('Enter');
  await expect(page).toHaveTitle("Stay signed in?");
  await page.locator('#declineButton').click();

   for (let i = 0; i < 29; i++) {
    await search.fill(`TestNR:${i}`);
    await search.press('Enter');
  }


});
