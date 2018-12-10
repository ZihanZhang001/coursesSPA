<template>
  <el-row type="flex" justify="center">
    <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
      <br><br>
      <el-form-item label="Username" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input v-model="user.pass" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-upload" @click="login">login</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
import CourseService from '@/services/CourseService'
export default {
  methods: {
    login: function () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          CourseService.validateUser(this.user).then((res) => {
            if (res.data) {
              this.$store.dispatch('login', res.data).then(() => {
                this.$notify({
                  type: 'success',
                  message: 'welcome ,' + res.data.name + '!',
                  duration: 3000
                })
                this.$router.replace('/main')
              })
            } else {
              this.$message({
                type: 'error',
                message: 'invalid name or password',
                showClose: true
              })
            }
          }).catch(() => {
            this.$message({
              type: 'error',
              message: 'Network error，please try again',
              showClose: true
            })
          })
        } else {
          return false
        }
      })
    }
  },
  data () {
    return {
      user: {},
      rules: {
        name: [
          {required: true, message: 'name is required', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: 'password is required', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>
