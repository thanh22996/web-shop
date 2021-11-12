const nextTranslate = require("next-translate");
const path = require("path");

module.exports = {
  ...nextTranslate(),
  env: {
    NEXT_PUBLIC_API_TEST: "https://test.net.vn",
    NEXT_PUBLIC_API_TEST_SECURITY: "FALSE",
  },
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
  },
  domains: [
    {
      domain: "localhost:3000",
    },
    {
      domain: "sbx.travelook.vn",
    },
    {
      domain: "travelook.vn",
    },
  ],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
