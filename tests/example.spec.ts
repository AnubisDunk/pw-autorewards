import { test, expect } from '@playwright/test';

const email = process.env.EMAIL as string;
const pass = process.env.PASSWORD as string;
const rwUrl = process.env.RURL as string;
const bUrl = process.env.BURL as string;
const sTitle = process.env.STITLE as string;
const mrTitle = process.env.MRTITLE as string;

test('has title', async ({ page }) => {

  await page.goto(rwUrl);
  await expect(page).toHaveTitle(sTitle);

  const loginField = page.getByTestId('i0116');
  const passField = page.getByTestId('i0118');


  await loginField.fill(email);
  await loginField.press('Enter');
  await passField.fill(pass);
  await passField.press('Enter');
  await expect(page).toHaveTitle("Stay signed in?");
  await page.locator('#declineButton').click();
  await expect(page).toHaveTitle(mrTitle);

  const rewards = page.locator('.c-card-content a');

  for (let i = 0; i < 2; i++) {
    await rewards.nth(i).click();
  }

});

test('execute 60 searches', async ({ page }) => {
  test.slow();
  await page.goto(bUrl);
  await page.locator('#bnp_btn_accept').click();
  const search = page.locator('#sb_form_q');
  const loginField = page.getByTestId('i0116');
  const passField = page.getByTestId('i0118');
  await page.locator('#id_l').click();
  await page.locator('#b_idProviders li a').first().click();
  await loginField.fill(email);
  await loginField.press('Enter');
  await passField.fill(pass);
  await passField.press('Enter');
  await expect(page).toHaveTitle("Stay signed in?");
  await page.locator('#declineButton').click();
  const randomWord = () => {
    const words = ["apple", "banana", "cat", "dog", "elephant", "fox", "grape", "horse", "iguana", "jaguar", "kiwi", "lemon", "monkey", "nectarine",
      "octopus", "panda", "quail", "rabbit", "strawberry", "tiger", "umbrella bird", "vulture", "wolf", "xenops", "yak", "zebra", "apricot", "blueberry", "chimpanzee",
      "durian", "eel", "falcon", "gorilla", "hedgehog", "iguana", "jackfruit", "kangaroo", "lion", "mango", "narwhal", "orangutan", "peach", "quokka", "rhinoceros",
      "salmon", "tamarin", "urchin", "weather in New York", "best coffee shops in Paris", "top tourist attractions in Japan",
      "latest technology news", "easy dinner recipes", "history of the internet", "fitness tips for beginners",
      "popular books 2024", "upcoming movies", "how to learn a new language", "best hiking trails in Canada",
      "current events in Germany", "beginner guitar lessons", "famous Australian artists", "science fiction novels",
      "yoga poses for relaxation", "DIY home decor ideas", "how to meditate", "travel destinations 2024", "healthy snack ideas",
      "history of London", "Italian cuisine recipes", "how to grow indoor plants", "best online learning platforms", "top podcasts 2024",
      "career advice for young professionals", "how to improve communication skills", "best online workout programs", "famous Indian landmarks",
      "how to manage stress", "current fashion trends", "top-rated TV shows", "how to start a blog", "most visited websites", "effective study techniques",
      "fun activities in Brazil", "history of Egypt", "how to plan a budget", "best online courses for coding", "how to stay motivated", "famous Chinese festivals",
      "best books on personal development", "how to make a podcast", "top online shopping sites",
      "how to start a business", "most popular social media platforms", "how to cook Mexican dishes", "ways to boost creativity", "interesting facts about Australia",
      "viper"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  for (let i = 0; i < 60; i++) {

    await search.fill(randomWord());
    await search.press('Enter');
  }


});
