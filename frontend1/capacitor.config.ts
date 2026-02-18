import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mpilopanashe.app',
  appName: 'impilo-kidney-care',
  webDir: 'dist',
  server: {
    url: 'https://7ba6d4da-83f4-4739-a173-045d34d0d576.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
