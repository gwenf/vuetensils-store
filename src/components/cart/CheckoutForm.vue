<template>
  <VForm class="styled" @submit.prevent="submit">
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

      <p>Valid: {{ form.valid }}</p>
      <p>Dirty: {{ form.dirty }}</p>
      <p>Error: {{ form.error }}</p>

      <button type="submit" class="button" :disabled="!form.valid">
        Submit
      </button>
      <button
        style="margin-left: 5px"
        class="hollow button secondary"
        @click="form.clear"
        :disabled="!form.dirty"
      >
        Clear
      </button>
    </template>
  </VForm>
</template>

<script>
import { VForm } from "vuetensils"

export default {
  components: {
    VForm
  },
  methods: {
    submit() {
      console.log('submitted')
    }
  }
}
</script>
