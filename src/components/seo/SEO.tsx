import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  type?: string;
}

export default function SEO({
  title,
  description = 'Premium pure vegetarian catering for weddings and events in Chennai. Traditional South Indian cuisine crafted with love, heritage, and culinary excellence.',
  keywords = 'vegetarian catering, wedding catering, Chennai catering, South Indian food, marriage service, event catering, Sri Jayam',
  path = '',
  type = 'website',
}: SEOProps) {
  const siteTitle = 'Sri Jayam Marriage Service';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} – Premium Vegetarian Catering`;
  const url = `https://srijayammarriageservice.com${path}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CateringBusiness',
    name: siteTitle,
    description,
    url,
    telephone: '+919444227423',
    email: 'jayamcatering71@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '28/53, Naickamar Street, West Mambalam',
      addressLocality: 'Chennai',
      postalCode: '600033',
      addressCountry: 'IN',
    },
    servesCuisine: 'South Indian Vegetarian',
    priceRange: '$$',
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}
