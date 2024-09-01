<template>
    <div class="h-full min-h-[100vh] flex flex-col justify-between">
<header class="py-5 px-3 shadow-md cursor-pointer">
    <div class="flex flex-row justify-between items-center max-w-[1440px] mx-auto">
        <NuxtLink to="/">
            <div class="flex items-center gap-2">
            <img src="/logo.png" alt="Logo icon" class="w-[50px] h-[50px]" />
            <h1 class="text-xl font-bold"> NewsHub </h1>
            </div>
        </NuxtLink>
        <img src="/user.png" alt="mock user icon" class="cursor-pointer w-[50px] h-[50px] ">
    </div>
</header>
<NuxtPage />
<footer class="py-5 px-3 shadow-custom">
    <div class="flex flex-col gap-4 justify-center items-center lg:flex-row lg:justify-between max-w-[1440px] mx-auto">
        <a class="font-bold cursor-pointer" href="https://github.com/Charvine-300/Main-Stage-One-Final-Assessment" target="_blank" rel="noreferrer"> View app repository</a>
        <p class="font-light text-gray-500">
            © NewsHub 2024. All Rights Reserved.
        </p>
    </div>
</footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>