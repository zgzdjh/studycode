<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userFrom" :modal="formData" status-icon :rules="rules">
        <div class="title">火星</div>
        <el-form-item prop="userName">
          <el-input type="text" pre-icon="el-icon-user" v-model="formData.userName"/>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" pre-icon="el-icon-view" v-model="formData.userPwd"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="submit">登录</eL-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return  {
      formData: {
        userName: '',
        userPwd: ''
      },
      rules: {
        userName: [
          { required:true, message:"请输入用户名", trigger:"blur" }
        ],
        userPwd: [
          { required:true, message:"请输入用户", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.userFrom.validate((valid) => {
        if (valid) {
          // 发送请求，研究一下56项目是怎么发送请求的！我没有做全局引入
          this.$api.login(this.formData).then((res)=> {
            return
            this.$store.commit('saveUserInfo')
            this.$router.push('/welcome')
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal{
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow:0px 0px 10px 3px #c7c9cb4d;
    .title{
      font-size:50px;
      line-height:1.5;
      text-align:center;
      margin-bottom:30px;
    }
    .btn-login{
      width:100%;
    }
  }
}

</style>
