<template>
    <div class="flex items-center justify-center h-screen">
        <div class="mt-7 max-w-sm mx-auto text-center card">
            <img src="/not-found.png" alt="not found icon" class="block mx-auto w-[150px] h-[150px]" />
            <p class="mt-7 text-7xl font-bold"> {{ error?.statusCode }} </p>
            <p class="mt-7 text-5xl">Oops!</p>
            <p class="mt-7">{{ error?.message }}</p>
            <button class="px-3 py-2 w-fit rounded-[6px] bg-blue-200 text-white-100 my-8" @click="handleClearError"> Go Home </button>
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => {
    clearError({
        redirect: "/",
    })
}
</script>

<style lang="scss" scoped>

</style>