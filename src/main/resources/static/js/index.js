var Main = {
    data() {
        return {
            activeNames: ['1']
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
}
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')