import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.acidni.net/#organization',
      name: 'Acidni LLC',
      url: 'https://www.acidni.net',
      logo: 'https://www.acidni.net/favicon.svg',
      sameAs: [
        'https://github.com/Acidni-LLC',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.acidni.net/#website',
      url: 'https://www.acidni.net',
      name: 'Acidni LLC',
      publisher: {
        '@id': 'https://www.acidni.net/#organization',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.acidni.net/#ai-consulting-service',
      serviceType: 'AI Consulting & Strategy',
      name: 'AI Adoption & Integration Consulting',
      description:
        'AI consulting services to help enterprises adopt AI intelligently, integrate Azure OpenAI, and deliver measurable business value.',
      provider: {
        '@id': 'https://www.acidni.net/#organization',
      },
      areaServed: {
        '@type': 'Place',
        name: 'North America',
      },
      url: 'https://www.acidni.net/services/ai-consulting',
    },
    {
      '@type': 'Service',
      '@id': 'https://www.acidni.net/#app-modernization-service',
      serviceType: 'Application Modernization',
      name: 'Legacy Application Modernization on Azure',
      description:
        'Modernization of legacy applications to cloud-native architectures using Azure services, with a focus on performance, reliability, and security.',
      provider: {
        '@id': 'https://www.acidni.net/#organization',
      },
      url: 'https://www.acidni.net/services/app-modernization',
    },
    {
      '@type': 'Product',
      '@id': 'https://www.acidni.net/#accm-product',
      name: 'ACCM - Copilot Chat Manager',
      description:
        'VS Code extension that manages, organizes, searches, and exports GitHub Copilot chat histories with dashboards and word clouds.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Cross-platform',
      url: 'https://www.acidni.net/products/accm',
      brand: {
        '@id': 'https://www.acidni.net/#organization',
      },
      offers: {
        '@type': 'Offer',
        url: 'https://marketplace.visualstudio.com/items?itemName=AcidniLLC.copilot-chat-manager',
      },
    },
    {
      '@type': 'Product',
      '@id': 'https://www.acidni.net/#terprint-product',
      name: 'Terprint',
      description:
        'Cannabis data intelligence platform for real-time dispensary menus, COA extraction, and analytics powered by Azure.',
      applicationCategory: 'BusinessApplication',
      url: 'https://www.acidni.net/products/terprint',
      brand: {
        '@id': 'https://www.acidni.net/#organization',
      },
    },
  ],
} as const

export const metadata: Metadata = {
  title: {
    default: 'Acidni LLC | AI Consulting & Application Modernization',
    template: '%s | Acidni LLC',
  },
  description: 'Acidni LLC helps enterprises adopt AI, modernize legacy applications, and build custom software. Azure experts with published products on VS Marketplace and Azure Marketplace.',
  keywords: [
    'AI consulting',
    'application modernization',
    'Azure cloud migration',
    'enterprise AI solutions',
    'legacy system modernization',
    'custom software development',
    'Azure OpenAI integration',
    'digital transformation',
    'VS Code extension',
    'GitHub Copilot',
    'Copilot chat manager',
  ],
  authors: [{ name: 'Acidni LLC' }],
  creator: 'Acidni LLC',
  publisher: 'Acidni LLC',
  metadataBase: new URL('https://acidni.net'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acidni.net',
    siteName: 'Acidni LLC',
    title: 'Acidni LLC | AI Consulting & Application Modernization',
    description: 'Acidni LLC helps enterprises adopt AI, modernize legacy applications, and build custom software.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Acidni LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acidni LLC | AI Consulting & Application Modernization',
    description: 'Enterprise AI adoption, application modernization, and custom software development.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G1DE0HJTKF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G1DE0HJTKF');
          `}
        </Script>
        {/* Application Insights */}
        <Script id="app-insights" strategy="afterInteractive">
          {`
            var sdkInstance="appInsightsSDK";window[sdkInstance]="appInsights";var aiName=window[sdkInstance],aisdk=window[aiName]||function(e){function n(e){t[e]=function(){var n=arguments;t.queue.push(function(){t[e].apply(t,n)})}}var t={config:e};t.initialize=!0;var i=document,a=window;setTimeout(function(){var n=i.createElement("script");n.src=e.url||"https://js.monitor.azure.com/scripts/b/ai.2.min.js",i.getElementsByTagName("script")[0].parentNode.appendChild(n)});try{t.cookie=i.cookie}catch(e){}t.queue=[],t.version=2;for(var r=["Event","PageView","Exception","Trace","DependencyData","Metric","PageViewPerformance"];r.length;)n("track"+r.pop());n("startTrackPage"),n("stopTrackPage");var s="Track"+r[0];if(n("start"+s),n("stop"+s),!(!0===e.disableExceptionTracking||e.extensionConfig&&e.extensionConfig.ApplicationInsightsAnalytics&&!0===e.extensionConfig.ApplicationInsightsAnalytics.disableExceptionTracking)){n("_"+(r="onerror"));var o=a[r];a[r]=function(e,n,i,a,s){var c=o&&o(e,n,i,a,s);return!0!==c&&t["_"+r]({message:e,url:n,lineNumber:i,columnNumber:a,error:s}),c},e.autoExceptionInstrumented=!0}return t}({instrumentationKey:"4ea9d444-a837-41ad-bcae-087875d52a24",enableAutoRouteTracking:true,disableFetchTracking:false});window[aiName]=aisdk,aisdk.queue&&0===aisdk.queue.length&&aisdk.trackPageView({});
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
      </head>
      <body className="min-h-screen bg-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
