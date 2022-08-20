import {defineStore} from 'pinia';

// id:容器的id,必须唯一
export const productStore = defineStore('main', {
    // 数据
    state() {
        return {
            count: 100,
            foo: 'hello world'
        }
    },
    // 计算属性
    getters: {
        count10(state) {
            // 可以用state 也可以用this this的时候ts语法有问题
            console.log(state);
            return this.count + 10;
        }
    },
    // 修改状态的
    actions: {
        changeCount(value) {
            this.count += value;
        }
    }
});
