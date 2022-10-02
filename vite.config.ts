import { URL, fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import type { ConfigEnv, UserConfigExport } from 'vite';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv): UserConfigExport => {
  const { mode }: { mode: string } = configEnv;
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue()],
    server: {
      port: 7201,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";',
        },
      },
    },
  });
};
