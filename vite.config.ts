import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import { defineConfig, ConfigEnv, loadEnv, UserConfigExport } from 'vite';

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv): UserConfigExport => {
  const { mode }: { mode:string} = configEnv;
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [ vue()],
    server: {
      port: 7201,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    //css预处理
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/index.scss";',
        },
      },
    },
  });
};