import assert from 'node:assert/strict';
import test from 'node:test';
import { absoluteUrl, getSiteUrl, isProductionSiteUrl } from '../lib/site-url.ts';

test('development vẫn dùng địa chỉ local khi chưa cấu hình domain', () => {
  assert.equal(getSiteUrl({ NODE_ENV: 'development' } as NodeJS.ProcessEnv), 'http://127.0.0.1:3100');
});

test('production từ chối localhost và thiếu domain', () => {
  assert.equal(isProductionSiteUrl('http://127.0.0.1:3100'), false);
  assert.equal(isProductionSiteUrl('https://localhost:3100'), false);
  assert.throws(() => getSiteUrl({ NODE_ENV: 'production' } as NodeJS.ProcessEnv), /bắt buộc/);
  assert.throws(() => getSiteUrl({
    NODE_ENV: 'production',
    NEXT_PUBLIC_SITE_URL: 'https://localhost:3100',
  } as NodeJS.ProcessEnv), /không phải localhost/);
});

test('URL công khai được dùng thống nhất cho canonical và sitemap', () => {
  const environment = {
    NODE_ENV: 'production',
    NEXT_PUBLIC_SITE_URL: 'https://tuyendung.example.com',
  } as NodeJS.ProcessEnv;
  assert.equal(getSiteUrl(environment), 'https://tuyendung.example.com');
  assert.equal(absoluteUrl('/lien-he', environment), 'https://tuyendung.example.com/lien-he');
});
