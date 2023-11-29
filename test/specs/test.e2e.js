const { expect, browser, $ } = require("@wdio/globals");

describe("Tests on Glitch", () => {
  it("should open glitch and validate Fesh", async () => {
    // await browser.maximizeWindow();
    await browser.url(`https://glitch.com/~tony`);
    await expect(browser).toHaveTitleContaining("Tony");
    const elem = $('(//span[text()="Pros & Cons"])[1]');
    await elem.scrollIntoView();
    await elem.waitForClickable({ timeout: 10000 });
    await elem.click();
  });
});
