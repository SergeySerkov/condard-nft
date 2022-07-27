import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'tz28za1c',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skrNERsp5cdfAfoFNQpDmNIwHSZcKaj0XwYg8JqCYapzf1H4UytGxK6ObYosqCVGTA2Fxzeq6noeEMn6nmPeKgaYsfGtOLNINq3kLQxkicF0jw1qariaJ9sJElyRT9Pr6IlnYlxr26fNyKV1KHsFiCT1NshMWQXf0n5y1xgs7s213zi51e97',
  useCdn: false,
});