/** Runs before paint to prevent theme flash */
export function ThemeScript() {
  const script = `
(function() {
  try {
    var t = localStorage.getItem('simpack-theme');
    var theme = t === 'dark' ? 'dark' : 'light';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    var l = localStorage.getItem('simpack-locale') || 'en';
    root.lang = l;
    root.dir = l === 'ar' ? 'rtl' : 'ltr'; /* nl, en, zh, hi, es, fr, bn, ru: ltr */
  } catch (e) {}
})();
`;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
