/**
 * BootsGuide analytics loader.
 * Mobile review/comparison articles use a delayed opt-out mode; other pages require opt-in.
 */
(function () {
  'use strict';

  var GA_ID = 'G-EK6TVJV8CS';
  var STORAGE_KEY = 'bootsguide_analytics_consent';
  var analyticsLoaded = false;
  var memoryChoice = null;
  var banner = null;
  var analyticsTimer = null;
  window.bootsguideAnalyticsActive = false;
  var settingsRequested = false;
  var mobileQuery = window.matchMedia('(max-width: 767px)');
  function suppressAutomaticBanner() {
    return mobileQuery.matches && /^\/(reviews|comparisons)\/[^/]+\//.test(location.pathname);
  }

  function getChoice() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return memoryChoice;
    }
  }

  function saveChoice(choice) {
    memoryChoice = choice;

    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch (error) {
      // Keep the preference for this page view when storage is unavailable.
    }
  }

  function ensureGtag() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
  }

  function updateConsent(choice) {
    ensureGtag();
    window.gtag('consent', 'update', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: choice === 'granted' ? 'granted' : 'denied'
    });
  }

  function loadAnalytics() {
    if (analyticsLoaded || document.querySelector('script[data-bootsguide-analytics]')) {
      return;
    }

    analyticsLoaded = true;
    window['ga-disable-' + GA_ID] = false;
    window.bootsguideAnalyticsActive = true;
    ensureGtag();
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted'
    });
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    var script = document.createElement('script');
    script.async = true;
    script.dataset.bootsguideAnalytics = 'true';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(script);
  }

  function requestAnalytics() {
    if (analyticsLoaded || analyticsTimer !== null || getChoice() === 'denied') return;
    if (!suppressAutomaticBanner()) {
      if (getChoice() === 'granted') loadAnalytics();
      return;
    }
    var elapsed = window.performance ? window.performance.now() : 0;
    analyticsTimer = window.setTimeout(function () {
      analyticsTimer = null;
      if (getChoice() === 'denied' || settingsRequested) return;
      if (suppressAutomaticBanner() || getChoice() === 'granted') loadAnalytics();
    }, Math.max(0, 3000 - elapsed));
  }

  function hideBanner() {
    if (banner) {
      banner.hidden = true;
    }
  }

  function showBanner(shouldFocus) {
    if (!shouldFocus && suppressAutomaticBanner()) return;
    if (shouldFocus) settingsRequested = true;
    if (banner) {
      banner.hidden = false;
      if (shouldFocus) {
        banner.querySelector('[data-consent-accept]').focus();
      }
    }
  }

  function choose(choice) {
    settingsRequested = false;
    saveChoice(choice);

    if (choice === 'granted') {
      if (analyticsLoaded) {
        window['ga-disable-' + GA_ID] = false;
        window.bootsguideAnalyticsActive = true;
        updateConsent('granted');
      } else {
        requestAnalytics();
      }
    } else {
      if (analyticsTimer !== null) { window.clearTimeout(analyticsTimer); analyticsTimer = null; }
      window['ga-disable-' + GA_ID] = true;
      window.bootsguideAnalyticsActive = false;
      if (analyticsLoaded) updateConsent('denied');
    }

    hideBanner();
  }

  function createBanner() {
    banner = document.createElement('section');
    banner.className = 'consent-banner';
    banner.hidden = true;
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-labelledby', 'analytics-consent-title');
    banner.innerHTML =
      '<div class="consent-banner-inner">' +
        '<div class="consent-copy">' +
          '<strong id="analytics-consent-title">Your cookie choices</strong>' +
          '<p>We use optional analytics cookies to understand which guides are useful and improve BootsGuide. On mobile review and comparison articles, analytics starts after approximately three seconds unless you have rejected it. Other pages require acceptance. You can reject analytics here. <a href="/privacy-policy/">Privacy policy</a></p>' +
        '</div>' +
        '<div class="consent-actions">' +
          '<button class="consent-btn consent-btn-secondary" type="button" data-consent-reject>Reject</button>' +
          '<button class="consent-btn consent-btn-primary" type="button" data-consent-accept>Accept cookies</button>' +
        '</div>' +
      '</div>';

    banner.querySelector('[data-consent-accept]').addEventListener('click', function () {
      choose('granted');
    });
    banner.querySelector('[data-consent-reject]').addEventListener('click', function () {
      choose('denied');
    });
    document.body.appendChild(banner);
  }

  function addSettingsControl() {
    var footerBottom = document.querySelector('.footer-bottom');

    if (!footerBottom || footerBottom.querySelector('[data-cookie-settings]')) {
      return;
    }

    var button = document.createElement('button');
    button.className = 'footer-cookie-settings';
    button.type = 'button';
    button.textContent = 'Cookie settings';
    button.setAttribute('data-cookie-settings', '');
    button.addEventListener('click', function () {
      showBanner(true);
    });
    footerBottom.appendChild(button);
  }

  function init() {
    createBanner();
    addSettingsControl();
    function syncAutomaticBanner() {
      requestAnalytics();
      if (settingsRequested || getChoice() === 'granted' || getChoice() === 'denied') return;
      if (suppressAutomaticBanner()) hideBanner(); else showBanner(false);
    }
    if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', syncAutomaticBanner);
    else mobileQuery.addListener(syncAutomaticBanner);

    var choice = getChoice();
    if (choice === 'granted' || (suppressAutomaticBanner() && choice !== 'denied')) {
      requestAnalytics();
    } else if (choice !== 'denied') {
      showBanner(false);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
}());
