<template>
  <div>
    <h1>Thank you for login</h1>
    welcome!<b @click="login">Click here</b>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.replace('/')
    }
  }
}
</script>
