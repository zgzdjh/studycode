<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form :model="formData" :rules="rules" ref="formData">
        <div class="title">登录</div>
        <el-form-item prop="userName">
          <el-input type="text" prefix-icon="User" v-model="formData.userName"></el-input>
          <!-- <el-input type="text" :prefix-icon="User" v-model="formData.userName"/> -->
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input type="password" prefix-icon="View" v-model="formData.userPwd"></el-input>
          <!-- <el-input type="password" :prefix-icon="View" v-model="formData.userPwd"/> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/users/index'

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
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ],
        userPwd: [
          { required: true, message:"请输入用户", trigger: "blur" }
        ],
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          login(this.formData).then((res)=> {
            this.$store.commit('saveUserInfo', res)
            this.$router.push('/welcome')
          }).catch(err => {
            console.log('err', err)
          })
        }
      });
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
