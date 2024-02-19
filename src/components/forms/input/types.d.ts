import type { InputHTMLAttributes } from 'vue'
import css from './styles'

export interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {
    size?: Extract<keyof typeof css.size, string>
    transform?: Extract<keyof typeof css.transform, string>
    quantity?: number
}