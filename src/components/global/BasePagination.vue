<template>
  <div
    class="flex space-x-4 justify-center items-center p-2 text-center"
    v-if="totalElements > peerPage" :key="totalElements"
  >
    
    <span
      >{{ peerPage * actualPage - peerPage + 1 }} -
      <span v-if="peerPage * actualPage > totalElements ">
        {{ (peerPage  * actualPage - peerPage)  + totalElements % peerPage }}
      </span>
      <span v-else>
        {{ peerPage * actualPage }}
      </span> sur {{ totalElements }}</span
    >
    <span class="cursor-pointer" @click="previous()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
    <span class="cursor-pointer" @click="next()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
export default {

    data() {
        return {
            actualPage : 1
        }
    },

    props:{
        totalElements : {
            type: Number,
            default:10
        },
        peerPage:{
            type: Number,
            default:10
        }
    },

    methods: {
        next(){
            if(this.actualPage * this.peerPage < this.totalElements){
                ++this.actualPage 
                this.$emit('change',this.actualPage)
            }
                
        },
        previous(){
             if(this.actualPage  > 1){
                --this.actualPage 
                this.$emit('change',this.actualPage)
            }
                
        }
    },

};
</script>

<style lang="scss" scoped></style>
