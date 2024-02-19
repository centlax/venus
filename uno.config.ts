import { defineConfig, presetUno, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import { useTheme } from './src/composables/useTheme'
import { presetUI } from './src/theme/preset'
const { colors, extended } = useTheme()
export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.5,
      prefix: ['i-', '']
    }),
    presetUI()
  ],
  theme: {
    colors: {
      ...colors,
      ...extended
    }
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|html)/,
        // include js/ts files
        'src/components/**/*.{mjs,ts}',
        'src/theme/**/*.{ts}'
      ]
    }
  }
})
