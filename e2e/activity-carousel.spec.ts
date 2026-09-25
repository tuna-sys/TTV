import { expect, test } from '@playwright/test';

test('carousel tự chuyển và cho phép người dùng tạm dừng', async ({ page }) => {
  await page.goto('/gioi-thieu/');
  const carousel = page.getByRole('region', { name: 'Tư liệu hoạt động Tri Thức Việt' });
  await carousel.scrollIntoViewIfNeeded();

  await expect(carousel).toHaveAttribute('data-autoplay', 'running');
  await expect(carousel.getByText('Ảnh 1 / 10')).toBeVisible();
  await expect(carousel.getByText('Ảnh 2 / 10')).toBeVisible({ timeout: 7000 });

  await carousel.getByRole('button', { name: 'Tạm dừng trình chiếu' }).click();
  await expect(carousel).toHaveAttribute('data-autoplay', 'paused');
  await expect(carousel.getByRole('button', { name: 'Tiếp tục trình chiếu' })).toBeVisible();
});

test('carousel không tự chạy khi người dùng giảm chuyển động', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/gioi-thieu/');
  const carousel = page.getByRole('region', { name: 'Tư liệu hoạt động Tri Thức Việt' });
  await carousel.scrollIntoViewIfNeeded();

  await expect(carousel).toHaveAttribute('data-autoplay', 'reduced-motion');
  await expect(carousel.getByText('Ảnh 1 / 10')).toBeVisible();
});
