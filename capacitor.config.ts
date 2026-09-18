import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.treinai',
  appName: 'treinai',
  webDir: 'www',
  plugins: {
    FirebaseAuthentication: {
      providers: ['google.com']
    }
  }
};

export default config;
