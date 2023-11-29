const { expect, browser, $ } = require("@wdio/globals");

describe("Tests on Glitch", () => {
  it("should open glitch and validate Fesh", async () => {
    // await browser.setTimeout({ script: 60000 });
    // await browser.maximizeWindow();
    await browser.url(`https://glitch.com/~tony`);
    await expect(browser).toHaveTitleContaining("Tony");
    await browser.setTimeout({ implicit: 10000 });
    // await browser.scroll(0, 800);
    await browser.execute(() => {
      window.scrollTo(0, -800);
    });

    const elem = await $('(//span[text()="Pros & Cons"])[1]');
    await elem.waitForClickable({ timeout: 500000 });
    await elem.click();
  });
});
