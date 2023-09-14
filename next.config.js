/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'Karthik9728',
        password: 'Karthik9728',
        mongodb_cluster_name: 'cluster0',
        mongodb_batabase: 'my-site1',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'Karthik9728',
      password: 'Karthik9728',
      mongodb_cluster_name: 'cluster0',
      mongodb_batabase: 'my-site',
    },
  };
};
