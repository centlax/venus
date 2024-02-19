import type { ButtonHTMLAttributes } from 'vue'
import ui from './styles'
export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    leadingIcon?: string
    trailingIcon?: string
    label?: string
    truncate?: boolean
    color?: Extract<keyof typeof ui.color, string>
    size?: Extract<keyof typeof ui.size, string>
    variant?: Extract<keyof typeof ui.variant, string>
    padded?: boolean
    square?: boolean
    block?: boolean
}