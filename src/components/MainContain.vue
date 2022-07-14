<template>
    <div>
        <el-tabs tab-position="top" style="height: 50px;">
            <el-tab-pane label="设备状态">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>#微断1</span>
                        <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                    </div>
                    <div>
                        <el-image style=" height: 100px" :src="pictureClose"></el-image>
                    </div>
                </el-card>

                <el-card class="box-card">
                    <div style="text-align: left; font-weight:bold">
                        <ul class="parameter" style="padding-left: 10px; padding-top: 0; ">
                            <li>有功功率 : 12w</li>
                            <li>无功功率 : 6w</li>
                            <li>运行电流 : 2A</li>
                            <li>触头温度 : 20</li>
                            <li>视在功率 : 18W</li>
                            <li>泄露电流 : 0.3A</li>
                            <li>运行电压 : 220V</li>
                        </ul>
                    </div>
                </el-card>

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>#微断2</span>
                        <el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                    </div>
                    <div>
                        <el-image style=" height: 100px" :src="pictureClose"></el-image>
                    </div>
                </el-card>

                <el-card class="box-card">
                    <div style="text-align: left; font-weight:bold">
                        <ul class="parameter" style="padding-left: 10px; padding-top: 0; ">
                            <li>有功功率 : 12w</li>
                            <li>无功功率 : 6w</li>
                            <li>运行电流 : 2A</li>
                            <li>触头温度 : 20</li>
                            <li>视在功率 : 18W</li>
                            <li>泄露电流 : 0.3A</li>
                            <li>运行电压 : 220V</li>
                        </ul>
                    </div>
                </el-card>

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>#微断3</span>
                        <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949">
                        </el-switch>
                    </div>
                    <div>
                        <el-image style=" height: 100px" :src="pictureOpen"></el-image>
                    </div>
                </el-card>

                <el-card class="box-card">
                    <div style="text-align: left; font-weight:bold">
                        <ul class="parameter" style="padding-left: 10px; padding-top: 0; ">
                            <li>有功功率 : 12w</li>
                            <li>无功功率 : 6w</li>
                            <li>运行电流 : 2A</li>
                            <li>触头温度 : 20</li>
                            <li>视在功率 : 18W</li>
                            <li>泄露电流 : 0.3A</li>
                            <li>运行电压 : 220V</li>
                        </ul>
                    </div>
                </el-card>

            </el-tab-pane>
            <el-tab-pane label="设备信息">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="微断1" name="1">
                        <div>这是微断1的设备信息</div>
                    </el-collapse-item>
                    <el-collapse-item title="微断2" name="2">
                        <div>这是微断2的设备信息</div>
                    </el-collapse-item>
                    <el-collapse-item title="微断3" name="3">
                        <div>这是微断3的设备信息</div>
                    </el-collapse-item>
                    <el-collapse-item title="微断4" name="4">
                        <div>这是微断4的设备信息</div>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="设备记录"></el-tab-pane>
            <el-tab-pane label="***"></el-tab-pane>

        </el-tabs>


    </div>
</template>

<script>
export default {
    name: 'MainContain',
    data() {
        return {
            pictureClose: require('./分闸.png'),
            pictureOpen: require('./微断.png'),
            value1: false,
            value2: false,
            value3: true,
        }
    }
}
</script>

<style scoped>
/* .LineInformationContent {
    width: 265x;
    height: 100%;
    background: #F7F8FA;
    border: 1px solid #E5E9EE;
    border-radius: 2px;
    margin-right: 18px;
    margin-bottom: 18px;
    transition: all .5s;
}
 */
.box-card {
    border-radius: 2px;
    margin-right: 18px;
    margin-bottom: 18px;
    transition: all .5s;
    width: 280px;
    height: 240px;
    float: left;
    font-size: smaller;
}

.clearfix:after {
    clear: both
}

.el-image {
    object-fit: none;
}

.parameter {
    margin-left: 0ch;
    list-style: none;
    font-size: 9px;
    line-height: 30px;
}

.li {
    padding-left: 0;
}
</style>