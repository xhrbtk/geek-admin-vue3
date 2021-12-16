import  { defineComponent, h } from 'vue'

export default defineComponent({
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    setup(props, { slots }) {
        // 使用jsx
        const tag = 'h' + props.level
        return () => <tag>{ slots.default() }</tag>


        // return () => h(
        //     'h' + props.level,
        //     { },
        //     slots.default()
        // )
    }
})