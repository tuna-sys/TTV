import { expect, test } from '@playwright/test';

test('điều hướng công khai và chính sách dữ liệu hoạt động', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.goto('/gioi-thieu');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('hồ sơ');
  await page.goto('/chinh-sach-bao-ve-du-lieu-ca-nhan');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('dữ liệu cá nhân');
});

test('trang liên hệ chỉ cung cấp các kênh chính thức', async ({ page }) => {
  await page.goto('/lien-he');
  await expect(page.getByRole('heading', { level: 1, name: 'Liên hệ Tri Thức Việt' })).toBeVisible();
  await expect(page.getByRole('heading', { level: 2, name: 'Kết nối trực tiếp' })).toBeVisible();
  await expect(page.locator('form')).toHaveCount(0);
  await expect(page.locator('#lien-he-truc-tiep a[href^="mailto:"]')).toHaveCount(1);
});

test('không bịa tin tuyển dụng khi danh sách đang trống', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Tin tuyển dụng được cập nhật trên kênh chính thức' })).toBeVisible();
});

test('trang chính và liên hệ không phát sinh lỗi console', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  await page.goto('/');
  await page.getByRole('heading', { level: 1 }).waitFor();
  await page.goto('/lien-he');
  await page.getByRole('heading', { level: 1, name: 'Liên hệ Tri Thức Việt' }).waitFor();
  expect(consoleErrors).toEqual([]);
});

test('các trang public không gọi API nội bộ', async ({ page }) => {
  const apiRequests: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('/api/')) apiRequests.push(request.url());
  });
  await page.goto('/');
  await page.getByRole('heading', { level: 1 }).waitFor();
  expect(apiRequests).toEqual([]);
});

test('hai tầng điều hướng không chồng lên nhau khi cuộn', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, 420));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(100);

  const geometry = await page.locator('header').evaluate((header) => {
    const shell = header.parentElement;
    const utilityBar = header.previousElementSibling;
    if (!shell || !utilityBar) throw new Error('Không tìm thấy cấu trúc điều hướng hai tầng');

    const shellRect = shell.getBoundingClientRect();
    const utilityRect = utilityBar.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();

    return {
      shellTop: shellRect.top,
      utilityBottom: utilityRect.bottom,
      headerTop: headerRect.top,
      headerBottom: headerRect.bottom,
    };
  });

  expect(Math.abs(geometry.shellTop)).toBeLessThanOrEqual(1);
  expect(geometry.headerTop).toBeGreaterThanOrEqual(geometry.utilityBottom - 1);
  expect(geometry.headerBottom).toBeGreaterThan(geometry.headerTop);
});

test('menu desktop đủ lớn và không gây tràn ngang', async ({ page }) => {
  for (const viewport of [
    { width: 1280, height: 800, expectedFontSize: '12px' },
    { width: 1536, height: 900, expectedFontSize: '14px' },
    { width: 1920, height: 1080, expectedFontSize: '14px' },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto('/');

    const nav = page.locator('header nav').first();
    await expect(nav).toBeVisible();
    await expect(nav).toHaveCSS('font-size', viewport.expectedFontSize);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});

test('các thao tác chính có phản hồi chạm thống nhất', async ({ page }) => {
  await page.goto('/');

  const heroAction = page.getByRole('link', { name: 'Liên hệ doanh nghiệp' });
  await expect(heroAction).toHaveCSS('touch-action', 'manipulation');

  const feedback = await heroAction.evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      tapHighlight: style.getPropertyValue('-webkit-tap-highlight-color'),
      transitionDuration: style.transitionDuration,
    };
  });
  expect(feedback.tapHighlight).not.toBe('rgba(0, 0, 0, 0)');
  expect(feedback.transitionDuration).not.toBe('0s');

  await page.goto('/lien-he/');
  await expect(page.getByRole('link', { name: 'Email bntrithucviet@gmail.com' })).toHaveCSS(
    'touch-action',
    'manipulation',
  );
});
