import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import unocss from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import icons from 'unplugin-icons/vite';
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers';
import components from 'unplugin-vue-components/vite';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import svgLoader from 'vite-svg-loader';

const autoImportOptions = {
  imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
  dirs: ['src/components'],
  vueTemplate: true,
  eslintrc: {
    enabled: true,
  },
};

const componentoptions = {
  resolvers: [
    IconsResolver({
      enabledCollections: ['ep'],
    }),
    ElementPlusResolver(),
    VantResolver(),
  ],
};

const unocssOptions = {
  presets: [presetAttributify(), presetUno()],
};

export default defineConfig({
  base: '/web-template-vue/',
  build: {
    target: 'esnext', // top await
    module: 'esm',
  },
  resolve: {
    alias: {
      '~/': new URL('./src/', import.meta.url).pathname,
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    inspect(),
    autoImport(autoImportOptions),
    unocss(unocssOptions),
    icons(),
    svgLoader(),
    components(componentoptions),
  ],
});
