import { colors } from '../theme'
import { hexToRgb } from '../utils'

export function useTheme() {
  const names = {
    fore: ['rose', 'pink', 'red', 'fuchsia', 'purple', 'violet', 'indigo', 'blue', 'sky', 'cyan', 'teal', 'emerald', 'green', 'lime', 'yellow', 'amber', 'orange'],
    back: ['cool', 'slate', 'zinc', 'neutral', 'stone', 'ashed']
  }


  const root = {
    primary: {
      0: 'rgb(var(--color-primary-0) / <alpha-value>)',
      50: 'rgb(var(--color-primary-50) / <alpha-value>)',
      100: 'rgb(var(--color-primary-100) / <alpha-value>)',
      200: 'rgb(var(--color-primary-200) / <alpha-value>)',
      300: 'rgb(var(--color-primary-300) / <alpha-value>)',
      400: 'rgb(var(--color-primary-400) / <alpha-value>)',
      500: 'rgb(var(--color-primary-500) / <alpha-value>)',
      600: 'rgb(var(--color-primary-600) / <alpha-value>)',
      700: 'rgb(var(--color-primary-700) / <alpha-value>)',
      800: 'rgb(var(--color-primary-800) / <alpha-value>)',
      900: 'rgb(var(--color-primary-900) / <alpha-value>)',
      950: 'rgb(var(--color-primary-950) / <alpha-value>)',
      DEFAULT: 'rgb(var(--color-primary-DEFAULT) / <alpha-value>)'
    },

    gray: {
      0: 'rgb(var(--color-gray-0) / <alpha-value>)',
      50: 'rgb(var(--color-gray-50) / <alpha-value>)',
      100: 'rgb(var(--color-gray-100) / <alpha-value>)',
      200: 'rgb(var(--color-gray-200) / <alpha-value>)',
      300: 'rgb(var(--color-gray-300) / <alpha-value>)',
      400: 'rgb(var(--color-gray-400) / <alpha-value>)',
      500: 'rgb(var(--color-gray-500) / <alpha-value>)',
      600: 'rgb(var(--color-gray-600) / <alpha-value>)',
      700: 'rgb(var(--color-gray-700) / <alpha-value>)',
      800: 'rgb(var(--color-gray-800) / <alpha-value>)',
      900: 'rgb(var(--color-gray-900) / <alpha-value>)',
      950: 'rgb(var(--color-gray-950) / <alpha-value>)',
      DEFAULT: 'rgb(var(--color-gray-DEFAULT) / <alpha-value>)'
    }

  }

  function init() {
 
    const style = document.createElement('style')
    style.id = 'ui-root'
    style.innerHTML = `:root {
        ${Object.entries( colors.blue).map(([key, value]) => `--color-primary-${key}: ${hexToRgb(value)};`).join(' ')}
        ${Object.entries( colors.cool).map(([key, value]) => `--color-gray-${key}: ${hexToRgb(value)};`).join(' ')}
    }`
    document.head.appendChild(style)
  }


  const extended = {
    primary: root.primary,
    gray: root.gray,
    success: colors.green,
    warning: colors.yellow,
    danger: colors.red
  }
  return { names, colors, root, extended, init }
}