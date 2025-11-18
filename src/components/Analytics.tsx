import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface AnalyticsProps {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
  ahrefsKey?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  googleAnalyticsId, // Only use if provided
  googleTagManagerId, // Only use if provided
  facebookPixelId, // Only use if provided
  ahrefsKey = 'OZ+cHSWsj6kRBjMSfS0y6A' // Default Ahrefs key
}) => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when route changes
    if (typeof window !== 'undefined' && window.gtag && googleAnalyticsId) {
      window.gtag('config', googleAnalyticsId, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });
    }

    // Facebook Pixel page view tracking
    if (typeof window !== 'undefined' && window.fbq && facebookPixelId) {
      window.fbq('track', 'PageView');
    }
  }, [location, googleAnalyticsId, facebookPixelId]);

  return (
    <>
      <Helmet>
        {/* Ahrefs Analytics */}
        {ahrefsKey && (
          <script 
            src="https://analytics.ahrefs.com/analytics.js" 
            data-key={ahrefsKey}
            async
          />
        )}

        {/* Google Tag Manager - only load if ID is provided */}
        {googleTagManagerId && (
          <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `}
          </script>
        )}

        {/* Google Analytics 4 - only load if ID is provided */}
        {googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}', {
                  page_title: document.title,
                  page_location: window.location.href
                });
              `}
            </script>
          </>
        )}

        {/* Facebook Pixel - only load if ID is provided */}
        {facebookPixelId && (
          <script>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebookPixelId}');
              fbq('track', 'PageView');
            `}
          </script>
        )}
      </Helmet>

      {/* Noscript fallbacks - only render if IDs are provided */}
      {googleTagManagerId && (
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
      )}
      
      {facebookPixelId && (
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
};

export default Analytics;

// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}