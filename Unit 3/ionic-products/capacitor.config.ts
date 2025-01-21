import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dewc.ionic.products',
  appName: 'Ionic Products',
  webDir: 'www/browser',
  android: {
    allowMixedContent: true
  }
};

export default config;
