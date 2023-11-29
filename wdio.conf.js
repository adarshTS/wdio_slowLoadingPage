exports.config = {
  runner: "local",

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  services: [["browserstack"]],

  specs: ["./test/specs/**/*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "Chrome",
      "bstack:options": {
        browserVersion: "103.0",
        os: "Windows",
        osVersion: "11",
      },
    },
  ],
  commonCapabilities: {
    "bstack:options": {
      buildName: "bstack-demo-wdio",
      buildIdentifier: "#${BUILD_NUMBER}",
      projectName: "wdio-local-sample",
      debug: "true",
      networkLogs: "true",
      consoleLogs: "info",
    },
  },

  logLevel: "info",
  bail: 0,
  baseUrl: "https://glitch.com/~tony",
  waitforTimeout: 50000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i] };
});
