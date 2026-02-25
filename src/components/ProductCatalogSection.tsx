'use client'

import Script from 'next/script'

export default function ProductCatalogSection() {
  return (
    <>
      <Script src="/product-catalog-widget.js" strategy="afterInteractive" />
      <div
        dangerouslySetInnerHTML={{
          __html: `<product-catalog-widget
            api-base-url="https://func-terprint-marketplace.azurewebsites.net/api"
            mode="grid"
            theme="dark"
            show-search="true"
            show-category-filter="true"
            show-pricing="true"
            show-trial-badge="true"
            cta-text="Learn More"
            cta-action="link"
          ></product-catalog-widget>`,
        }}
      />
    </>
  )
}
