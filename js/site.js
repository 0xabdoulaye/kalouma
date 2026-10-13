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
