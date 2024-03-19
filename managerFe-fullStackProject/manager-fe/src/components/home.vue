<template>
  <div class="basic-layout">
    <div class="nav-side">
      <!-- 系统LOGO -->
      <div class="logo">
        <img src="./../assets/logo.png"alt="">
        <span>Manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu class="nav-menu">

      </el-menu>
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="nav-left">
          <div><el-icon class="menu-fold"><Fold /></el-icon></div>
          <div>面包屑</div>
        </div>
        <div class="user-info">
          <el-badge is-dot class="notice">
            <el-icon class="notice-bell"><Bell /></el-icon>
          </el-badge>
          <el-dropdown class="dropdown-title" @command="handleLogout" v-if="userInfo">
            <span class="user-link">
              {{userInfo.userName}}
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱: {{userInfo.userEmail}}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'Home',
  data(){
    return {
      userInfo: {
        userName: 'Jack',
        userEmail: 'jack@admin.com',
      }
    }
  },
  methods: {
    handleLogout(key) {
      if (key == 'email') return null;
      this.$store.commit('saveUserInfo', '');
      this.userInfo = null;
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-layout{
  position: relative;
  .nav-side{
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    /* 目录的滑动 */
    transform: width .5s;
    .logo{
      display:flex;
      align-items:center;
      font-size:18px;
      height:50px;
      img {
        margin:0 16px;
        width:32px;
        height:32px;
      }
    }
    .nav-menu{
      height:calc(100vh - 50px);
      background-color: #001529;
      border-right:none;
    }
  }
  .content-right{
    margin-left: 200px;
    .nav-top{
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
      font-size: 18px;
      .nav-left {
        display: flex;
        .menu-fold {
          vertical-align: middle;
          margin-right:15px;
          font-size:18px;
        }
      }
      .user-info {
        .notice {
          line-height: 15px;
          margin-right:15px;
          .notice-bell {
            vertical-align: middle;
          }
        }
        .dropdown-title {
          line-height: 50px;
          .user-link {
            cursor:pointer;
            color:#409eff;
          }
        }
      }
    }
    .wrapper{
      padding: 20px;
      height: calc(100vh - 95px);
      .main-page {
        height: calc(100vh - 135px);
      }
    }
  }
}

</style>
