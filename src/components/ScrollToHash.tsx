import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

/**
 * Scrolls to the element matching `location.hash` after route changes (e.g. /booking → /#contact).
 */
export default function ScrollToHash() {
  const {pathname, hash} = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, '');
    const el = document.getElementById(id);
    if (!el) return;
    const timer = window.setTimeout(() => {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, 80);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
