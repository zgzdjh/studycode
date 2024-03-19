<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse? 'fold': 'unfold']">
      <!-- 系统LOGO -->
      <div class="logo">
        <img src="./../assets/logo.png"alt="">
        <span v-if="!isCollapse">Manager</span>
      </div>
      <!-- 导航菜单 -->
      <el-menu 
        default-active="activeMenu"
        background-color="#001529"
        text-color="#fff"
        router
        collapse="isCollapse"
        class="nav-menu">
        <tree-menu :menuList="menuList" />
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse? 'fold': 'unfold']">
      <div class="nav-top">
        <div class="nav-left">
          <div><el-icon class="menu-fold"><Fold @click="toggle" /></el-icon></div>
          <bread-crumb />
        </div>
        <div class="user-info">
          <el-badge :is-dot="noticeCount > 0 ? true : false" class="notice">
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
import { noticeCount } from '@/api/users/index'
import treeMenu from '@/components/treeMenu.vue'
import breadCrumb from '@/components/breadCrumb.vue'

export default{
  name:'Home',
  components: { treeMenu, breadCrumb },
  data(){
    return {
      isCollapse: false,
      // userInfo： this.$store.state.userInfo
      userInfo: {
        userName: 'Jack',
        userEmail: 'jack@admin.com',
      },
      noticeCount: 0,
      menuList: [],
      activeMenu: location.hash.slice(1),
    }
  },
  mounted() {
    // this.getNoticeCount()
    this.$nextTick(() => {
      // this.getNoticeCount()
      // this.getMenuList()
    })
  },
  methods: {
    handleLogout(key) {
      if (key == 'email') return null;
      this.$store.commit('saveUserInfo', '');
      this.userInfo = null;
      this.$router.push('/login');
    },
    toggle() {
      this.isCollapse = !this.isCollapse
    },
    // 这两种方式究竟有多少区别
    // async getNoticeCount() {
    //   try {
    //     const count = await noticeCount()
    //     this.noticeCount = count;
    //   } catch(err) {
    //     console.log('err', err)
    //   }
    // },
    getNoticeCount() {
      noticeCount().then((res)=> {
        this.noticeCount = res.count
        // 是不是如果有下一个请求写到这里，这两个从执行上来看就一样了，只是上面的更好看，这感觉是一个主题阅读的问题
      }).catch(err => {
        console.error('err', err)
      })
    },
    getMenuList() {
      getMenuList().then((res)=> {
        this.menuList = res.data
      }).catch(err => {
        console.error('err', err)
      })
    },
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
    transition: width .5s;
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
      height:calc(100vh - 90px);
      background-color: #001529;
      border-right:none;
    }
    /** &表示父选择类  */
    &.fold{
      width:64px;
    }
    &.unfold{
      width:200px;
    }
  }
  .content-right{
    margin-left: 200px;
    &.fold{
      margin-left: 64px;
    }
    &.unfold{
      margin-left: 200px;
    }
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
