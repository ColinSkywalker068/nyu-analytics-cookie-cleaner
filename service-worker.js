function isSharedAnalyticsCookie(cookie) {
  return cookie.domain === ".nyu.edu" && !cookie.hostOnly && cookie.name.startsWith("_ga_");
}

function expireCookie(cookie) {
  // An expired write identifies the exact domain and path. Removing by URL
  // and name alone could also match a host-only cookie with the same name.
  const details = {
    url: "https://nyu.edu/",
    name: cookie.name,
    value: "",
    domain: cookie.domain,
    path: cookie.path,
    storeId: cookie.storeId,
    secure: cookie.secure,
    httpOnly: cookie.httpOnly,
    sameSite: cookie.sameSite,
    expirationDate: 1
  };
  if (cookie.partitionKey) details.partitionKey = cookie.partitionKey;
  return chrome.cookies.set(details);
}

function reportFailure() {
  console.warn("Chrome could not complete NYU analytics cookie cleanup.");
}

async function cleanExisting() {
  const cookies = await chrome.cookies.getAll({ domain: "nyu.edu", partitionKey: {} });
  await Promise.all(cookies.filter(isSharedAnalyticsCookie).map(expireCookie));
}

chrome.cookies.onChanged.addListener(({ removed, cookie }) => {
  if (!removed && isSharedAnalyticsCookie(cookie)) expireCookie(cookie).catch(reportFailure);
});

chrome.runtime.onInstalled.addListener(() => cleanExisting().catch(reportFailure));
chrome.runtime.onStartup.addListener(() => cleanExisting().catch(reportFailure));
