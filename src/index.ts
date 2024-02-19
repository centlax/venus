import { useTheme } from './composables/useTheme'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const theme = useTheme()
theme.init()

export * from './components'