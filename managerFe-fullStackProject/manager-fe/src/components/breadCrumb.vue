<template>
    <el-breadcrumb separator=">" class="breadcrumbArea">
        <el-breadcrumb-item v-for="(item,index) in breadList" :key="item.path">
            <router-link to="/welcome"v-if="index == 0">{{item.meta.title}}</router-link>
            <span v-else>{{item.meta.title}}</span>
        </el-breadcrumb-item>
        <!-- <el-breadcrumb-item><a href-="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>话动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
</template>

<script>

export default {
    name: 'breadCrumb',
    props: {
    },
    computed: {
        breadList() {
            return this.$route.matched;
        }
    },
    mounted() {
        console.log('routes=>', this.$route)
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.breadcrumbArea {
    line-height: 50px;
    
}
</style>