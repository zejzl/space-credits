export interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article';
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export function generateStructuredData(props: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': props.type
  };

  if (props.type === 'Organization') {
    return {
      ...baseData,
      name: props.name || 'Space Credits',
      description: props.description || 'The first cryptocurrency designed for interplanetary commerce',
      url: props.url || 'https://spacecredits.com',
      logo: props.logo || 'https://spacecredits.com/logo.png',
      sameAs: props.sameAs || [
        'https://twitter.com/spacecredits',
        'https://t.me/spacecredits'
      ]
    };
  }

  if (props.type === 'WebSite') {
    return {
      ...baseData,
      name: props.name || 'Space Credits',
      url: props.url || 'https://spacecredits.com',
      description: props.description || 'Your gains are not affected by gravity'
    };
  }

  return baseData;
}

export function generateMetaTags({
  title = 'Space Credits - Your gains are not affected by gravity',
  description = 'The first cryptocurrency designed for interplanetary commerce. Built on Solana for Mars and beyond.',
  image = '/og-image.png',
  url = 'https://spacecredits.com'
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}
