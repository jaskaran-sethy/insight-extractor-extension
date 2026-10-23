# Chrome Web Store listing

Paste these into the developer dashboard. Images are in this folder.

## Store listing tab

**Name** (from the manifest): Insight Extractor helper

**Summary** (from the manifest): Lets Insight Extractor on jaskaransethy.com read a product's Amazon or Flipkart
reviews, fetched from your own browser.

**Category:** Shopping

**Language:** English

**Description:**

```
Turn a product's Amazon or Flipkart reviews into insights.

Paste a product link into Insight Extractor (jaskaransethy.com/games/insight-extractor) and it reads the reviews, picks out the opinions in each one, labels what they're about (camera, battery, delivery, price…) and how people feel about it, then charts:

• Sentiment breakdown: how many reviews read positive, mixed, neutral or negative
• Label breakdown: what people talk about most, split by sentiment
• The most common label : sentiment pairs, with quotes from the reviews

Why an extension? Websites can't read other websites' pages, and shops block servers that try. This extension fetches the review pages from your own browser, just like opening them yourself, and the analysis runs on your device. Nothing is sent to any other server, and nothing is stored.

• Reads only amazon.in, amazon.com and flipkart.com, and only when you press Analyse
• Signed in to Amazon? You'll get more than the first page of reviews
• Open source: github.com/jaskaran-sethy/insight-extractor-extension

Click the toolbar button to open Insight Extractor.
```

**Images:**

- Store icon: `../icons/128.png`
- Screenshots (1280×800): `screenshot-1.png`, `screenshot-2.png`
- Small promo tile (440×280): `promo-small.png`

**Homepage URL:** https://jaskaransethy.com/games/insight-extractor?mode=product

**Support URL:** https://github.com/jaskaran-sethy/insight-extractor-extension/issues

## Privacy practices tab

**Single purpose:**

```
Fetches a product's review pages from Amazon or Flipkart, in the user's own browser, when the user asks Insight Extractor on jaskaransethy.com to analyse that product's reviews.
```

**Permission justifications:**

- Host permission (amazon.in, amazon.com, flipkart.com):

  ```
  Needed to fetch the review pages of the product the user asked Insight Extractor to analyse. Only GET requests, only to these three shops, and only when requested by jaskaransethy.com.
  ```

- Content script on jaskaransethy.com (shown as a host permission):

  ```
  Relays the Insight Extractor page's "fetch these reviews" requests to the extension and returns the pages to it. It runs on no other site.
  ```

**Remote code:** No, I am not using remote code.

**Data usage:** tick **Website content** (the extension fetches product review pages). Leave everything else unticked.
Then tick all three certifications:

- I do not sell or transfer user data to third parties, outside of the approved use cases
- I do not use or transfer user data for purposes that are unrelated to my item's single purpose
- I do not use or transfer user data to determine creditworthiness or for lending purposes

**Privacy policy URL:** https://github.com/jaskaran-sethy/insight-extractor-extension/blob/main/PRIVACY.md

## Distribution tab

**Visibility:** Public. **Regions:** All regions.
