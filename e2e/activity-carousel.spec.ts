import { expect, test } from '@playwright/test';

test('carousel tự chuyển và cho phép người dùng tạm dừng', async ({ page }) => {
  await page.goto('/gioi-thieu/');
  const pause = page.getByRole('button', { name: 'Tạm dừng', exact: true });
  await pause.scrollIntoViewIfNeeded();
  const counter = page.locator('div.my-8').locator('span').filter({ hasText: /^\d+ - \d+ \/ \d+$/ });
  const initial = await counter.innerText();
  await expect(counter).not.toHaveText(initial, { timeout: 7000 });
  await pause.click();
  const paused = await counter.innerText();
  await page.waitForTimeout(4800);
  await expect(counter).toHaveText(paused);
  await expect(page.getByRole('button', { name: 'Tiếp tục tự động chuyển', exact: true })).toBeVisible();
});

test('carousel không tự chạy khi người dùng giảm chuyển động', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/gioi-thieu/');
  const pause = page.getByRole('button', { name: 'Tạm dừng', exact: true });
  await pause.scrollIntoViewIfNeeded();
  const counter = page.locator('div.my-8').locator('span').filter({ hasText: /^\d+ - \d+ \/ \d+$/ });
  const initial = await counter.innerText();
  await page.waitForTimeout(4800);
  await expect(counter).toHaveText(initial);
});
