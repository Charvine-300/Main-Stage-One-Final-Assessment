<template>
    <div class="flex justify-between items-center gap-3 w-full mb-10">       
            <select @change="updatePageSize" class="ml-4 p-2 border rounded text-black-100">
              <option :value="5">5</option>
              <option :value="10">10</option>
              <option :value="20">20</option>
            </select>

        <div class="flex gap-3 items-center">
            <button 
              @click="prevPage" 
              :disabled="page === 1"
              class="px-4 py-2 bg-blue-200 text-white-100 rounded"
            >
              Prev
            </button>
        
            <span class="text-lg font-bold text-blue-200">Page: {{ page }}</span>
        
            <button 
              @click="nextPage" 
            class="px-4 py-2 bg-blue-200 text-white-100 rounded"
            >
              Next
            </button>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">  
  defineProps({
    page: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    prevPage: {
      type: Function as PropType<() => void>,
      required: true,
    },
    nextPage: {
      type: Function as PropType<() => void>,
      required: true,
    },
    updatePageSize: {
      type: Function as PropType<() => void>,
      required: true,
    },
  });
  </script>
  