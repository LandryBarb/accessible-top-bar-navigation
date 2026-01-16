Accessibility considerations summarized

Do not remove focus outlines. Use outline-offset and max() to create custom focus rings; or use :focus-visible for progressive enhancement.

Follow source order. Avoid reordering elements with order or grid placement; this preserves logical focus and reading order.

Use min() to cap large vertical spacing. This prevents huge gaps when the user zooms to 400 %.

Ensure interactive targets are at least 44 px. Include spacing around elements to meet WCAG target size criteria.

Prefer rem for sizes that should scale with the user’s font setting (typography, grid min widths). Use px or rem for padding/border values you don’t want to scale.

Hide content accessibly. Use .u-visually-hidden instead of display:none or visibility:hidden for screen‑reader‑only text.

