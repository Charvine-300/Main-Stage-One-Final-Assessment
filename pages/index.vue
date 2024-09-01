<template>
    <div class="max-w-[1440px] mx-auto">
        <div class="flex flex-col gap-3 items-center" v-if="loading">
            <img src="/loading.png" alt="Loading icon" class="animate-spin-fast" />
            <p class="font-bold text-center"> Loading articles... </p>
        </div>
     <SearchInput :loading="loading" :enter-keyword="enterKeyword" :fetch-news="fetchNews" :question="question"/>
        <div v-if="articles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 my-10 mx-auto">
          <ArticleCard v-for="item in articles" :key="item.publishedAt" :article="item" />
        </div>

<!-- NOTE- API not handling pagination well -->
        <!-- <div v-if="articles.length > 0">
            <Pagination 
              :page="page" 
              :pageSize="pageSize" 
              :prev-page="prevPage"
              :next-page="nextPage"
              :update-page-size="updatePageSize"
            />
        </div> -->
    </div>
</template>


<script setup lang="ts">
import type { Article } from '~/utils/types';

let articles = reactive<Article[]>([]);
const loading = ref(false);
const question = ref("");
const page = ref(1);
const pageSize = ref(12);

const enterKeyword = (word: string) => {
    question.value = word;
}

const fetchNews = async () => {
    articles = [];
    loading.value = true;
    // Proper timing for API requests
    await nextTick()

    const response = await useFetch<News>(() => `/api/news/${question.value}?page=${page.value}&pageSize=${pageSize.value}`);

if (response.data.value) {
    articles = response.data.value?.articles;
    sessionStorage.setItem("articles", JSON.stringify(response.data.value?.articles));
} else {
  throw createError({ statusCode: 404, statusMessage: "Failed to fetch articles", fatal: true })
}

    loading.value = false;
};

// const prevPage = () => {
//     if (page.value > 1) {
//       page.value -= 1;
//     }
//   };
  
//   const nextPage = () => {
//     page.value += 1;
//   };
  
//   const updatePageSize = () => {
//     page.value = 1; // Reset to first page when page size changes
//   };
  
//   // Trigger fetchNews whenever page or pageSize changes
//   watch([page, pageSize], () => {
//     fetchNews();
//   });

//  Search Keyword persist
onMounted(() => {
  question.value = sessionStorage.getItem('question') || '';

  if (question.value !== '') {
    fetchNews();
  }
});

// Watch the ref and update sessionStorage whenever it changes
watch(question, (newValue) => {
  sessionStorage.setItem('question', newValue);
});

</script>

<style scoped>

</style>