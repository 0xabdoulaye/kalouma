// Le lien « Télécharger » de l'en-tête mène directement au bon store selon le téléphone.
(function () {
  var cta = document.getElementById('cta-header');
  if (!cta) return;
  var ua = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (/Android/i.test(ua)) {
    cta.href = 'https://play.google.com/store/apps/details?id=com.kalouma.market';
  } else if (isIOS) {
    cta.href = 'https://apps.apple.com/app/kalouma-market/id6764887654';
  }
})();

// Menu de l'en-tête : s'ouvre au bouton sur mobile, se referme au choix d'une section.
(function () {
  var header = document.querySelector('.site-header');
  var btn = header && header.querySelector('.menu-btn');
  if (!btn) return;
  function set(open) {
    header.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
  btn.addEventListener('click', function () { set(!header.classList.contains('menu-open')); });
  var links = header.querySelectorAll('.nav a');
  for (var i = 0; i < links.length; i++) links[i].addEventListener('click', function () { set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
