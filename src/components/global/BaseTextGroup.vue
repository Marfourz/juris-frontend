<template>
  <div class="pb-6 sm:py-10 border-b border-gray-200">
    <div class="title text-lg font-bold  text-primary mb-2" v-if="title">{{ title }}
    </div>
    <div class="grid gid-cols-1 md:grid-cols-3 gap-4" v-if="hasDescriptions">
      <div v-for="(description, i) in descriptions" :key="i">
        
        <BaseText :label="description.label" :value="description.value"/>
      </div>
    </div>
    <div class=""  v-if="hasOptions">
      <div v-for="(option, i) in options" :key="i" class="my-3 sm:my-10 last:border-b-0 border-b pb-4 border-gray-200">
        <div class="text-sm font-bold  text-primary mb-2" v-if="options  && options.length>1"> {{ option.subtitle }}</div>
        <div class="grid gid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(description, i) in option.descriptions" :key="i">
            <BaseText :label="description.label" :value="description.value"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue'
import BaseText from './BaseText.vue'
export default defineComponent({
  components:{BaseText},
  props: {
    title: {
      type: String
    },
    descriptions: {
      type: Array 
    },
    options: {
      type: Object 
    }
  },

  setup(props) {

    const hasOptions = computed(() => {
      return props.options && props.options?.length > 0
    })
    const hasDescriptions = computed(() => {
      return props.descriptions && props.descriptions?.length > 0
    })
    return {
      hasOptions,
      hasDescriptions
    }
  }
})
</script>