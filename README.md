# cobank-design

Run `npm ci` and `npm run dev` to preview both pages locally.

- `/` opens Forward Together, the design system landing page.
- `/archive/bootstrap/` opens the previous design system. Archive links use fragments, for example `/archive/bootstrap/#/colors`, so bookmarked pages work on static hosting.
- `/forward-together/` redirects to the new landing page and preserves the query string and fragment.

Run `npm run build` and publish `dist/` to host both pages.
