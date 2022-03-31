const nextTranslate = require('next-translate')

module.exports = {
  // ...nextTranslate(),
  env: {
    NEXT_PUBLIC_API_TEST: 'https://test.net.vn',
    NEXT_PUBLIC_API_TEST_SECURITY: 'FALSE',
  },
  // i18n: {
  //   locales: ['vi', 'en'],
  //   defaultLocale: 'vi',
  // },
  distDir: 'build',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
    })

    return config
  },
}
