import { registerApplication, start } from 'single-spa';

registerApplication(
  'pct_core',
  () => import('./root.app'),
  () => true,
);

start();