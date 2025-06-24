class Component {
    constructor(renderHookId) {
        this.hook = renderHookId;
    }
    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if(cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value)
            }
        }
        document.getElementById(this.hook).append(rootElement)
        return rootElement
    }
}

class Product {
    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductList extends Component {
    products = [
        new Product('Nintendo OLED Lite', 'https://media.wired.com/photos/615cb6377aac0c0d8e7cfb3f/191:100/w_1280,c_limit/Gear-Nintendo-Switch-OLED.jpg','A Nintendo Switch in dollars',434.99),
        new Product('XBOX Series X','https://compass-ssl.surface.com/assets/9e/cc/9eccdb3c-e965-4ab7-97d2-651c5f5a7fbe.jpg?n=Consoles-Hub_Content-Placement_Hub-SX_788x444.jpg','A XBOX Series X in dollars',599.99),
        new Product('PS5', 'https://images.mktw.net/im-581834?width=700&height=466', 'A PS5 in dollars', 699.99),
        new Product('PS5 skin', 'https://cdn.shopify.com/s/files/1/0409/7245/products/26ps5CD_400x.png?v=1646999117', 'A PS5 skin in dollars', 29.99)
    ];


    constructor () {
        super('app')
    }

    render() {
        const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
        for (const prod of this.products) {
            const prodCreater = new ProductItem(prod, 'prod-list')
            const prodEl = prodCreater.render()
        }
    }
}

class ProductItem extends Component{
    constructor(product, renderHookId) {
        super(renderHookId)
        this.product = product
        
    }

    addToCart() {
        App.addProductToCart(this.product)
    }

    render() {
        const prod = this.product
        const prodEl = this.createRootElement('li', 'product-item')
        prodEl.innerHTML = `
                <div>
                    <img src='${prod.imageUrl} alt='${prod.title} >
                    <div class='product-item__content'>
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to cart</button>
                    </div>
                </div>
        `
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this))
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue
    }
}

class ShoppingCart extends Component {
    items = []
    oldPrice = 0

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        this.items.push(product);
        this.oldPrice = Number((this.oldPrice + product.price).toFixed(2))
        this.totalOutput.innerHTML = `<h2>Total: \$${this.oldPrice}</h2>`

    }

    orderProducts() {
        console.log('Ordering...');
        console.log(this.items)
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');

        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>  
            <button style='position: absolute; right: 230px'>View Cart!</button>
            <button style='position: absolute; right: 50px' id='order'>Order Now!</button>
        `
        this.totalOutput = cartEl.querySelector('h2')
        const orderButton = document.getElementById('order')
        orderButton.addEventListener('click', () => this.orderProducts())
        
        return cartEl
    }
}

class Shop {
    render() {
        const renderHook = document.getElementById('app');
        this.cart = new ShoppingCart('app')
        let cartEl = this.cart.render()
        const productList = new ProductList();
        const prodListEl = productList.render();
        renderHook.prepend(cartEl);
        renderHook.append(prodListEl)
    }
}

class App {
    static init() {
        const shop = new Shop()
        shop.render()
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product)
    }
}

App.init();