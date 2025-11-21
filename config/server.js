module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  url: env('RAILWAY_PUBLIC_URL'),
  app: {
    keys: env.array('APP_KEYS', ['key1', 'key2']),
  },
});
