<template>
    <div>

        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis soluta sapiente sed blanditiis quis error, numquam tempore aliquam similique!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis soluta sapiente sed blanditiis quis error, numquam tempore aliquam similique!</p>
        <div> {{ data }}</div>

    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/ADA')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>