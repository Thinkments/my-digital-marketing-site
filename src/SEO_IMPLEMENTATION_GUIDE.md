# ThinkMents SEO Implementation Guide

## Overview
This guide provides a comprehensive framework for implementing SEO best practices across all pages of the ThinkMents website.

## New Components & Utilities Created

### 1. Core SEO Utilities (`/utils/seo.ts`)
- `getCanonicalUrl()` - Generate canonical URLs
- `generateMetaTags()` - Create complete meta tag sets
- `generateLocalBusinessSchema()` - LocalBusiness schema
- `generateServiceSchema()` - Service schema
- `generateFAQSchema()` - FAQ schema  
- `generateBreadcrumbSchema()` - Breadcrumb schema
- `generateArticleSchema()` - Article/blog schema
- `generatePersonSchema()` - Author/person schema
- `generateOrganizationSchema()` - Organization schema
- `updateMetaTags()` - Dynamically update page meta tags
- `injectSchema()` - Inject structured data into pages

### 2. SEO Components

#### `SEOHead` Component
Automatically manages meta tags and schema injection.

```tsx
import { SEOHead } from '../components/SEOHead';
import { generateServiceSchema } from '../utils/seo';

<SEOHead
  title="Page Title - ThinkMents"
  description="Page description for SEO"
  canonical="/page-url"
  ogImage="https://thinkments.com/og-image.jpg"
  keywords="keyword1, keyword2, keyword3"
  schema={generateServiceSchema({
    name: 'Service Name',
    description: 'Service description',
    url: 'https://thinkments.com/service'
  })}
/>
```

#### `Breadcrumbs` Component
Automatic breadcrumb navigation with schema markup.

```tsx
import { Breadcrumbs } from '../components/Breadcrumbs';

<Breadcrumbs 
  items={[
    { name: 'Services', url: '/services' },
    { name: 'SEO', url: '/services/seo' }
  ]}
/>
```

#### `OptimizedImage` Component
Performance-optimized images with lazy loading.

```tsx
import { OptimizedImage } from '../components/OptimizedImage';

<OptimizedImage
  src="image-url.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  loading="lazy"
  priority={false} // Set true for above-fold images
/>
```

#### `PageWrapper` Component
Complete page wrapper with SEO, breadcrumbs, and analytics.

```tsx
import { PageWrapper } from '../components/PageWrapper';

<PageWrapper
  seo={{
    title: 'Page Title',
    description: 'Description',
    canonical: '/page-url',
    schema: [schemaObject1, schemaObject2]
  }}
  breadcrumbs={[
    { name: 'Parent', url: '/parent' },
    { name: 'Current Page', url: '/current' }
  ]}
>
  {/* Page content */}
</PageWrapper>
```

### 3. Analytics Utilities (`/utils/analytics.ts`)

Comprehensive GA4 event tracking:

```tsx
import { 
  trackCTAClick, 
  trackPhoneCall, 
  trackFormSubmission,
  trackServiceView,
  trackQuoteRequest
} from '../utils/analytics';

// Track CTA click
<Button onClick={() => trackCTAClick('Get Started', 'Hero Section', '/get-a-quote')}>
  Get Started
</Button>

// Track phone call
<a href="tel:+19406273538" onClick={() => trackPhoneCall('+1-940-627-3538', 'Header')}>
  Call Us
</a>

// Track form submission
const handleSubmit = () => {
  trackFormSubmission('Contact Form', 'Contact Page');
  // ... form submission logic
};
```

Auto-tracking initialized on all pages:
- Scroll depth (25%, 50%, 75%, 90%, 100%)
- Time on page (30s, 60s, 120s, 300s intervals)
- Outbound link clicks
- Phone call clicks

### 4. Page Tracking Hook (`/hooks/usePageTracking.ts`)

```tsx
import { usePageTracking } from '../hooks/usePageTracking';

export default function MyPage() {
  usePageTracking('Custom Page Title');
  
  return (
    // Page content
  );
}
```

## Implementation Checklist

### For Every Page:

#### 1. Meta Tags & SEO
- [ ] Unique, keyword-rich title tag (50-60 characters)
- [ ] Compelling meta description (150-160 characters)
- [ ] Canonical URL
- [ ] Open Graph tags (title, description, image, url, type)
- [ ] Twitter Card tags
- [ ] Keywords meta tag (optional)
- [ ] Author tag (for content pages)

#### 2. Schema Markup
Choose appropriate schemas:
- [ ] **HomePage**: LocalBusiness + Organization + FAQPage
- [ ] **Service Pages**: Service + LocalBusiness + FAQPage + Breadcrumb
- [ ] **Blog Posts**: Article + Breadcrumb + Person (author)
- [ ] **About Page**: Organization + Person (team members)
- [ ] **Contact Page**: LocalBusiness + ContactPage
- [ ] **Location Pages**: LocalBusiness + FAQPage + Breadcrumb

#### 3. Breadcrumb Navigation
- [ ] Add breadcrumbs to all non-homepage pages
- [ ] Ensure proper hierarchy (Home > Category > Page)
- [ ] Include breadcrumb schema (automatic with component)

#### 4. Image Optimization
- [ ] Use `OptimizedImage` component for all images
- [ ] Add descriptive alt text to every image
- [ ] Set `priority={true}` for above-fold images
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Specify width and height to prevent CLS

#### 5. Internal Linking
- [ ] Link to relevant service pages
- [ ] Link to related blog posts
- [ ] Link to location pages where relevant
- [ ] Use descriptive anchor text (not "click here")
- [ ] Add contextual links within content

#### 6. Content Structure
- [ ] One H1 per page (main heading)
- [ ] Logical H2/H3/H4 hierarchy
- [ ] Short paragraphs (2-4 sentences)
- [ ] Bullet points and lists for scannability
- [ ] Bold important terms
- [ ] Include FAQ section where appropriate

#### 7. Performance
- [ ] Lazy load images
- [ ] Defer non-critical scripts
- [ ] Minimize layout shift (CLS)
- [ ] Optimize largest contentful paint (LCP)
- [ ] Ensure fast first input delay (FID)

#### 8. Analytics Tracking
- [ ] Track CTA clicks
- [ ] Track form submissions
- [ ] Track phone calls
- [ ] Track video plays (if applicable)
- [ ] Track service/product views

#### 9. Mobile Optimization
- [ ] Mobile-responsive layout
- [ ] Touch-friendly buttons (44x44px minimum)
- [ ] Readable font sizes (16px+ body text)
- [ ] No horizontal scrolling
- [ ] Fast mobile loading

#### 10. Accessibility
- [ ] Proper heading hierarchy
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support
- [ ] Sufficient color contrast
- [ ] Focus indicators visible

## Page-Specific Implementation

### Service Pages

```tsx
import React from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { generateServiceSchema, generateLocalBusinessSchema, generateFAQSchema, BASE_URL } from '../utils/seo';
import { FAQSection } from '../components/seo/FAQSection';
import { InternalLinks } from '../components/seo/InternalLinks';

export default function ServicePage() {
  const serviceName = 'SEO Services';
  const serviceDescription = 'Professional SEO services to improve your search rankings...';
  
  const schemas = [
    generateServiceSchema({
      name: serviceName,
      description: serviceDescription,
      url: `${BASE_URL}/services/seo`
    }),
    generateLocalBusinessSchema(),
    generateFAQSchema([
      { question: 'What is SEO?', answer: 'SEO stands for...' },
      { question: 'How long does SEO take?', answer: 'SEO typically takes...' }
    ])
  ];
  
  return (
    <PageWrapper
      seo={{
        title: `${serviceName} - ThinkMents`,
        description: serviceDescription,
        canonical: '/services/seo',
        keywords: 'seo, search engine optimization, seo services',
        schema: schemas
      }}
      breadcrumbs={[
        { name: 'Services', url: '/services' },
        { name: serviceName, url: '/services/seo' }
      ]}
    >
      {/* Service content */}
      <div className="container mx-auto px-4 py-20">
        <h1>SEO Services</h1>
        {/* ... content ... */}
        
        <FAQSection faqs={faqs} title="SEO FAQs" />
        <InternalLinks links={relatedLinks} />
      </div>
    </PageWrapper>
  );
}
```

### Blog Posts

```tsx
import { PageWrapper } from '../components/PageWrapper';
import { generateArticleSchema, BASE_URL } from '../utils/seo';

export default function BlogPost() {
  const schema = generateArticleSchema({
    headline: 'Blog Post Title',
    description: 'Blog post description',
    image: 'https://example.com/image.jpg',
    datePublished: '2024-01-01',
    dateModified: '2024-01-15',
    author: 'Corey Spicer',
    url: `${BASE_URL}/blog/post-slug`
  });
  
  return (
    <PageWrapper
      seo={{
        title: 'Blog Post Title - ThinkMents Blog',
        description: 'Blog post description',
        canonical: '/blog/post-slug',
        ogType: 'article',
        publishedTime: '2024-01-01T00:00:00Z',
        modifiedTime: '2024-01-15T00:00:00Z',
        author: 'Corey Spicer',
        section: 'Digital Marketing',
        tags: ['SEO', 'Marketing', 'Growth'],
        schema: schema
      }}
      breadcrumbs={[
        { name: 'Blog', url: '/blog' },
        { name: 'Post Title', url: '/blog/post-slug' }
      ]}
    >
      <article className="container mx-auto px-4 py-20">
        <h1>Blog Post Title</h1>
        {/* Article content */}
      </article>
    </PageWrapper>
  );
}
```

### Location Pages

```tsx
import { generateLocalBusinessSchema, generateFAQSchema } from '../utils/seo';

const locationSchema = generateLocalBusinessSchema({
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Decatur',
    addressRegion: 'TX',
    postalCode: '76234'
  },
  areaServed: ['Decatur', 'Wise County', 'North Texas']
});
```

## Priority Implementation Order

### Phase 1: Critical Pages (Week 1)
1. ✅ HomePage - Already optimized
2. Services overview page
3. Top 5 service pages (SEO, Web Design, Google Marketing, Social Media, PPC)
4. Contact page
5. About page

### Phase 2: Additional Service Pages (Week 2)
6. All remaining service pages
7. Location pages
8. Case studies page

### Phase 3: Content Pages (Week 3)
9. All blog posts (implement template)
10. Resources/guides pages
11. FAQ standalone page

### Phase 4: Supporting Pages (Week 4)
12. Privacy policy
13. Terms of service
14. Sitemap
15. 404 page

## Testing & Validation

### Tools to Use:
1. **Google Rich Results Test**: Test schema markup
   - URL: https://search.google.com/test/rich-results
   - Test each page type for valid schema

2. **Google PageSpeed Insights**: Test Core Web Vitals
   - URL: https://pagespeed.web.dev/
   - Target: 90+ mobile, 95+ desktop

3. **Google Search Console**: Monitor overall SEO health
   - Check coverage issues
   - Monitor Core Web Vitals
   - Track search performance

4. **Schema Markup Validator**: Validate structured data
   - URL: https://validator.schema.org/
   - Ensure no errors or warnings

5. **Mobile-Friendly Test**: Ensure mobile optimization
   - URL: https://search.google.com/test/mobile-friendly

### Manual Testing Checklist:
- [ ] All meta tags present and correct
- [ ] Canonical URLs correct
- [ ] Schema markup validates without errors
- [ ] Breadcrumbs display and work correctly
- [ ] Images load properly with lazy loading
- [ ] All internal links work
- [ ] Mobile responsive on all devices
- [ ] Page loads in under 3 seconds
- [ ] No console errors
- [ ] Analytics events firing correctly

## Best Practices

### Title Tags
- Include primary keyword near the beginning
- Keep under 60 characters
- Include brand name: "Service Name - ThinkMents"
- Make it compelling and clickable
- Unique for every page

### Meta Descriptions
- 150-160 characters
- Include primary keyword naturally
- Include a call-to-action
- Accurately describe page content
- Make it compelling to click

### Headings (H1-H6)
- One H1 per page
- H1 should include primary keyword
- Logical hierarchy: H1 > H2 > H3
- Use headings for structure, not styling
- Make headings descriptive and scannable

### Internal Linking
- Use descriptive anchor text
- Link to relevant related content
- Create hub and spoke model
- Ensure all pages are reachable within 3 clicks
- Update old content with links to new content

### Schema Markup
- Include all relevant schema types
- Ensure complete and accurate information
- Test with Google Rich Results Test
- Keep schema updated with content changes
- Use specific schema types over generic ones

### Images
- Alt text for every image
- Descriptive file names
- Appropriate sizes (don't load huge images)
- Use lazy loading for below-fold images
- Specify width and height to prevent CLS

## Maintenance

### Monthly Tasks:
- [ ] Review Google Search Console for errors
- [ ] Check Core Web Vitals scores
- [ ] Update outdated content
- [ ] Add new internal links to recent content
- [ ] Review and respond to user feedback
- [ ] Check for broken links
- [ ] Monitor page speed
- [ ] Review analytics for improvement opportunities

### Quarterly Tasks:
- [ ] Comprehensive technical SEO audit
- [ ] Content refresh for top pages
- [ ] Competitor analysis
- [ ] Keyword ranking review
- [ ] Backlink profile analysis
- [ ] Schema markup audit
- [ ] Mobile usability review

## Tracking Success

### Key Metrics to Monitor:
1. **Organic Traffic**: Month-over-month growth
2. **Keyword Rankings**: Track target keywords
3. **Core Web Vitals**: LCP, FID, CLS scores
4. **Click-Through Rate**: From search results
5. **Bounce Rate**: By page and channel
6. **Conversion Rate**: From organic traffic
7. **Page Speed**: Mobile and desktop
8. **Schema Coverage**: Pages with valid markup
9. **Mobile Usability**: Issues in GSC
10. **Index Coverage**: Pages indexed vs. submitted

### Goals:
- 90+ PageSpeed score (mobile)
- <2.5s Largest Contentful Paint
- <100ms First Input Delay
- <0.1 Cumulative Layout Shift
- 100% schema validation pass rate
- Zero mobile usability issues
- 95%+ index coverage rate

## Resources

- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org/
- Web.dev: https://web.dev/
- PageSpeed Insights: https://pagespeed.web.dev/
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

## Support

For questions or issues with SEO implementation:
1. Check this guide first
2. Test with Google tools
3. Validate schema markup
4. Review component documentation
5. Check browser console for errors

---

**Last Updated**: December 2024
**Version**: 1.0
**Maintainer**: ThinkMents Development Team
