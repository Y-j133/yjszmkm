import axios from 'axios'

var URL=axios.create({
    baseURL:'http://localhost:3000'
})

// 登录接口
export function login(acc,pwd){
   return URL.post('/login',{acc,pwd})
}
//······················································商品相关接口··············································
//商品添加

//······················································账号相关接口··············································

// 账号添加
export function addaccount(acc,pwd,userGroup){
    return URL.post('/addaccount',{acc,pwd,userGroup})
}


//······················································token··············································
// 登录验证
export function token(token){
    return URL.get('/token',{params:{token}})
}