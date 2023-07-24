<template>
  <div
    class="font-semibold rounded-2xl  flex space-x-1 justify-center px-2 items-center text-sm align-center"
    style="font-size:12px;width:fit-content"
    :class="{
      'bg-fadeWarning': type == 'warning',
      'bg-fadeDanger': type == 'danger',
      'bg-fadeSuccess': type == 'success',
      'text-warning': type == 'warning',
      'text-danger': type == 'danger',
      'text-primary': type == 'success',
      'underline text-[#2062F6]': type=='colorize',
      //'purple': type==''
    }"
  >
    <div
      class="rounded-full "
      style="width:5.28px;height:5.28px"
      :class="{
        'bg-warning': type == 'warning',
        'bg-danger': type == 'danger',
        'bg-primary': type == 'success',
      }"
    ></div>
    <div> {{title}}</div>
   
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String as () => 'success' | 'danger' | 'warning' | 'colorize',
      default: "success",
      
    } ,
    title: {
      type : String
    }
  },
  
  setup(){
    return {

    }
  }
  
});
</script>

<style lang="scss" scoped>
</style>