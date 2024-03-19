<template>
    <template v-for="menu in userMenu">
        <el-submenu v-if="menu.children && menu.children.length > 0 && menu.children [0].menuType == 1" :index="menu.path" :key="menu._id">
            <template #title>
                <i :class="menu.icon"></i>
                <span>{{menu.menuName}}</span>
            </template>
            <tree-menu userMenu="menu.children"/>
        </el-submenu>
        <el-menu-item v-else-if="menu.menuType ==1" :index="menu.path" :key="menu._id">{{menu.menuName}}</el-menu-item>
    </template>
</template>

<script>

export default {
    name: 'treeMenu',
    props: {
        menuList: {
            type:Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>
</style>