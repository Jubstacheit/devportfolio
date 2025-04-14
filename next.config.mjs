import MillionLint from '@million/lint';
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'img.icons8.com'
    }]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default MillionLint.next({
  rsc: true
})(withNextIntl(nextConfig));