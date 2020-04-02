<template>
  <div>
    <Header />
    <PopularItems />
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import PopularItems from '@/components/home/PopularItems.vue'

export default {
  components: {
    Header,
    PopularItems
  }
}
</script>