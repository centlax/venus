import { share } from '../../../theme'
const white_gray = 'focus:outline-none shadow-sm ring-1 ui:ring-gray-300-700 focus-visible:(ring-2 ui:ring-primary)'

export default {
  base: 'font-semibold focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
  rounded: share.rounded,
  truncate: 'text-left break-all line-clamp-1',
  block: 'w-full flex justify-center items-center',
  inline: 'inline-flex items-center',
  size: share.size,
  text: share.text,
  gap: share.gap,
  padding: share.padding,
  square: share.square,
  color: {
    ...share.color,
    white: [
      'ui:text-gray-900-0 ui:bg-gray-0-900 hover:ui:bg-gray-100-800 disabled:ui:bg-gray-0-900' +
      white_gray
    ].toString(),
    gray: [
      'ui:text-gray-700-200 ui:bg-gray-50-800 hover:ui:bg-gray-100-700 disabled:ui:bg-gray-100-800 ' +
      white_gray
    ].toString()
  },
  variant: {
    solid: [
      'shadow-sm text-white ui:bg-{color} hover:ui:bg-{color}-700-600 focus-visible:(outline outline-2 outline-offset-2) focus-visible:ui:outline-{color}'
    ].toString(),
    ghost:
      'ui:text-{color} hover:ui:bg-{color}-50-950 disabled:bg-transparent ring-current focus-visible:ring-2',
    get outline() {
      return `${this.ghost} ring-1`
    },
    soft: [
      'ui:text-{color} hover:ui:text-gray-900-0 ui:bg-{color}-50-950/50 hover:ui:bg-{color}-100-800/80 disabled:bg-{color}-50-950 hover:ui:ring-primary focus-visible:ring-2 '
    ].toString()
  },

  icon: {
    base: 'flex-shrink-0',
    loading: 'animate-spin',
    color: 'ui:text-primary',
    size: share.icon.size
  }
}
