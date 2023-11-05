const user = {id:484121, name: 'Mufassir Mahmud', job: 'developer'};
const stringified = JSON.stringify(user)
console.log(stringified);

const shop = {
    owner: 'Alia',
    address: {
    street:  'house building',
    city: 'Dhaka',
    country: 'Bangladesh'
    },
    products: ['laptop', 'phone', 'cup'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopStr = JSON.stringify(shop);
console.log(shopStr);
const shopObj = JSON.parse(shopStr)
console.log(shopObj);