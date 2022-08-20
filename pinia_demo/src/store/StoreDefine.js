// 发现这个和vue3.0中 defineProps  defineEmits的前缀修饰词是一样的，也方便记忆
import {defineStore} from "pinia";
import {useProductStore} from "./product.js";

// 前面的为id需要保证唯一性，后面里面有3个属性，state必须是一个函数
// 属性名称的定义有一定的规范 use+xx+store 这样的方式
// 如果想要用其他的store的话，可以在state里面直接定义，不能直接在下面定义
// const x = useProductStore(); 像是没有激活就使用的意思
export const useDemoStore = defineStore('demoStore', {
    state() {
        return {
            message: 'hello world',
            productStore: useProductStore()
        }
    },
    getters: {
        reverseMessage(state) {
            console.log(this.productStore);
            // 当做计算属性用的，依赖的值发生变化，它的值也会发生改变
            // 这里可以用this或者直接用传递的参数state
            return this.message.split("").reverse().join('');
        }
    },
    actions: {
        changeMessage(value) {
            // value值是传递过来的值
            // 在actions里面是不区分异步请求和同步请求的
            this.message += '!!!';
        }
    }
});

