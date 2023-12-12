export default {
  base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
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
    xs: 'rounded',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-md',
    xl: 'rounded-md'
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
  color: {
    solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    outline: '',
    soft: '',
    ghost: 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    link: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'

  },
  variant: {
    solid: 'shadow-sm text-white dark:text-gray-900 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-500 dark:bg-brand-400 dark:hover:bg-brand-500 dark:disabled:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:focus-visible:outline-brand-400',
    outline: 'ring-1 ring-inset ring-current text-brand-500 dark:text-brand-400 hover:bg-brand-50 disabled:bg-transparent dark:hover:bg-brand-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-brand-500 dark:focus-visible:ring-brand-400',
    soft: 'text-brand-500 dark:text-brand-400 bg-brand-50 hover:bg-brand-100 disabled:bg-brand-50 dark:bg-brand-950 dark:hover:bg-brand-900 dark:disabled:bg-brand-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 dark:focus-visible:ring-brand-400',
    ghost: 'text-brand-500 dark:text-brand-400 hover:bg-brand-50 disabled:bg-transparent dark:hover:bg-brand-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 dark:focus-visible:ring-brand-400',
    link: 'text-brand-500 hover:text-brand-600 disabled:text-brand-500 dark:text-brand-400 dark:hover:text-brand-500 dark:disabled:text-brand-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500 dark:focus-visible:ring-brand-400'
  },
  text: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-sm'
  },
  default: {
    padding: 'auto',
    size: 'md',
    variant: 'soft',
    length: 'inline',
    loadingIcon: 'heroicons:arrow-path-20-solid'
  }
}
