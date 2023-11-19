var webstore = new Vue({
    el: '#app',
    data: {
        sitename: ' After school activities',
        products: products,
        searchQuery: '',
        selectedCategory: '',
        categories: ['price', 'location', 'subject', 'availablespace'],
        isAscending: true,
        cart: [],
        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            phone: '',
            state: '',
            method: 'Home',
            gift: 'you are 18 and above',
            sendGift: 'you are 18 and above',
            dontSendGift: 'your not 18'
        },
        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada'
        },
    },
    methods: {
        addToCart(product) {
            this.cart.push(product);
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Order submitted!')
        },
        removeFromCart(index) {
            this.cart.splice(index, 1);
        },
        canAddToCart(product) {
            return product.availablespace > this.cartCount(product.id);
        },
        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === id) {
                    count++;
                }
            }
            return count;
        }
    },
    computed: {
        cartItemCount() {
            return this.cart.length;
        },
        sortedProducts() {

            const field = this.selectedCategory || 'price'

            const productsArray = this.products.filter(p => p.title.includes(this.searchQuery));

            function compare(a, b) {

                if (this.isAscending) {
                    return (a[field] - b[field])
                }
                return (b[field] - a[field])
            }
            return productsArray.sort(compare);
        }
    },
});