/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { withKeystone } = require("@keystone-6/core/next");
module.exports = withKeystone({
  reactStrictMode: true,
 });