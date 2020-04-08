<template>
  <div
    class="grid-container fluid"
    style="margin-top: 50px;"
  >
    <div class="grid-x">
      <div
        class="cell small-8 medium-offset-3"
      >
        <h3 class="subheader">Past Purchases</h3>
      </div>
      <div class="cell small-6 medium-offset-3">
        <PurchaseTable />
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseTable from '@/components/purchases/PurchaseTable.vue'

export default {
  components: {
    PurchaseTable
  }
}
</script>
