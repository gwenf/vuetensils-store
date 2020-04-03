<template>
  <VTable
    class="styled"
    :headers="headers"
    :items="products"
  />
</template>

<script>
import { VTable } from 'vuetensils'
import products from '@/products'

export default {
 components: {
    VTable
  },
  data() {
    return {
      headers: [
        { key: 'name' },
        { key: 'price' },
        { key: 'date' }
      ],
      products
    }
  }
}
</script>
