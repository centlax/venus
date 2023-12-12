import type { PropType } from 'vue';
import ui from './button.css';

export const props = defineProps({
type: {
type: String,
default: 'button'
},
length: {
type: String as PropType<keyof typeof ui.length>,
default: () => ui.default.length
},
label: {
type: String,
default: null
},
loading: {
type: Boolean,
default: false
},
disabled: {
type: Boolean,
default: false
},
padding: {
type: String as PropType<keyof typeof ui.padding>,
default: () => ui.default.padding
},
rounded: {
type: String as PropType<keyof typeof ui.padding>,
default: () => ui.default.padding
},
size: {
type: String as PropType<keyof typeof ui.size>,
default: () => ui.default.size
},
variant: {
type: String as PropType<keyof typeof ui.variant>,
default: () => ui.default.variant
},
truncate: {
type: Boolean,
default: false
},
class: {
type: String,
default: ui.base
}
});
