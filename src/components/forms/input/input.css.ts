import { shareUI } from '../../../theme'
const share = {
  white_gray:
    'shadow-sm ui:text-gray-900-0 ring-1 ring-inset ui:ring-gray-300-700 focus:ring-2 focus:(ui:ring-primary ui:caret-primary)',
  outline:
    'shadow-sm ui:text-gray-900-0 ui:caret-{color} ring-1 ring-inset ui:ring-{color} focus:ring-2'
}
export default {
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
  form: 'form-input',
  font: 'font-medium',
  rounded: shareUI.rounded,
  placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
  size: shareUI.size,
  text: shareUI.text,
  gap: shareUI.gap,
  padding: shareUI.padding,
  leading: {
    padding: {
      xs: 'ps-8',
      sm: 'ps-9',
      md: 'ps-10',
      lg: 'ps-11',
      xl: 'ps-12'
    }
  },
  trailing: {
    padding: {
      xs: 'pe-8',
      sm: 'pe-9',
      md: 'pe-10',
      lg: 'pe-11',
      xl: 'pe-12'
    }
  },
  color: {
    ...shareUI.color,
    white: ['ui:bg-gray-0-900 ' + share.white_gray].toString(),
    gray: ['ui:bg-gray-50-800 ' + share.white_gray].toString()
  },
  variant: {
    outline: {
      auto: ['bg-transparent ' + share.outline].toString(),
      white: ['ui:bg-gray-0-900 ' + share.outline].toString(),
      gray: ['ui:bg-gray-50-800 ' + share.outline].toString()
    }
  },
  icon: {
    base: 'flex-shrink-0 text-gray-600 dark:text-gray-500',
    color: 'text-{color}-600 dark:text-{color}-500',
    size: shareUI.icon.size,
    leading: {
      wrapper: 'absolute inset-y-0 left-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        xs: 'px-2',
        sm: 'px-2',
        md: 'px-2.5',
        lg: 'px-3',
        xl: 'px-3.5'
      }
    },
    trailing: {
      wrapper: 'absolute inset-y-0 right-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        xs: 'px-2',
        sm: 'px-2',
        md: 'px-2.5',
        lg: 'px-3',
        xl: 'px-3.5'
      }
    }
  },
  default: {
    size: 'md',
    color: 'white',
    variant: 'outline'
  }
}
