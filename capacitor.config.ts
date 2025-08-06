import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.alessandro.treinai',
  appName: 'treinaí',
  webDir: 'www',
  plugins: {
    FirebaseAuthentication: {
      authDomain: undefined,
      providers: ['google.com'],
      skipNativeAuth: false,
    },
  },
};

export default config;
