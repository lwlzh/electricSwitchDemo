import axios from "axios"
const host = "http://localhost:8088/"
export default{
    test(){
        console.log(host);
    },
    async closeSwtich(address, ip, port){//分闸
        const obj = await axios({
            url:host+'/switch/api/v1/closeSwitch',
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return obj;
    },
    async openSwitch(address, ip, port){//合闸
        const obj = await axios({
            url:host+'/switch/api/v1/openSwitch',
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return obj;
    },
    async queryOrdinarySwitchData(address, ip, port){//查询普通微断数据
        const obj = await axios({
            url:host+'/switch/api/v1/queryOrdinarySwitchData',
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return obj;
    },
    async queryThreePhaseSwitchData(address, ip, port){//查询三相微端数据
        const obj = await axios({
            url:host+'/switch/api/v1/queryThreePhaseSwitchData',
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port
            })
        })
        return obj;
    },
    async querySwitchHistoryData(address, startTime, endTime, ip, port){//查询历史接口数据
        const obj = await axios({
            url:host+'/switch/api/v1/queryThreePhaseSwitchData',
            method:'post',
            data:JSON.stringify({
                "address":address,
                "ip":ip,
                "port":port,
                "startTime":startTime,
                "endTime":endTime
            })
        })
        return obj;
    }
    


}