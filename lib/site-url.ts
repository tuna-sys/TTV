const localUrl = 'http://127.0.0.1:3100';

const isLoopbackHostname = (hostname: string) => (
  hostname === 'localhost'
  || hostname.endsWith('.localhost')
  || hostname === '::1'
  || hostname === '0.0.0.0'
  || hostname.startsWith('127.')
);

export const isProductionSiteUrl = (value: string | undefined) => {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' && !isLoopbackHostname(parsed.hostname);
  } catch {
    return false;
  }
};

const getVercelProductionUrl = (environment: NodeJS.ProcessEnv) => {
  const hostname = environment.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (!hostname) return undefined;
  return hostname.startsWith('http://') || hostname.startsWith('https://')
    ? hostname
    : `https://${hostname}`;
};

export const getSiteUrl = (environment: NodeJS.ProcessEnv = process.env) => {
  const configured = environment.NEXT_PUBLIC_SITE_URL?.trim() || getVercelProductionUrl(environment);
  if (!configured) {
    if (environment.NODE_ENV === 'production') {
      throw new Error('NEXT_PUBLIC_SITE_URL là bắt buộc khi build production; không được dùng localhost cho SEO.');
    }
    return localUrl;
  }

  if (environment.NODE_ENV === 'production' && !isProductionSiteUrl(configured)) {
    throw new Error('NEXT_PUBLIC_SITE_URL production phải là URL HTTPS công khai, không phải localhost.');
  }

  try {
    return new URL(configured).origin;
  } catch {
    if (environment.NODE_ENV === 'production') throw new Error('NEXT_PUBLIC_SITE_URL không hợp lệ.');
    return localUrl;
  }
};

export const absoluteUrl = (pathname: string, environment: NodeJS.ProcessEnv = process.env) => (
  new URL(pathname, getSiteUrl(environment)).toString()
);
