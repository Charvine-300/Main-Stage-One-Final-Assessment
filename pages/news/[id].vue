<template>
    <div class="max-w-[800px] mx-auto">
<div class="px-4 my-20 mx-auto">
    <h1 class="font-bold text-black-100 text-2xl mt-3 line-clamp-3"> {{ articleDetails?.title }} </h1>
    <div class="flex flex-row gap-5 mt-3 text-gray-200">
    <p>{{ articleDetails?.author }}</p>
    <p>{{ moment(articleDetails?.publishedAt).format("MMMM DD, YYYY") }}</p>
</div>
<div class="my-5 w-full">
    <img :src="articleDetails?.urlToImage ?? './article.png'" :alt="articleDetails?.author" class="w-full rounded-lg" />
</div>
<div class="my-8">
    <p class=" text-gray-300">
        {{ articleDetails?.content }}
    </p>
</div>
</div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
// NOTE - Fetch route parameter
const { id } = useRoute().params;
let articleDetails = reactive<Partial<Article>>({});

onMounted(() => {
    const articlesStash = sessionStorage.getItem("articles");
    
    if (articlesStash) {
        const articles = JSON.parse(articlesStash);
        articleDetails = articles.find((item: Article) => item.title === id);
    }
})

</script>

<style scoped>

</style>