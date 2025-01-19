import { useEffect } from 'react';

// Extend Window interface to include Cal
declare global {
  interface Window {
    Cal?: any;
  }
}

export const CalendarInitializer = () => {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal?.("init", "30min", { origin: "https://cal.com" });
    window.Cal?.ns["30min"]("ui", {
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#3B82F6" },
        dark: { "cal-brand": "#3B82F6" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return null;
};