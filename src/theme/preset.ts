// ui.preset.ts
import type { Preset } from 'unocss'
import { safelist } from './safelist'

const colors = ['primary', 'success', 'warning', 'danger']
const classes = [
  'ui:(bg|text|caret|ring|outline)-{color}',
  'hover:ui:bg-{color}-700-600',
  'hover:ui:bg-{color}-50-950',
  'ui:bg-{color}-50-950/50',
  'hover:ui:bg-{color}-100-800/80',
  'focus-visible:ui:(ring|outline)-{color}'
]

// Define a function that returns the preset object
export function presetUI(): Preset {
  return {
    name: '@centlax/ui-preset',
    shortcuts: [
      [/^ui:([a-z]+)-([a-z]+)-(\d+(?:\/\d+)?)-(\d+(?:\/\d+)?)$/,
        ([, prefix, color, firstNum, secondNum]) => `${prefix}-${color}-${firstNum} dark:${prefix}-${color}-${secondNum} `
      ],
      [/^ui:([a-z]+)-([a-z]+)$/, ([, prefix, color]) => `${prefix}-${color}-600 dark:${prefix}-${color}-500`]
    ],
    safelist: safelist(colors, classes)
  }
}