<template>
  <div
    class="grid-container fluid"
    style="margin-top: 50px;"
  >
    <div
      class="grid-x grid-margin-x"
    >
      <div class="cell grid-y small-4 large-offset-2">
        <div
          class="cell"
        >
          <h3 class="subheader">Cart</h3>
        </div>
        <div class="cell small-4" v-for="i in products" :key="i">
          <div class="card">
            <div class="card-divider">
              Product Name
            </div>
            <div class="card-section">
              Product Info
            </div>
          </div>
        </div>
      </div>
      <div class="cell small-4">
        <div class="card">
          <div class="card-divider">
            Checkout Form
          </div>
          <div class="card-section">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from '@/components/cart/CheckoutForm.vue'

export default {
  components: {
    CheckoutForm
  },
  data() {
    return {
      products: [...Array(5).keys()]
    }
  }
}
</script>
