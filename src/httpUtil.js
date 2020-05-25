import axios from 'axios';

// 封装get请求
export function HttpGet(url){
    var result;
    axios.get(url).then(function (response) {
        var res = response.data;
        // console.log(res.code);
        // console.log(res.data);
        // console.log(res.msg);
        // return response.data.data;
        this.result = response.data.data;
    });
    console.log(result);
    return result
}