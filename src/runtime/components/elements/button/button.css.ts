export default {
  base: 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
  font: 'font-semibold',
  truncate: 'text-left break-all line-clamp-1',
  length: {
    block: 'w-full flex justify-center items-center',
    inline: 'inline-flex items-center'
  },
  size: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
  },
  rounded: {
    auto: {
      xs: 'rounded',
      sm: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-md',
      xl: 'rounded-md'
    },
    full: {
      xs: 'rounded-full',
      sm: 'rounded-full',
      md: 'rounded-full',
      lg: 'rounded-full',
      xl: 'rounded-full'
    }
  },
  padding: {
    auto: {
      xs: 'px-2 py-1',
      sm: 'px-2 py-1',
      md: 'px-2.5 py-1.5',
      lg: 'px-3 py-2',
      xl: 'px-3.5 py-2.5'
    },
    square: {
      xs: 'p-1',
      sm: 'p-1',
      md: 'p-1.5',
      lg: 'p-2',
      xl: 'p-2.5'
    },
    none: {
      xs: 'p-0',
      sm: 'p-0',
      md: 'p-0',
      lg: 'p-0',
      xl: 'p-0'
    }
  },
  colors: {
    solid: 'bg-brand-600 text-white hover:bg-brand-700',
    outline: 'bg-transparent text-gray-900 dark:text-gray-200 ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 hover:bg-gray-950',
    soft: 'bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 hover:bg-brand-100 hover:bg-brand-900',
    ghost: 'bg-transparent text-brand-600 dark:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950'
  },
  variant: {
    solid: 'shadow-sm',
    outline: 'shadow-sm dark:shadow-gray-800 ring-1 ring-inset',
    soft: 'shadow-sm',
    ghost: ''
  },
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-sm'
  },
  icon: {
    base: 'flex-shrink-0',
    loading: 'animate-spin',
    leading: {
      margin: {
        xs: 'mr-0.5',
        sm: 'mr-0.5',
        md: 'mr-1',
        lg: 'mr-1.5',
        xl: 'mr-1.5'
      }
    },
    trailing: {
      margin: {
        xs: 'ml-0.5',
        sm: 'ml-0.5',
        md: 'ml-1',
        lg: 'ml-1.5',
        xl: 'ml-1.5'
      }
    },
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6'
    }
  },
  default: {
    padding: 'auto',
    size: 'md',
    variant: 'solid',
    length: 'inline',
    rounded: 'auto',
    loadingIcon: 'heroicons:arrow-path-20-solid'
  }
}
