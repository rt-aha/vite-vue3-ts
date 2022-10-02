import { createPinia } from 'pinia';

const modules = import.meta.glob('./*.ts', { eager: true });

interface StoreModules {
  [key: string]: any
}

const useStore: StoreModules = {};

for (const path in modules) {
  const splitBySlash: string[] = path.split('/');
  const fileName: string = splitBySlash[splitBySlash.length - 1].replace('.ts', '');

  useStore[fileName] = modules[path].default;
}

const pinia = createPinia();
export default pinia;

export { useStore };
