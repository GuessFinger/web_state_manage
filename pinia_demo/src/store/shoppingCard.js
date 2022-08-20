import {defineStore} from "pinia";
import {useProductStore} from "./product.js";



export const useShoppingCardStore = defineStore('shoppingCard', {
    state() {
        return {
            cartProducts: []
        }
    },
    getters: {
        totalPrice() {
            return this.cartProducts.reduce((pre, next) => {
                return pre += next.count * next.price;
            }, 0);
        }
    },
    actions: {
        addProductToCard(product) {
            // 查看是否有库存
            // 查看列表里面有没有里面商品
            // 有的话+1 没有的话push进去

            const {id, inventory} = product;
            if (inventory < 1) {
                return;
            }
            const cartItem = this.cartProducts.find(item => item.id === id);
            if (cartItem) {
                cartItem.count++;
            } else {
                const {id, title, price} = product;
                this.cartProducts.push({
                    id,
                    title,
                    price,
                    count: 1
                });
            }
            // 在里面定义哦
            const productStore = useProductStore();
            productStore.changeInventory(id);
        }
    }
})

