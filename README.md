# NYU Analytics Cookie Cleaner

An unofficial Chrome extension for people who see **HTTP 431** when opening NYU HPC Open OnDemand. It can help when shared Google Analytics cookies make the request headers too large.

## Install in Chrome 130 or newer

1. [Download the extension ZIP](https://github.com/ColinSkywalker068/nyu-analytics-cookie-cleaner/releases/latest/download/NYU-Analytics-Cookie-Cleaner.zip) and extract it to a folder you can keep.
2. In the Chrome profile you use for NYU, open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the extracted folder containing `manifest.json`.
4. Check that **NYU Analytics Cookie Cleaner** is enabled, then reopen [NYU HPC Open OnDemand](https://ood.burst.hpc.nyu.edu/).

Keep the extracted folder in place while using the extension. To update, replace its files with the contents of a newer release and click **Reload** on the extension card. To uninstall, click **Remove** on the same card.

## Which cookies does it change?

It expires shared cookies whose domain is exactly `.nyu.edu` and whose name starts with `_ga_`. It checks on installation, on browser startup, and when cookies change. Host-only cookies, the bare `_ga` cookie, and standard NYU sign-in cookies fall outside that filter.

All cleanup happens locally using Chrome’s cookies API. The extension sends no cookie data to a server. In a regular Chrome profile, a disposable cookie matching the filter disappeared and the HPC dashboard remained signed in after a reload.
