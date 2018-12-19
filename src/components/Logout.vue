<template>
  <div>
    <h1>Logout</h1>
    If You Really Want to Log out, Click Here
    <span v-if="user">
            <el-button type="warning"  @click="logout">Logout</el-button>
    </span>
    <el-button v-else type="success" @click="login">Login</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.replace('/login')
    },
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.replace('/login')
      })
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
