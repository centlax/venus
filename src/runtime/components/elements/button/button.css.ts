export default {
  base: 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
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
  variant: {
    solid: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
    outline: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950'
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
    variant: 'solid',
    length: 'inline',
    loadingIcon: 'heroicons:arrow-path-20-solid'
  }
}
