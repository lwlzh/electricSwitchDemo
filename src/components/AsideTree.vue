<template>
    <div>
        <!-- <el-tree :data="data" :props="defaultProps" ref="orgTree"  @data-change="handlechange" @node-click="handleNodeClick"></el-tree> -->
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>默认分组</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">A区设备</el-menu-item>
                    <el-menu-item index="1-2">B区设备 </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">其他分组</span>
            </el-menu-item>

        </el-menu>


    </div>

</template>

<script>
export default {
    name: "AsideTree",
    data() {
        return {
           
        };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};

</script>
<style>
.el-tree {
    margin-top: '50px',
}
</style>