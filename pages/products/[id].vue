<template>
    <div>
        <Head>
            <Title> Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>

        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
import ProductDetails from '~/components/ProductDetails.vue'

    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    // fetch the product
    const { data: product } = await useFetch(uri)

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true})
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>