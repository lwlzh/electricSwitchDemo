import axios from "axios"
const host = "http://localhost:8088"
export default{
    test(){
        console.log(host);
    },
    async closeSwtich(ip, port, address){//分闸
        const res = await axios({
            url:host+'/switch/api/v1/closeSwitch',
            headers:{
                'Content-Type': 'application/json'
            },
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return res.data;
    },
    async openSwitch(ip, port, address){//合闸
        const res = await axios({
            url:host+'/switch/api/v1/openSwitch',
            headers:{
                'Content-Type': 'application/json'
            },
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return res.data;
    },
    async queryOrdinarySwitchData(ip, port, address){//查询普通微断数据
        const res = await axios({
            url:host+'/switch/api/v1/queryOrdinarySwitchData',
            headers:{
                'Content-Type': 'application/json'
            },
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return res.data;
    },
    async queryThreePhaseSwitchData(ip, port, address){//查询三相微端数据
        const res = await axios({
            url:host+'/switch/api/v1/queryThreePhaseSwitchData',
            headers:{
                'Content-Type': 'application/json'
            },
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return res.data;
    },
    async querySwitchHistoryData( ip, port, address, startTime, endTime){//查询历史接口数据
        await axios({
            url:host+'/switch/api/v1/queryThreePhaseSwitchData',
            headers:{
                'Content-Type': 'application/json'
            },
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port,
                "startTime":startTime,
                "endTime":endTime
            })
        }).then(function(res){
               // data = res;
                return res.data;
            })
     //   return JSON.parse(obj.response);
        // return res.data;
    }
    


}