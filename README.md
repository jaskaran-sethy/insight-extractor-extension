# Insight Extractor helper

A small Chrome extension that lets [Insight Extractor](https://jaskaransethy.com/games/insight-extractor?mode=product)
read a product's Amazon or Flipkart reviews and turn them into insights: what people talk about (camera, battery,
delivery…), how they feel about each, and the most common label : sentiment pairs.

Websites can't read other websites' pages (browsers block it), and shops block servers that try. So this extension
fetches the review pages **from your own browser**, the same way you'd open them yourself, and hands the HTML to the
Insight Extractor page, which does all the analysis locally. Nothing goes to any server other than the shop's.

## What it does, exactly

- Runs a tiny script on `jaskaransethy.com` that listens for "fetch this page" requests from the Insight Extractor page.
- Fetches only `https://www.amazon.in`, `https://www.amazon.com` and `https://www.flipkart.com` pages, only with GET, and
  only when asked by `jaskaransethy.com`. Anything else is refused (see [`background.js`](background.js)).
- Returns the page's HTML to the Insight Extractor page. It stores nothing and sends nothing anywhere else.
- Clicking the toolbar button opens Insight Extractor.

Because the fetch happens in your browser, it uses your network and, if you're signed in to Amazon, your Amazon
session; signed-in Amazon visitors see more than the first page of reviews.

## Install

- **Chrome Web Store:** coming soon.
- **From source:** download this repository (or the zip from the
  [latest release](https://github.com/jaskaran-sethy/insight-extractor-extension/releases/latest)), open
  `chrome://extensions`, turn on **Developer mode**, click **Load unpacked** and pick the folder. Works in Chrome, Edge
  and Brave on desktop.

## Files

| File | |
|---|---|
| [`manifest.json`](manifest.json) | Permissions: the three shop hosts, and a content script on jaskaransethy.com |
| [`content.js`](content.js) | Relays messages between the Insight Extractor page and the background worker |
| [`background.js`](background.js) | Validates and performs the fetch |
| [`PRIVACY.md`](PRIVACY.md) | Privacy policy |
| [`store/`](store/) | Chrome Web Store listing text and images |

The page side (parsing reviews and the insight engine) lives in the website repository:
[`lib/productReviews.js`](https://github.com/jaskaran-sethy/personal-website/blob/main/lib/productReviews.js) and
[`lib/insights.js`](https://github.com/jaskaran-sethy/personal-website/blob/main/lib/insights.js).

## Developing

To try it against a local copy of the site, add `"http://localhost/*"` to the content script's `matches` and allow
`localhost` in `allowedSender` in `background.js`. The message names in `content.js` must match the site's
[`lib/extensionBridge.js`](https://github.com/jaskaran-sethy/personal-website/blob/main/lib/extensionBridge.js).

## Releasing

Bump `version` in `manifest.json`, commit, then tag and push it:

```sh
git tag v1.0.1 && git push origin v1.0.1
```

The [release workflow](.github/workflows/release.yml) builds `insight-extractor-extension.zip` and attaches it to a
GitHub release. jaskaransethy.com's download link always points at the latest one; upload the same zip to the Chrome
Web Store.

## Licence

[Apache 2.0](LICENSE)
