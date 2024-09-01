<template>
    <div>
        <div v-if="!loading">
            <h1 class="text-center text-4xl mt-8 font-bold"> {{ !loading ? "Search for articles" : `Search results` }} </h1>
            <div class="relative w-fit mx-auto mt-8 flex flex-wrap gap-3 items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            :value="question"
            class="border border-gray-100 bg-white-100 rounded-lg p-2 focus:outline-none min-w-[300px]"

        @change="(e) => enterKeyword((e.target as HTMLInputElement).value)"
          />
          <button
            class=" bg-blue-200 text-white-100 rounded-lg py-2 px-6"
            @click="fetchNews"
          >
            Search
          </button>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    question: {
        type: String,
        required: true,
    },
    loading: {
        type: Boolean,
        required: true
    },
    fetchNews: {
        type: Function as PropType<(payload: MouseEvent) => void>,
        required: true
    },
    enterKeyword: {
        type: Function as PropType<(word: string) => void>,
        required: true
    }
})
</script>

<style scoped>

</style>