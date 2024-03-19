<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">通用后台管理系统</div>
      <div class="desc">-Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统</div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
import { login } from '@/api/users/index'

export default {
  name: 'welcome',
  data() {
    return  {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.welcome {
  display:flex;
  justify-content: space-around;
  align-items:center;
  height:100%;
  .content{
    .sub-title {
      font-size:30px;
      line-height:42px;
      color: #333;
    }
    .title{
      font-size:40px;
      line-height:62px;
      color:#409eff;
    }
    .desc {
      text-align:right;
      font-size:14px;
      color:#999;
    }
  }
  .img {
    background-image: url('./../assets/images/welcome.png');
    width: 525px;
    height: 507px;
  }
}

</style>
