# BootsGuide Premium v2.1 Safe

This release intentionally preserves the original starter HTML/class structure and refines the visual styling without a full redesign.

## Important cache fix
The previous starter cached `/assets/*` for one year with `immutable`. Reusing the same `style.css` URL after changing the HTML can leave browsers serving the previous CSS.

This release uses versioned files:
- `/assets/css/style-v21.css`
- `/assets/js/main-v21.js`

It also uses development-friendly cache headers until the design stabilises.

## Deployment
Replace the current repository contents with this release, commit, and push. Cloudflare Pages should deploy automatically.
