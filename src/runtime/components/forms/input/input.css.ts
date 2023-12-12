export default {
  wrapper: 'relative',
  base: 'block w-full rounded-md border-0 shadow-sm focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:leading-6',
  variant: {
    auto: 'text-gray-900 dark:text-white bg-white dark:bg-white/5 ring-1 ring-inset ring-gray-300 dark:ring-white/10',
    none: 'bg-transparent focus:ring-0 focus:shadow-none'
  },
  form: 'form-input',
  font: 'font-medium',
  size: {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
  },
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-sm'
  },
  rounded: 'rounded-md',
  placeholder: 'placeholder-gray-400',
  gap: {
    xs: 'gap-x-1.5',
    sm: 'gap-x-1.5',
    md: 'gap-x-2',
    lg: 'gap-x-2.5',
    xl: 'gap-x-2.5'
  },
  padding: {
    auto: {
      xs: 'px-2.5 py-1',
      sm: 'px-2.5 py-1',
      md: 'px-3 py-1.5',
      lg: 'px-3.5 py-2.5',
      xl: 'px-3.5 py-2.5'
    },
    none: {
      xs: 'p-0',
      sm: 'p-0',
      md: 'p-0',
      lg: 'p-0',
      xl: 'p-0'
    }
  },
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
  icon: {
    base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
    color: 'text-brand-500 dark:text-brand-400',
    loading: 'animate-spin',
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6'
    },
    leading: {
      wrapper: 'absolute inset-y-0 start-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        xs: 'ps-2.5',
        sm: 'ps-2.5',
        md: 'ps-3',
        lg: 'ps-3.5',
        xl: 'ps-3.5'
      }
    },
    trailing: {
      wrapper: 'absolute inset-y-0 end-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        xs: 'pe-2.5',
        sm: 'pe-2.5',
        md: 'pe-3',
        lg: 'pe-3.5',
        xl: 'pe-3.5'
      }
    }
  },
  default: {
    size: 'md',
    variant: 'auto',
    padding: 'auto',
    loadingIcon: 'i-heroicons-arrow-path-20-solid'
  }
}
