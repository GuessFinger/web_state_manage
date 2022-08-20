async function wait(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

const productList = [
    {id: 1, title: 's20', price: 3999, inventory: 40},
    {id: 2, title: 's21', price: 4999, inventory: 10},
    {id: 3, title: 's22', price: 5999, inventory: 10}
];


export const getProductList = async () => {
    await wait(100);
    return productList;
}


export const bugProducts = async () => {
    await wait(100);
    return Math.random() > 0.5;
}


