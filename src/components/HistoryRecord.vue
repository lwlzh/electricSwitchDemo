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
                
            >
            </el-date-picker>
            <el-button class="btn1" @click="query">查询</el-button>
            <el-button class="btn2" @click="reset">重置</el-button>
         </div>
         <!-- 表格 -->
        <el-table :data="tableData" style="width: 100%">
            <!-- 表头 -->
            <el-table-column prop="ip" label="微断ip" width="180">
            </el-table-column>
            <el-table-column prop="address" label="微端地址" width="180">
            </el-table-column>
            <el-table-column prop="operaton" label="操作">
            </el-table-column>
            <el-table-column prop="operator" label="操作人员">
            </el-table-column>
            <el-table-column prop="remark" label="备注">
            </el-table-column>
             <el-table-column prop="time" label="时间">
            </el-table-column>
        </el-table>
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
            unlinkPanels:true,
            historyData:[],
            tableData: [{
            ip: '192.168.0.7',
            address: '01',
            operaton: '合闸',
            operator:'user',
            remark:'无',
            time:'2022-07-11'
          },
          {
            ip: '192.168.0.7',
            address: '02',
            operaton: '合闸',
            operator:'user',
            remark:'无',
            time:'2022-07-11'
          }
          ],
          total:0,
          pageSize:20
        }
    },
    methods:{
        query(){
            if(this.queryTime===''){
                alert("请输入日期！");
                return;
            }
            Net.querySwitchHistoryData('192.168.0.7','01','01',this.queryTime[0],this.queryTime[1])
                .then((res)=>{
                        //解析数据
                        console.log(res.data);
                        // this.historyData = res.data.data;
                        // 服务器未建立临时填充数据
                        this.historyData=   [{ip: '192.168.0.7',address: '02',operaton: '合闸',operator:'user',remark:'无',time:'2022-07-11'}];
                        for(var i = 1;i<=21;i++){
                            this.historyData.push({ip: '192.168.0.7',address: '02',operaton: '合闸',operator:'user',remark:'无',time:'2022-07-11'});
                        }
                        
                        this.total = this.historyData.length;
                        if(this.total<=this.pageSize){
                            this.tableData=this.historyData;
                        }else {
                            this.tableData=(this.historyData).slice(0,this.pageSize);
                        }
                    }
                ) 
                .catch((e)=>{
                    console.log(e)
                    alert('数据获取失败！')
                })
        },
        reset(){
            this.queryTime='';
            this.tableData=[];
            this.historyData=[];
            this.total=0;
        },
        currentChange(e){
            if(e*this.pageSize<=this.total){
                this.tableData=this.historyData.slice(this.pageSize*(e-1), this.pageSize*e);
            }else {
                this.tableData=this.historyData.slice(this.pageSize*(e-1));
            }
        }
    }
}
</script>

<style scoped>
    .demonstration {margin-right: 10px;}
    .btn1 {margin-left: 20px;}
</style>