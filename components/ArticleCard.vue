<template>
    <div :title="article?.title">
        <div class="border border-gray-100 bg-white-100 rounded-lg p-5 max-w-[392px] lg:h-[480px] flex flex-col md:justify-between">
<img :src="article?.urlToImage ?? './article.png'" alt="" class="w-full max-h-[180px] rounded-lg" />
<div class="mt-3">
<div class="px-3 py-2 w-fit rounded-[6px] bg-blue-100">
<p class="text-blue-200 font-[500]"> {{ article?.source?.name ?? "Technology" }} </p>
</div>
<h3 class="font-bold text-black-100 text-2xl mt-3 line-clamp-3">
    {{ article?.title }}
</h3>
<div class="flex flex-row justify-between mt-3 text-gray-200">
    <p>{{ article?.author }}</p>
    <p>{{ moment(article?.publishedAt).format("MMMM DD, YYYY") }}</p>
</div>
<div class="mt-5">
    <div class="px-3 py-2 w-fit rounded-[6px] ml-auto">
        <NuxtLink :to="`/news/${article?.title}`">
            <p class="text-blue-200 font-[500] cursor-pointer"> Read more </p>
        </NuxtLink>
</div>
</div>
</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import type { PropType } from 'vue';

defineProps({
    article: {
        type: Object as PropType<Article>,
        // required: true,
    }
})
</script>

<style scoped>

</style>