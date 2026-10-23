// Fetches Amazon and Flipkart pages for Insight Extractor, as the visitor (their IP, their sign-in), and returns the
// HTML. Only GETs, only to these shops, and only for requests from the site's own pages.

const SHOPS = new Set(["www.amazon.in", "www.amazon.com", "www.flipkart.com"]);
const SITES = new Set(["https://jaskaransethy.com", "https://www.jaskaransethy.com"]);
const PAGE = "https://jaskaransethy.com/games/insight-extractor?mode=product";

function allowedSender(sender) {
    return sender.id === chrome.runtime.id && Boolean(sender.url) && SITES.has(new URL(sender.url).origin);
}

// The toolbar button opens Insight Extractor's product view.
chrome.action.onClicked.addListener(() => chrome.tabs.create({url: PAGE}));

function allowedUrl(url) {
    try {
        const parsed = new URL(url);
        return parsed.protocol === "https:" && SHOPS.has(parsed.hostname);
    } catch {
        return false;
    }
}

chrome.runtime.onMessage.addListener((message, sender, respond) => {
    if (message?.type !== "fetch") return false;
    if (!allowedSender(sender) || !allowedUrl(message.url)) {
        respond({ok: false, error: "Only Amazon and Flipkart product pages can be read."});
        return false;
    }
    fetch(message.url, {credentials: "include"})
        .then(async (response) => respond({ok: response.ok, status: response.status, url: response.url, html: await response.text()}))
        .catch((error) => respond({ok: false, error: String(error?.message ?? error)}));
    return true; // Answer asynchronously.
});
