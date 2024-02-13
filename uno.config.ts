import { defineConfig, presetUno, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.5,
      prefix: ['i-', '']
    })
  ],

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
