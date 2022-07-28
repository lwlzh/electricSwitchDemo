<template>

    <el-collapse v-model="activeNames" @change.once="handleChange">
        <el-collapse-item title="#微断1" name="1" @click.native="setAddress('1')">
            <div text-align=left>
                <el-card class="box-select">
                    <el-radio-group v-model="radio1" @change="query">
                        <el-radio :label="1" >单项电闸</el-radio>
                        <el-radio :label="2" >三项电闸</el-radio>
                    </el-radio-group>
                </el-card>
            </div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>#微断1</span>
                    <span class="button">
                        <el-switch 
                        v-model="value1" 
                        active-color="#13ce66" 
                        inactive-color="#ff4949" 
                        :active-value="11"
                        :inactive-value='10'
                        @change="swichChange(1)"
                        >
                        </el-switch>
                    </span>
                </div>
                <div>
                    <el-image style=" height: 100px" :src="pictureClose"></el-image>
                </div>
            </el-card>
            <el-card class="box-content">
                <div style="text-align: left; font-weight:bold">
                    <el-descriptions>
                        <el-descriptions-item label="有功功率">{{ StandParamres[0].leakageCurrentL }}</el-descriptions-item>
                        <el-descriptions-item label="无功功率">{{ StandParamres[0].nphaseTerminalTemperature }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行电流">{{ StandParamres[0].aphaseTerminalTemperature }}
                        </el-descriptions-item>
                        <el-descriptions-item label="触头温度">{{ StandParamres[0].aphaseEffectiveVoltageU }}
                        </el-descriptions-item>
                        <el-descriptions-item label="视在功率">{{ StandParamres[0].aphaseEffectiveCurrentI }}
                        </el-descriptions-item>
                        <el-descriptions-item label="视在功率">{{ StandParamres[0].aphaseActivePowerP }}
                        </el-descriptions-item>
                        <el-descriptions-item label="泄露电流">{{ StandParamres[0].aphaseReactivePowerQ }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行电压">{{ StandParamres[0].aphaseApparentPowerS }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </el-card>
        </el-collapse-item>

        <el-collapse-item title="#微断2" name="2" @click.native="setAddress('2')">
            <el-card class="box-select">
                <el-radio-group v-model="radio2" @change="query">
                    <el-radio :label="1">单项电闸</el-radio>
                    <el-radio :label="2" >三项电闸</el-radio>

                </el-radio-group>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>#微断2</span>
                    <span class="button">
                         <el-switch 
                        v-model="value2" 
                        active-color="#13ce66" 
                        inactive-color="#ff4949" 
                        :active-value="21"
                        :inactive-value='20'
                        @change="swichChange(2)"
                        >
                        </el-switch>
                    </span>
                </div>
                <div>
                    <el-image style=" height: 100px" :src="pictureClose"></el-image>
                </div>
            </el-card>
            <el-card class="box-content">
                <div style="text-align: left; font-weight:bold">
                    <el-descriptions>
                        <el-descriptions-item label="有功功率">{{ StandParamres[0].leakageCurrentL }}</el-descriptions-item>
                        <el-descriptions-item label="无功功率">{{ StandParamres[0].nphaseTerminalTemperature }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行电流">{{ StandParamres[0].aphaseTerminalTemperature }}
                        </el-descriptions-item>
                        <el-descriptions-item label="触头温度">{{ StandParamres[0].aphaseEffectiveVoltageU }}
                        </el-descriptions-item>
                        <el-descriptions-item label="视在功率">{{ StandParamres[0].aphaseEffectiveCurrentI }}
                        </el-descriptions-item>
                        <el-descriptions-item label="视在功率">{{ StandParamres[0].aphaseActivePowerP }}
                        </el-descriptions-item>
                        <el-descriptions-item label="泄露电流">{{ StandParamres[0].aphaseReactivePowerQ }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行电压">{{ StandParamres[0].aphaseApparentPowerS }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </el-card>
        </el-collapse-item>

        <el-collapse-item title="#微断3" name="3" @click.native="setAddress('3')">
            <el-card class="box-select">
                <el-radio-group v-model="radio3" @change="query">
                    <el-radio :label="1">单项电闸</el-radio>
                    <el-radio :label="2">三项电闸</el-radio>
                </el-radio-group>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>微断3</span>
                    <span class="button" >
                         <el-switch 
                        v-model="value3" 
                        active-color="#13ce66" 
                        inactive-color="#ff4949" 
                        :active-value="31"
                        :inactive-value='30'
                        @change="swichChange(3)"
                        >
                        </el-switch>
                    </span>
                </div>
                <div>
                    <el-image style=" height: 100px" :src="pictureOpen"></el-image>
                </div>
            </el-card>

            <el-card class="box-content">
                <div style="text-align: left; font-weight:bold">
                    <el-descriptions>
                        <el-descriptions-item label="有功功率">{{ StandParamres[0].leakageCurrentL }}</el-descriptions-item>
                        <el-descriptions-item label="无功功率">{{ StandParamres[0].nphaseTerminalTemperature }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行电流">{{ StandParamres[0].aphaseTerminalTemperature }}
                        </el-descriptions-item>
                        <el-descriptions-item label="触头温度">{{ StandParamres[0].aphaseEffectiveVoltageU }}
                        </el-descriptions-item>
                        <el-descriptions-item label="视在功率">{{ StandParamres[0].aphaseEffectiveCurrentI }}
                        </el-descriptions-item>
                        <el-descriptions-item label="视在功率">{{ StandParamres[0].aphaseActivePowerP }}
                        </el-descriptions-item>
                        <el-descriptions-item label="泄露电流">{{ StandParamres[0].aphaseReactivePowerQ }}
                        </el-descriptions-item>
                        <el-descriptions-item label="运行电压">{{ StandParamres[0].aphaseApparentPowerS }}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </el-card>
        </el-collapse-item>


    </el-collapse>

</template>

<script>
import Net from '../js/request.js'

export default {
    name: "DeviceStatues",
    data() {
        return {
            display: true,
// 用于单个查询的  现直接暴力轮询各个点击过的radio
            // address: "",
            pictureClose: require('./分闸.png'),
            pictureOpen: require('./微断.png'),
            value1: '',
            value2: false,
            value3: true,
            // 默认展开
            activeNames: [''],
            // 默认单选框
            Radioid: '',
            radio:  '',
            radio1: '',
            radio2: '',
            radio3: '',
            StandParamres: [
                {
                    address: "01",
                    leakageCurrentL: "1",
                    nphaseTerminalTemperature: "2",
                    aphaseTerminalTemperature: "3",
                    aphaseEffectiveVoltageU: "4",
                    aphaseEffectiveCurrentI: "5",
                    aphaseActivePowerP: "6",
                    aphaseReactivePowerQ: "7",
                    aphaseApparentPowerS: "8",
                    aphaseActiveQuantityElectricityH: "9",
                    aphaseActiveQuantityElectricityL: "10"
                }
            ]
            ,
            ThreeParamres: [
                { }],
            StandParam: [""],
            ThreeParam: [""]
        }
    },
    methods: {
        handleChange() {
            alert("请确认电闸");
        },
        setAddress(name) {
            this.address = name;
            //    console.log(this.address)
        },
        swichChange(address){
            console.log(this.value1)
            console.log(this.value2)
            console.log(address)
            if(this.value1 === 11 && address === 1){
                this.openSwich(address)
            }else if(this.value1 === 10 && address === 1){
                this.closeSwich(address)
            }else{
                console.log("未触发接口")
            }

            if(this.value2 === 21 && address === 2){
                this.openSwich(address)
            }else if(this.value2 === 20 && address === 2){
                this.closeSwich(address)
            }else{
                console.log("未触发接口")
            }

            if(this.value3 === 31 && address === 3){
                this.openSwich(address)
            }else if(this.value3 === 30 && address === 3){
                this.closeSwich(address)
            }else{
                console.log("未触发接口")
            }
        },
        query() {
            if (this.radio1 === 1) {
                alert("微断地址1"+' '+this.radio+"号电闸"+"正在请求单项电闸请稍等");
                Net.queryOrdinarySwitchData('192.168.0.7', '8888', '1')
                    .then((res) => {
                        console.log(res.data);
                        console.log("这里是 单项电闸信息")
                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('数据获取失败！')
                    })
            }
            else if (this.radio1 === 2) {
                alert("微断地址1"+' '+this.radio+"号电闸"+"正在请求三项电闸请稍等");
                Net.queryThreePhaseSwitchData('192.168.0.7', '8888','1')
                    .then((res) => {
                        //解析数据
                        console.log(res.data);

                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('数据获取失败！')
                    })

            } else {
                 console.log("1号请求出现空请求")
            }

            if (this.radio2 === 1) {
                alert("微断地址2"+' '+this.radio+"号电闸"+"正在请求单项电闸请稍等");
                Net.queryOrdinarySwitchData('192.168.0.7', '8888', '2')
                    .then((res) => {
                        console.log(res.data);
                        console.log("这里是 单项电闸信息")
                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('数据获取失败！')
                    })
            }
            else if (this.radio2 === 2) {
                alert("微断地址2"+' '+this.radio+"号电闸"+"正在请求三项电闸请稍等");
                Net.queryThreePhaseSwitchData('192.168.0.7', '8888','2')
                    .then((res) => {
                        //解析数据
                        console.log(res.data);

                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('数据获取失败！')
                    })

            } else {
                console.log("2号请求出现空请求")
            }


            if (this.radio3 === 1) {
                alert("微断3"+' '+this.radio+"号电闸"+"正在请求单项电闸请稍等");
                Net.queryOrdinarySwitchData('192.168.0.7', '8888', '3')
                    .then((res) => {
                        console.log(res.data);
                        console.log("这里是 单项电闸信息")
                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('数据获取失败！')
                    })
            }
            else if (this.radio3 === 2) {
                alert("微断3"+' '+this.radio+"号电闸"+"正在请求三项电闸请稍等");
                Net.queryThreePhaseSwitchData('192.168.0.7', '8888','3')
                    .then((res) => {
                        //解析数据
                        console.log(res.data);

                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('数据获取失败！')
                    })

            } else {
                console.log("3号请求出现空请求")
            }
        },
        openSwich(address){
            
            Net.closeSwtich('192.168.0.7', '8888', address)
                    .then((res) => {
                        console.log(res.data);
                        console.log("开闸")
                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('开闸出现异常')
                    })
        },
        closeSwich(address){
            Net.closeSwtich('192.168.0.7', '8888', address)
                    .then((res) => {
                        console.log(res.data);
                        console.log("合闸")
                    }
                    )
                    .catch((e) => {
                        console.log(e)
                        alert('合闸出现异常')
                    })
        },
        
    },
    computed: {
    },
    // 暂时取消轮询方便开发
    // mounted() {
    //     this.query();
    //     this.timer = window.setInterval(() => {
    //         setTimeout(() => {
    //             this.query()
    //         },0)
    //     },30000)
    // },
    destroyed() {
        window.clearInterval(this.timer)
    }


}   
</script>

<style scoped>
.box-card {
    border-radius: 2px;
    margin-bottom: 18px;
    margin-right: 10px;
    transition: all .5s;
    width: 200px;
    height: 200px;
    float: left;
    font-size: smaller;
}

.box-content {
    margin-right: 8px;
    height: 200px;
}

.box-select {
    margin-right: 8px;

}

.button {
    float: right;
}

.el-image {
    object-fit: none;
}

.radio_inline {
    display: inline-block;
    width: 35%;
}

.radio_inline label {

    width: 5%;
    padding-left: 35px;
    padding-right: 35px;
}

.radio_inline input[type=radio] {

    width: 5%;
    /* right: auto; */
}
</style>