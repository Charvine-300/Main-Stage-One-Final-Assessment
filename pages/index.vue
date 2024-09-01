<template>
    <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col gap-3 items-center" v-if="loading">
            <img src="/loading.png" alt="Loading icon" class="animate-spin-fast" />
            <p class="font-bold text-center"> Loading articles... </p>
        </div>
        <div v-if="!loading">
            <h1 class="text-center text-4xl mt-8 font-bold"> Search keyword</h1>
            <div class="relative w-fit mx-auto mt-8 flex flex-wrap gap-3 items-center justify-center">
          <input
            type="text"
            v-model="question"
            placeholder="Search..."
            class="border border-gray-100 bg-white-100  rounded-lg p-2 focus:outline-none min-w-[300px]"
          />
          <button
            class=" bg-blue-200 text-white-100 rounded-lg py-2 px-6"
            @click="fetchNews"
          >
            Search
          </button>
        </div>
        </div>
        <div v-if="articles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 mb-20 mt-10 mx-auto">
            <ArticleCard v-for="item in articles" :key="item.publishedAt" :article="item" />
        </div>
    </div>
</template>


<script setup lang="ts">
import type { Article } from '~/utils/types';

let articles = reactive<Article[]>([]);
const loading = ref(false);
const question = ref("bitcoin");

const fetchNews = async () => {
    articles = [];
    loading.value = true;
    // Proper timing for API requests
    await nextTick()

    const response = await useFetch<News>(() => `/api/news/${question.value}`);

if (response.data.value) {
    articles = response.data.value?.articles;
    sessionStorage.setItem("articles", JSON.stringify(response.data.value?.articles));
} else {
  throw createError({ statusCode: 404, statusMessage: "Failed to fetch articles", fatal: true })
}

    loading.value = false;
}


onMounted(async () => {
    fetchNews();
})


</script>

<style scoped>

</style>