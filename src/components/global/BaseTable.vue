<template>
  <div class="w-full overflow-auto bg-white">
    <table
      class="table-auto w-full text-tableColor"
      style="font-weight: normal"
    >
      <thead>
        <tr class="bg-grey-10">
          <th v-if="selectable" class="p-2">
            <input type="checkbox" class="cursor-pointer" v-model="checkedAll" />
          </th>
          <th
            v-for="title in titles"
            :key="title.name"
            class="py-4 border-b text-left pl-2 font-semibold"
          >
            {{ title.title }}
          </th>
        </tr>
      </thead>
      <tbody v-if="loading">
        <tr>
          <td :colspan="titles.length">
              <div class="w-full flex justify-center mt-10 font-bold">
                  Chargement en cours ....
              </div>
          </td>
        </tr>
      </tbody>
      <tbody class="bg-white" v-else-if="data && data.length != 0">
        <tr
          v-for="(element, i) in data"
          :key="i"
          :class="{
            'bg-grey-10': isEqual(element, currentElement),
            'border-b': i != data.length - 1,
          }"
          @mouseenter="currentElement = element"
        >
          <td v-if="selectable">
            <div class="p-2 flex justify-center items-center">
              <input
                type="checkbox"
                class="cursor-pointer"
                @change="onCheckedElement(element, $event)"
                :checked="
                  verifyElementExistInArray(element, checkedElements)
                    ? true
                    : false"
              />
            </div>
          </td>
          <td
            v-for="title in titles"
            :key="title.name"
            class="py-4 text-left pl-2 "
          >
            <div  v-if="title.name != 'action'" class="max-w-xs">
              <slot
              :name="title.name"
              :element="{ ...element, index: i }"
             
            >
              <!-- {{ element[title.name] }} -->
              {{ getElementValue(title, element, i) }}
            </slot>
            </div>
          

            <div v-else-if="isEqual(element, currentElement)">
              <slot name="action" :element="element"> </slot>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody class="bg-white" v-else>
        <tr>
          <td :colspan="titles.length">
            <div class="w-full text-center p-8 shadow">
              Aucun élément trouvé
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
interface ITitle {
  title: string;
  name: string;
  transform?: Function
}

import { defineComponent, onMounted, ref, watch } from "vue";
import isEqual from "lodash/isEqual";
export default defineComponent({
  props: {
    data: {
      type: Array as () => Array<any>,
      required: true,
    },
    titles: {
      type: Array as () => Array<ITitle>,
      required: true,
    },
    emptyMessage: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
  },

  expose: ['resetSelection'],

  
  setup(props,context) {
    const currentElement = ref();
    const checkedAll = ref(false);
    const checkedElements = ref<Array<any>>([]);

    function onCheckedElement(element: any, event: any) {
      if (verifyElementExistInArray(element, checkedElements.value)){
        checkedElements.value = checkedElements.value.filter(
          (value) => JSON.stringify(value) != JSON.stringify(element)
        ); 
      }
      else checkedElements.value.push(element);
      context.emit('checkedElement',checkedElements.value)

    }

    const resetSelection = () => {
      onResetSelection()
    }

    function onResetSelection() {
      checkedElements.value = []
      context.emit('checkedElement',checkedElements.value)

    }

    function getElementValue(title: ITitle, element: any, index: number) {
      if (title.transform && typeof title.transform === 'function') {
        return title.transform(element, index)
      }
      return getValue(element, title.name)
    }

    function getValue(obj: any, path: string,) {
      
      let current = obj, i;
      if (path) {
        const paths = path.split('.');
        for (i = 0; i < paths.length; ++i) {
          if (current[paths[i]] == undefined || current[paths[i]] == null) {
            return "";
          } else {
            current = current[paths[i]];
          }
        }
      }
      return current;
    }

    function verifyElementExistInArray(element: any, elements: Array<any>) {
      return elements.find(
        (value) => JSON.stringify(value) == JSON.stringify(element)
      );
      
    }

    function onMounted() {
      if (props.data.length != 0) currentElement.value = props.data[0];
    }

    //watchers
    watch(checkedAll, (newValue) => {
      if (newValue) checkedElements.value = props.data;
      else checkedElements.value = [];
      context.emit('checkedElement',checkedElements.value)
    });

    return {
      currentElement,
      getElementValue,
      resetSelection,
      isEqual,
      checkedAll,
      onCheckedElement,
      checkedElements,
      verifyElementExistInArray,
    };
  },
});
</script>

<style lang="scss" scoped></style>
