<template>
  <component :is="tag" :style="styleProps" class="l-text-component"  @click="handleClick">
    {{text}}
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { pick } from 'lodash-es'
import useComponentCommon from '../hooks/useComponentCommon'
// array that contains style props
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '../defaultProps'
const defaultProps = transformToComponentProps(textDefaultProps)


console.log(transformToComponentProps, textDefaultProps, textStylePropNames, defaultProps);

export default defineComponent({
  name: 'l-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    ...defaultProps
  },
  setup (props) {
    // 重用并且简化
    // 抽离并且获得 styleProps
    // const styleProps = computed(() => pick(props, textStylePropNames))
    const { styleProps, handleClick} = useComponentCommon(props, textStylePropNames)
    return {
       styleProps,
       handleClick
    }
  }
})
</script>

<style scoped>
h2.l-text-component, p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  position: relative !important;
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>