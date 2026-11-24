import { SITE_URL, SOCIAL_URLS } from '@/utils/site';

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
      url: props.url || SITE_URL,
      logo: props.logo || `${SITE_URL}/logo.jpg`,
      sameAs: props.sameAs || SOCIAL_URLS
    };
  }

  if (props.type === 'WebSite') {
    return {
      ...baseData,
      name: props.name || 'Space Credits',
      url: props.url || SITE_URL,
      description: props.description || 'Your gains are not affected by gravity'
    };
  }

  return baseData;
}

export function generateMetaTags({
  title = 'Space Credits - Your gains are not affected by gravity',
  description = 'The first cryptocurrency designed for interplanetary commerce. Built on Solana for Mars and beyond.',
  image = '/og-image.jpg',
  url = SITE_URL
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
