import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from '../../firebase';

/**
 * Automatically logs page_view events to Firebase Analytics on every route navigation.
 */
export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;
    const pageTitle = document.title || 'LearnVerse';

    trackEvent('page_view', {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: pageTitle
    });
  }, [location]);

  return null;
}
