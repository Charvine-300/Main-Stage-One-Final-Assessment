<template>
    <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col gap-3 items-center" v-if="loading">
            <img src="/loading.png" alt="Loading icon" class="animate-spin-fast" />
            <p class="font-bold text-center"> Loading articles... </p>
        </div>
        <div v-if="articles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 my-20 mx-auto">
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
    loading.value = true;
    const response = await useFetch<News>(`/api/news/${question.value}`);

if (response.data.value) {
    articles = response.data.value?.articles;
    sessionStorage.setItem("articles", JSON.stringify(response.data.value?.articles));
}
    loading.value = false;
}


onMounted(async () => {
    fetchNews();
})


</script>

<style scoped>

</style>