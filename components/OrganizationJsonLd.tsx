import { legalEntity, officialChannels, siteConfig } from '@/data/siteData';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: legalEntity.legalName,
    alternateName: legalEntity.alternateName,
    taxID: legalEntity.taxId,
    foundingDate: legalEntity.registrationDateIso,
    url: siteConfig.website,
    email: siteConfig.email,
    telephone: legalEntity.phoneHref.replace('tel:', ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Phố Cầu Ngà',
      addressLocality: 'Phường Nam Sơn',
      addressRegion: 'Bắc Ninh',
      addressCountry: 'VN',
    },
    sameAs: [officialChannels.facebookPage, officialChannels.map],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
