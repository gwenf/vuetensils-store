<template>
  <VForm class="styled" @submit.prevent>
    <template #default="form">
      <label>
        Name:
        <small>(required)</small>
        <input name="name" type="text" required />
      </label>

      <label>
        Email:
        <small>(required, type="email")</small>
        <input name="email" type="email" required />
      </label>

      <label>
        Password:
        <small>(required, minlength="6")</small>
        <input name="password" type="password" required minlength="6" />
      </label>

      <button type="submit" class="button" :disabled="!form.valid">
        Submit
      </button>
    </template>
  </VForm>
</template>

<script>
import { VForm } from "vuetensils"

export default {
  components: {
    VForm
  }
}
</script>
