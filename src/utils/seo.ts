export interface PageSEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

export function updatePageSEO({ title, description, keywords, canonicalPath = '' }: PageSEOConfig) {
  // 1. Title
  document.title = title;

  // 2. Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  } else {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    document.head.appendChild(metaDesc);
  }

  // 3. Meta Keywords
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      document.head.appendChild(metaKeywords);
    }
  }

  // 4. OpenGraph Tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  // 5. Canonical URL
  const canonicalUrl = `https://jsbrothersgold.in${canonicalPath}`;
  const linkCanonical = document.querySelector('link[rel="canonical"]');
  if (linkCanonical) {
    linkCanonical.setAttribute('href', canonicalUrl);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
}
