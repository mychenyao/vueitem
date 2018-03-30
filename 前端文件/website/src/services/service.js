// import axios from 'axios';
// import URL from '../api/urlApi.js';

export function DetialGetData(id){
    return new Promise((resolve,reject)=>{
        this.$http.get("http://app.test.dingdingkuaixiu.com/articleinfo/findlabelbusinessbyflabel?id="+id).then((res)=>{
            resolve(res.data.result.beans)
          })
    })
} ;
