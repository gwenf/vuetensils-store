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

      <VInput
        v-model="username"
        type="text"
        name="username"
        label="Username"
        pattern="cat"
      />

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
      >
        Clear
      </button>
    </template>
  </VForm>
</template>

<script>
import { VForm, VInput } from "vuetensils"

export default {
  components: {
    VForm,
    VInput
  },
  data() {
    return {
      username: ''
    }
  },
  methods: {
    submit() {
      console.log('submitted')
    }
  }
}
</script>

<style>
.vts-form--error {
  border-color: red;
}
</style>
