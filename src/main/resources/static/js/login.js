//@ sourceURL=login.js

var app = new Vue({
    el: '#app',
    data() {
        return {
            logmsg: '用户名或密码错误',
            regmsg: '两次输入密码不一致!',
            nullmsg: '密码不能为空',
            logmsgFlag: false,
            regmsgFlag: false,
            regnullmsgFlag: false,
            logPageFlag: true,
            regPageFlag: false,
            form: {
                userName: '',
                password: '',
                checkpass: ''
            }
        }
    },
    // 在 `methods` 对象中定义方法
    methods: {
        onSubmit() {
            if(this.form.password !== this.form.checkpass) {
                this.regmsgFlag = true;
                this.regnullmsgFlag = false;
            }
            else if(this.form.password == '') {
                this.regmsgFlag = false;
                this.regnullmsgFlag = true;
            }
            else {
                this.regmsgFlag = false;
                axios.post('/createuser', this.form);
                this.logPageFlag = true;
                this.regPageFlag = false;
            }
        },
        cancel() {
            this.logPageFlag = true;
            this.regPageFlag = false;
        },
        register() {
            this.regmsgFlag = false;
            this.logPageFlag = false;
            this.regPageFlag = true;
        }
    }
});