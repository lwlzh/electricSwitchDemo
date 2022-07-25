<template>
    <div>
        <!-- 日期 -->
        <div class="watch">
            <span class="demonstration">记录时间</span>
            <el-date-picker
                v-model="queryTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :unlink-panels = "unlinkPanels"
                :value-format="timeFormat"
                :picker-options="pickOptions"
            >
            </el-date-picker>
            <el-button class="btn1" @click="queryHistory">查询</el-button>
            <el-button class="btn2" @click="reset">重置</el-button>
        </div>
         <!-- 表格 -->
        <div class="table">
            <el-table 
            :data="tableData" 
            style="width: 100%" 
            :border="tableBorder" 
            :header-cell-style="{textAlign:'center',background:'#eef1f6',color:'#606266',borderColor:'rgba(0,0,0,0.5)'}" 
            :cell-style="{textAlign:'center',background:'rgba(246,246,246,0.5)',borderColor:'rgba(0,0,0,0.5)'}"
            >
                <!-- 表头 -->
                <el-table-column prop="ip" label="ip" width="180">
                </el-table-column>
                <el-table-column prop="address" label="微端地址" width="180">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
                </el-table-column>
                <el-table-column prop="operator" label="操作人员">
                </el-table-column>
                <el-table-column prop="remark" label="备注">
                </el-table-column>
                <el-table-column prop="time" label="时间">
                </el-table-column>
            </el-table>
        </div>
        <!-- 页码 -->
        <el-pagination
            background
            layout="prev, pager, next"
            @current-change="currentChange"
            :total="total"
            :page-size="pageSize"
            >
        </el-pagination>
    </div>
</template>

<script>

import Net from'../js/request.js'

export default {
    name:"HistoryRecord",
    data(){
        return{
            queryTime:'',
            timeFormat:"yyyy-MM-dd",
            unlinkPanels:false,
            tableData: [],
            nowPage:1,
            total:0,
            pageSize:20,
            tableBorder:true,
            pickOptions:{
                disabledDate:(time)=>{
                    var nowDate = new Date(Date.now())
                  //  console.log(nowDate.prototype.getHours())
                    nowDate.setHours(0);
                    nowDate.setMinutes(0);
                    nowDate.setSeconds(0);
                    nowDate.setMilliseconds(0);
                    return time.getTime() > nowDate || time.getTime()<nowDate - 89*24*3600*1000;
                }
            }
        }
    },
    methods:{
        queryHistory(){
            if(this.queryTime===''){
                alert("请输入日期！");
                return;
            }
            
            //接口测试代码，后期记得删除
           /* Net.closeSwtich('192.168.0.7','9999','01').then((res)=>{
                console.log(res,'close');
            }).catch(function(e){
                    console.log(e)
                })
            Net.openSwitch('192.168.0.7','9999','01').then((res)=>{
                console.log(res,'openSwitch');
            }).catch(function(e){
                    console.log(e)
                })
            Net.queryOrdinarySwitchData('192.168.0.7','9999','01').then((res)=>{
                console.log(res,'queryOrdinarySwitchData');
            }).catch(function(e){
                    console.log(e)
                })
            Net.queryThreePhaseSwitchData('192.168.0.7','9999','01').then((res)=>{
                console.log(res,'queryThreePhaseSwitchData');
            }).catch(function(e){
                    console.log(e)
                })
            */
            Net.querySwitchHistoryData('192.168.0.7','9999','01',this.queryTime[0],this.queryTime[1],this.nowPage,this.pageSize)
                .then((res)=>{
                        //解析数据
                       // console.log(res);
                        this.tableData = res.data.list;
                        this.total = res.data.total;
                        // console.log(this.tableData)
                    }
                )
                .catch(function(e){
                    console.log(e)
                }) 
                // 记得添加检查数据是否正确的警告
        },
        reset(){
            this.queryTime='';
            this.tableData=[];
            this.historyData=[];
            this.total=0;
        },
        currentChange(e){
            this.nowPage = e;
            this.queryHistory();
        }
    }
}
</script>

<style scoped>
    .watch .demonstration {margin-right: 10px;}
    .watch .btn1 {margin-left: 20px;}
    .watch {
        height:80px;
        text-align: center;
        line-height: 80px;
        
    }
    .table {
        margin-top: 20px;
    }
    .table .el-table {
        border: solid 1px black;
    }
    
    
</style>