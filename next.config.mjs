import withPWA from "next-pwa";

const nextConfig = withPWA({
  dest: "public", // Output directory for PWA assets
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
});

export default {
  reactStrictMode: true, // Keep this outside of the PWA configuration
  ...nextConfig,
};
