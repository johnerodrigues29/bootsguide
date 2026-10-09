(function () {
  'use strict';
  var shop = document.getElementById('amazon-buying-options');
  var bar = document.querySelector('.amazon-mobile-bar');
  if (!shop || !bar) return;
  document.body.classList.add('has-amazon-shopping');
  var pending = false;
  function update() {
    pending = false;
    var consent = document.querySelector('.consent-banner:not([hidden])');
    var menu = document.body.classList.contains('nav-open');
    var panelVisible = Array.from(document.querySelectorAll('.amazon-panel')).some(function (panel) {
      var rect = panel.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    var rect = shop.getBoundingClientRect();
    var shopVisible = rect.top < window.innerHeight && rect.bottom > 0;
    var hide = !!consent || menu || panelVisible || shopVisible || window.scrollY < 300 || window.innerWidth > 767;
    if (bar.hidden !== hide) bar.hidden = hide;
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  new MutationObserver(schedule).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['hidden', 'class'], childList: true });
  bar.querySelector('a').addEventListener('click', function () {
    shop.setAttribute('tabindex', '-1');
    shop.focus({ preventScroll: true });
  });
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[data-affiliate-model]');
    if (!link) return;
    var granted = false;
    try { granted = localStorage.getItem('bootsguide_analytics_consent') === 'granted'; } catch (_) {}
    if (granted && typeof window.gtag === 'function') {
      window.gtag('event', 'affiliate_click', {
        retailer: 'amazon', product_model: link.dataset.affiliateModel,
        placement: link.dataset.affiliatePosition, page_path: location.pathname,
        transport_type: 'beacon'
      });
    }
  });
  update();
}());
