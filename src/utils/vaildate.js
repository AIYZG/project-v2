//用户名匹配
export function nameRule(rule,value,callback) {
    // 请输入4-10位含大小写或数字昵称 正则,f1调用正则插件
    let reg = /(^[a-zA-Z0-9]{4,10}$)/;
    if(value === '') {
        // callback为回调函数
        callback(new Error('请输入用户名'));
    }
    else if (!reg.test(value)) {
        // 校验不通过
        callback(new Error('请输入4-10位用户名'));
    }
    else {
        callback();
    }
}

//密码正则匹配
export function passRule(rule,value,callback) {
    //6-12位密码需要包含大小写字母和数字以及特殊符号
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    if(value === '') {
        //callback为回调函数
        callback(new Error('请输入密码'));
    }
    else if (!pass.test(value)) {
        //校验不通过
        callback(new Error('6-12位密码需要包含大小写字母和数字及特殊符号'));
    }
    else {
        callback();
    }
}