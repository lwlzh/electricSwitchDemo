<template>
    <div>
        <h1>heihei</h1>    
        <button @click="changeData">asd</button>
    </div>
</template>

<script>

import Net from'../js/request.js'

export default {
    name:"HistoryRecord",
    data(){
        return{

        }
    },
    methods:{
        changeData(){
            Net.test();
        }
    }
}
</script>

<style>

</style>