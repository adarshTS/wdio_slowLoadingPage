const { expect, browser, $ } = require("@wdio/globals");

describe("Tests on Glitch", () => {
  it("should open glitch and validate Fesh", async () => {
    await browser.setTimeout({ script: 60000 });
    await browser.maximizeWindow();
    await browser.url(`https://glitch.com/~tony`);
    await expect(browser).toHaveTitleContaining("Tony");
    await browser.setTimeout({ implicit: 5000 });

    const elem = $('(//span[text()="Pros & Cons"])[1]');
    await elem.waitForClickable({ timeout: 50000 });
    await elem.click();
  });
});
