<template>
  <div class='homeBox'>
    <el-container>
      <el-header>
        <HeaderAvatar></HeaderAvatar>
      </el-header>

      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <AsideTree>
          </AsideTree>
        </el-aside>
        <el-container>
          <el-main style="line-height: 30px;">            
            <MainContain></MainContain> 
          </el-main>
          <el-footer> </el-footer>
        </el-container>
      </el-container>
    </el-container>
    
  </div>

</template>

<script>
import HeaderAvatar from './HeaderAvatar.vue'
import AsideTree from './AsideTree.vue'
import MainContain from './MainContain.vue'

export default {
  name: "PageContainer",
  data() {
    return{

    }
  },
  components:{
    HeaderAvatar,
    AsideTree,
    MainContain,
  }

                                                                                                                                                                                                                                                          
};
</script>

<style scope>
.el-header{
    background-color: #1C2630;
    color: #333;
    text-align: center;
    line-height: 60px;
    width : 100%;
    height : 100%;
    
}

.homeBox{
    margin: 0;
    padding: 0;
    position : absolute;
    width : 100%;
    height : 100%;

}
   
.el-container{
    height:100%;
    background-color: #EAEAEA;
    border-radius:5px;
}

.el-aside {
    margin-right: 10px;
    margin-top: 10px;
    border-radius:5px;
    background-color: #F6F6F6;
    color: #333;
    text-align: center;
    line-height: 240px;   
    height: 100%;

}

.el-footer {
    margin-right: 10px;
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 60px;

}

.el-main {
    border-radius:5px;
    margin-right: 10px;
    margin-top: 10px;
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 160px;
}

 *{
    margin: 0;
    padding: 0;
    }

</style>