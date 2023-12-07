import { defineNuxtModule, installModule, addComponentsDir, addImportsDir, createResolver, addPlugin } from '@nuxt/kit'
import { name, version } from '../package.json'
import { type CollectionNames, type IconsPluginOptions } from '@egoist/tailwindcss-icons'


// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * @default 'v'
   */
  prefix?: string
  pattern?: string

  /**
   * @default false
   */
  global?: boolean

  icons: CollectionNames[] | 'all' | IconsPluginOptions

  safelistColors?: string[]
}


export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'myModule',
    pattern: '**/[A-Z]*.vue',
    compatibility: {
      nuxt: '^3.0.0-rc.8'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'V',
    icons: ['heroicons', 'fluent'],
    safelistColors: ['primary']
  },
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    // We can inject our CSS file which includes Tailwind's directives
    nuxt.options.css.push(resolve('./runtime/assets/tailwind.css'))

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // Modules

    // @ts-ignore
    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      tailwindConfig.theme = tailwindConfig.theme || {}
      tailwindConfig.theme.extend = tailwindConfig.theme.extend || {}
      tailwindConfig.theme.extend.colors = tailwindConfig.theme.extend.colors || {
        primary: { '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd', '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8', '800': '#1e40af', '900': '#1e3a8a', '950': '#172554' },
        brand: { '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd', '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8', '800': '#1e40af', '900': '#1e3a8a', '950': '#172554' }
      }
    })

    await installModule('nuxt-icon')
    await installModule('@nuxtjs/color-mode', { classSuffix: '' })
    await installModule('@nuxtjs/tailwindcss', {
      exposeConfig: true,
      config: {
        darkMode: 'class',
        plugins: [
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss')
        ],
        content: {
          files: [
            resolve(runtimeDir, 'components/**/*.{vue,mjs,ts}'),
            resolve(runtimeDir, 'ui.config/**/*.{mjs,js,ts}')
          ],
          transform: {
            vue: (content: string) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          }
        }
      }
    })
    // Plugins
    addPlugin({
      src: resolve(runtimeDir, 'plugins', 'define')
    })

    // Define a function to add components directory
    function addComponentsDirectory (path: string, type: string, options: ModuleOptions, runtimeDir: string) {
      addComponentsDir({
        path: resolve(runtimeDir, 'components', type),
        pattern: '**/[A-Z]*.vue', // Matches any .vue (inside comp dir) file starting with an uppercase letter
        prefix: options.prefix,
        global: options.global,
        watch: false
      })
    }

    // Loop through component types and add components directory
    const componentTypes = ['elements', 'layouts']

    componentTypes.forEach(type => {
      addComponentsDirectory(resolve(runtimeDir, 'components', type), type, options, runtimeDir)
    })


    // Composables
    addImportsDir(resolve(runtimeDir, 'composables'))
  }
})
