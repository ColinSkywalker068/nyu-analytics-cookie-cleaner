# NYU Analytics Cookie Cleaner

Automatically removes shared `.nyu.edu` cookies whose names start with `_ga_`. This can help when analytics cookies cause an HTTP 431 error on NYU HPC Open OnDemand.

## Install in Chrome

1. On this GitHub page, select **Code → Download ZIP**. Extract the ZIP to a folder you’ll keep.
2. In the Chrome profile you use for NYU, open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the extracted folder that contains `manifest.json`.
4. Check that the extension is enabled, then reload [NYU HPC Open OnDemand](https://ood.burst.hpc.nyu.edu/).
