(function () {
  if (window.posthog) return;

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://us-assets.i.posthog.com/static/array.js';
  script.onload = function () {
    window.posthog.init('phc_mBSimbr7VvrzSTfn3X9EZaAaB7cDJeUAXCZfRoc5Zmfy', {
      api_host: 'https://us.i.posthog.com',
      ui_host: 'https://us.posthog.com',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      disable_session_recording: true,
      person_profiles: 'identified_only'
    });
  };
  document.head.appendChild(script);
})();
