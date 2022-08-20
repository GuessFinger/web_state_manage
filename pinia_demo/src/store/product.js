import {defineStore} from 'pinia';
import {getProductList} from "../api/shop";


// 以use开头是官方建议的
export const useProductStore = defineStore('productList', {
    state() {
        return {
            all: []
        }
    },
    getters: {},
    actions: {
        async queryProductList() {
            const data = await getProductList();
            this.all = [...data];
        },
        changeInventory(id) {
            const cartItem = this.all.find(item => item.id === id);
            cartItem.inventory--;
        }

    }
});
