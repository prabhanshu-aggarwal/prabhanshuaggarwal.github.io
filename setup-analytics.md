# Analytics Setup Guide

## Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use an existing one
3. Get your Measurement ID (starts with "G-")
4. Replace `GA_MEASUREMENT_ID` in `public/index.html` with your actual ID

```html
<!-- Replace this line -->
gtag('config', 'GA_MEASUREMENT_ID');

<!-- With your actual ID -->
gtag('config', 'G-XXXXXXXXXX');
```

## Hotjar Setup

1. Go to [Hotjar](https://www.hotjar.com/)
2. Create an account and get your Site ID
3. Replace `1234567` in `public/index.html` with your actual Hotjar Site ID

```html
<!-- Replace this line -->
h._hjSettings={hjid:1234567,hjsv:6};

<!-- With your actual ID -->
h._hjSettings={hjid:YOUR_ACTUAL_HOTJAR_ID,hjsv:6};
```

## Security Headers

The following security headers are now properly configured:

- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin

**Note:** X-Frame-Options should be set as an HTTP header by your hosting provider, not as a meta tag.

## Service Worker

The service worker is properly configured for:
- Offline caching
- Push notifications
- Background sync
- PWA functionality

## Error Handling

The app now includes:
- ✅ ErrorBoundary component for React errors
- ✅ Global error handlers for JavaScript errors
- ✅ Comprehensive error logging
- ✅ User-friendly error messages

## Fixed Issues

✅ Fixed HotJar ID undefined error
✅ Fixed X-Frame-Options meta tag warning
✅ Fixed useInView import in Skills component
✅ Fixed boolean false is not iterable error
✅ Added comprehensive error handling
✅ Fixed service worker issues

Your portfolio should now run without runtime errors! 