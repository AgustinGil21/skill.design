# Commerce and maps

Product pages, carts and location search help people decide what to buy and where to go. The information people need
depends on the risk of the decision: for a T-shirt, size and returns; for a laptop charger, compatibility; for a
service, availability and location. This pattern covers product pages, variants, changing price and stock, carts, and
searching on a map.

For checkout and payment, see [checkout and scheduling](checkout-and-scheduling.md); for reviews, see
[comparison, support and reviews](comparison-support-and-reviews.md).

## The problem and who has it

- **Shoppers** comparing options and worried about fit, compatibility, delivery and returns.
- **People searching nearby** for a place, a service or a rental.
- **Merchants** losing sales to doubt and returns.

## Questions to ask before deciding

- **What are the main purchase questions for this category?**
- **How many variants**: three colors or hundreds of configurations?
- **What can change** before purchase: price, stock, delivery date?
- **Does location matter** to the decision, or is a list better?
- **What happens when location is unavailable or imprecise?**

## Purchase questions by category

| Category | Questions people need answered near the button |
| --- | --- |
| Clothing and shoes | Size and fit, materials, returns |
| Electronics and accessories | Compatibility, specs, warranty |
| Groceries | Price per unit, substitutions, freshness, delivery window |
| Furniture | Dimensions, assembly, delivery and installation |
| Services | Availability, what is included, cancellation |

Put the answers to these questions near the decision, not at the bottom of the page.

## Product page: anatomy and behavior

- **Gallery on one side** (thumbnails + large image, zoom, video), **decision on the other**: name, rating with review
  count, price (with the previous price struck through if discounted, when the discount is real), variants and button
  ([lululemon](https://mobbin.com/screens/013f6a05-d050-4f9d-a225-2cebc8560981),
  [Amazon](https://mobbin.com/screens/bcb885ce-30da-4be5-a047-b4b462492129)).
- **Visible variants, not dropdowns**: colors as swatches with the chosen name ("Color: Ocean Wave"), sizes as buttons;
  sold-out ones visible but marked, with "Notify me" ([adidas](https://mobbin.com/screens/5e2c2d8c-1fed-499f-b6ca-7eac1f9d3672)).
  Swatches need text names, not only color.
- **Size options with unit price** when comparing ("8 oz · 5.19 USD · 0.65 USD/oz",
  [Instacart](https://mobbin.com/screens/901dde1b-7327-4740-bfaf-ec66b68430a5)).
- **A size guide** next to the selector and a recommendation ("Fits true to size").
- **How and when it arrives** near the button (shipping, pickup, estimated date, returns).
- **Scarcity only when real** ("2 left"); no invented counters.
- **Reviews**: average, distribution, customer photos, filters by topic ("Fit", "Quality") and "Verified purchase"
  ([Walmart](https://mobbin.com/screens/0e0e3a57-9df1-4804-b6e2-4867dfda7867)).
- **Details in accordions** (description, ingredients, care); related products below.
- **When adding**: confirmation without leaving the page (a side panel or a notice with "View cart").

### Variants and restrictions at scale

- Few variants: show all as buttons.
- Many variants: filter by the most decisive attribute first, then show only valid combinations.
- **Incompatible combinations**: disable with a reason ("Not available in XL in this color"), not silently hide.
- **Configurators**: summarize the configuration and price as it changes.

## Changing price and availability

- Re-check price and stock when the cart is viewed and at checkout; say what changed ("Price changed from 49.00 to
  52.00 EUR since you added it").
- **Split shipments**: when items ship separately or from different sellers, say so with dates per group.
- **Partial carts**: when some items become unavailable, keep the rest and offer alternatives.

## Cart

- **Items with image, variant, price, editable quantity (− 1 +), remove and "Save for later"**
  ([Amazon](https://mobbin.com/screens/41734413-3c41-40f3-bde5-45e419708d22),
  [lululemon](https://mobbin.com/screens/4fd7f773-3297-4bdc-b281-61b188f23273)).
- **A summary**: subtotal, discounts, shipping, taxes ("calculated at checkout" if unknown) and estimated total, with
  the primary button at the top.
- **Progress toward a benefit** ("Add 34.00 USD for free shipping"; a minimum order bar,
  [Faire](https://mobbin.com/screens/a05f6882-9983-41bb-a564-6a42b266bbd1)) — without pressuring unnecessary purchases.
- **Cart as a side panel** to keep shopping ([Hims](https://mobbin.com/screens/195d4da8-66f0-4172-ad5f-83a20f2d3fac)).
- **Fast wallets** as a second option under the primary button.
- **Remove with undo**, not confirmation.

## Map search

### Map, list or both?

| Need | Option |
| --- | --- |
| Location is the main criterion (near me, near a venue) | Map with list |
| Location matters but other criteria dominate | List with distance, map on demand |
| Location is irrelevant | List only |

### Anatomy and behavior

- **List and map side by side**, synchronized: hovering a card highlights its marker and vice versa; tapping a marker
  shows a summary card ([Kiwi](https://mobbin.com/screens/861fe098-3ac6-468d-95e5-9565d273bc75),
  [Tripadvisor](https://mobbin.com/screens/4eac46a0-749f-4358-8e07-2f4805e3f5e4)).
- **Markers with the deciding fact** (price, rating) instead of a generic pin
  ([Turo](https://mobbin.com/screens/16067ed9-b5f4-49ad-8097-9c1fb93c8997),
  [GetYourGuide](https://mobbin.com/screens/7d8762de-2deb-4393-8667-dd8751d3b206)); clustered with a number when
  overlapping.
- **"Search as I move the map"** as a checkbox, or a "Search this area" button; the number of visible results ("502 of
  1,949", [Zillow](https://mobbin.com/screens/d45ea413-9934-4270-b2ea-336e39abfa78)).
- **Filters as chips** at the top, with active ones marked, and "Save search".
- **Map / List toggle** on small screens; the map does not replace the list for screen reader users.
- **Nearby places**: distance, hours ("Open · until 23:00"), and an action ("Choose this store";
  [Walmart](https://mobbin.com/screens/cbd106d5-7bbb-49ff-9753-3229acc4933d)).
- **Map controls**: zoom, current location, layers; keyboard shortcuts for the map.

### Geographic uncertainty

- **Location denied**: let people type a place; do not block.
- **Approximate location**: say results are approximate.
- **Results update when the map moves**: avoid moving the list under the person's cursor; announce counts.
- **Distance and units** per locale (km or miles).

## Edge cases

- Products sold in several currencies and regions; prices with tax included or not by region.
- Very long product names in other languages.
- Markers in dense areas; places without coordinates.
- A nearby result that does not meet the need (closed, out of stock): show it, but say why it may not fit.

## Accessibility specifics

- Swatches and size buttons with names and states; sold-out announced.
- Galleries operable by keyboard with alternative text per image.
- Maps with an equivalent list, keyboard controls and announced result counts.
- Quantity steppers labeled.

## Copy

- Prices with currency and unit per locale.
- Delivery dates in the person's date format.
- Stock and delivery statements only when true.

## Common mistakes and why they happen

- **Answers to purchase questions buried below the fold.**
- **Variants in dropdowns.**
- **Fake discounts and scarcity.**
- **Price changes discovered at payment.**
- **Map-only results.**

## Worked comparison: a nearby result that does not fit

**Weak.** A pharmacy finder shows the closest pharmacy first; it is closed and does not stock the medication searched;
the person drives there.

**Strong.** Results show "Closed · opens 09:00" and "In stock" or "Call to check" per pharmacy; the list sorts by
"Open now and in stock" first, with distance second; the closest closed one is shown lower with its status.

## How to verify and measure

- **Test** with real catalogs, many variants, location denied, and screen readers.
- **Measure** add-to-cart, returns by reason (wrong size, not as described), cart abandonment, map vs. list usage.

## References

- lululemon — [product page layout](https://mobbin.com/screens/013f6a05-d050-4f9d-a225-2cebc8560981)
- Amazon — [product page layout](https://mobbin.com/screens/bcb885ce-30da-4be5-a047-b4b462492129)
- adidas — [visible variants and notify me](https://mobbin.com/screens/5e2c2d8c-1fed-499f-b6ca-7eac1f9d3672)
- Instacart — [unit price](https://mobbin.com/screens/901dde1b-7327-4740-bfaf-ec66b68430a5)
- Walmart — [reviews with filters](https://mobbin.com/screens/0e0e3a57-9df1-4804-b6e2-4867dfda7867)
- Amazon — [cart items](https://mobbin.com/screens/41734413-3c41-40f3-bde5-45e419708d22)
- lululemon — [cart items](https://mobbin.com/screens/4fd7f773-3297-4bdc-b281-61b188f23273)
- Faire — [minimum order progress](https://mobbin.com/screens/a05f6882-9983-41bb-a564-6a42b266bbd1)
- Hims — [cart side panel](https://mobbin.com/screens/195d4da8-66f0-4172-ad5f-83a20f2d3fac)
- Kiwi — [synchronized list and map](https://mobbin.com/screens/861fe098-3ac6-468d-95e5-9565d273bc75)
- Tripadvisor — [synchronized list and map](https://mobbin.com/screens/4eac46a0-749f-4358-8e07-2f4805e3f5e4)
- Turo — [markers with price](https://mobbin.com/screens/16067ed9-b5f4-49ad-8097-9c1fb93c8997)
- GetYourGuide — [markers with price](https://mobbin.com/screens/7d8762de-2deb-4393-8667-dd8751d3b206)
- Zillow — [search this area and counts](https://mobbin.com/screens/d45ea413-9934-4270-b2ea-336e39abfa78)
- Walmart — [nearby stores](https://mobbin.com/screens/cbd106d5-7bbb-49ff-9753-3229acc4933d)
