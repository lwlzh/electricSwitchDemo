<template>
    <div>
        <el-tabs tab-position="top" style="height: 50px;">
            <el-tab-pane label="设备状态">
                <DeviceStatues></DeviceStatues>
            </el-tab-pane>
            <el-tab-pane label="设备信息">
                <el-collapse>
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
            <el-tab-pane label="操作记录">
                <HistoryRecord></HistoryRecord>
            </el-tab-pane>
            <el-tab-pane label="***"></el-tab-pane>

        </el-tabs>


    </div>
</template>

<script>
import HistoryRecord from './HistoryRecord.vue'
import DeviceStatues from './DeviceStatues.vue'

export default {
    name: 'MainContain',
    data() {
        return {

            value1: false,
            value2: false,
            value3: true,
            activeNames: ['1']
        }
    },
    components: {
        HistoryRecord,DeviceStatues
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
}
</script>

<style scoped>

.clearfix:after {
    clear: both
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