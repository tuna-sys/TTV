import { expect, test } from '@playwright/test';

test('trải nghiệm toàn cục thích ứng giữa desktop và mobile', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/giai-phap-doanh-nghiep/');

  await expect(page.getByLabel('Thông điệp Tri Thức Việt')).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Mục đang đọc' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Điều hướng nhanh' })).toBeHidden();
  await expect(page.locator('h1 [data-scramble-text]')).toHaveAttribute('data-scrambling', 'false');


  await page.locator('#yeu-to-phoi-hop').evaluate((section) => section.scrollIntoView({ block: 'center' }));
  await expect.poll(async () => page.locator('nav[aria-label="Mục đang đọc"] a[aria-current="location"]').getAttribute('href'))
    .toBe('#yeu-to-phoi-hop');

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/nguoi-lao-dong/');

  const bottomNavigation = page.getByRole('navigation', { name: 'Điều hướng nhanh' });
  await expect(bottomNavigation).toBeVisible();
  await expect(bottomNavigation.getByRole('link', { name: 'Việc làm' })).toHaveAttribute('aria-current', 'page');
  await expect(bottomNavigation.getByRole('link')).toHaveCount(5);
  await expect(page.getByRole('navigation', { name: 'Mục đang đọc' })).toBeHidden();
});

test('chế độ giảm chuyển động dừng các hiệu ứng trang trí', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  await expect(page.locator('.ttv-marquee-track')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('h1 [data-scramble-text]').first()).toHaveAttribute('data-scrambling', 'false');
});
