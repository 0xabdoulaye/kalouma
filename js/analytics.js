/**
 * Kalouma Market - PostHog Analytics
 * Configuration minimaliste pour rester sous les limites gratuites
 */

// Initialisation PostHog (snippet officiel)
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group identify setPersonProperties setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags resetGroups onFeatureFlags addFeatureFlagsHandler onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

// Configuration optimisee pour economiser les events
posthog.init('phc_qVVe4mq1Ha7aOuXvKQWEttUHTrYavkGegjLawsrsHjW', {
    api_host: 'https://us.i.posthog.com',
    defaults: '2026-01-30',
    autocapture: false,           // Desactive - economise des events
    capture_pageview: true,       // Garde les pageviews
    capture_pageleave: false,     // Desactive - economise
    disable_session_recording: true // Pas de replay - economise
});

// Helper pour tracker les events avec source
window.trackEvent = function(eventName, properties = {}) {
    posthog.capture(eventName, {
        source: 'website',
        page: window.location.pathname,
        ...properties
    });
};

// Tracking des clics CTA Play Store
document.addEventListener('DOMContentLoaded', function() {
    // Boutons Google Play
    const playStoreButtons = document.querySelectorAll('#playStoreBtn, #playStoreBtn2, .google-play');
    playStoreButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            trackEvent('cta_play_store_click', {
                button_location: this.closest('.hero') ? 'hero' : 'download_section'
            });
        });
    });

    // Boutons App Store (coming soon)
    const appStoreButtons = document.querySelectorAll('.app-store');
    appStoreButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            trackEvent('cta_app_store_click', {
                button_location: this.closest('.hero') ? 'hero' : 'download_section'
            });
        });
    });

    // FAQ - tracker quelle question est ouverte
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const questionText = this.querySelector('span').textContent;
            trackEvent('faq_opened', {
                question: questionText
            });
        });
    });

    // Contact email
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            trackEvent('contact_email_click', {
                email: this.href.replace('mailto:', '')
            });
        });
    });
});
