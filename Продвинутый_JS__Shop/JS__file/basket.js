const API ="https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
class Basket{
    constructor(container = '.basket'){
      this.container = container;
      this.goods =[];
      this._clickBasket();
      this.addProduct()
        .then(data=>{this.goods = data.contents;
          this.render()});
    }
    addProduct(){
      return fetch(`${API}/getBasket.json`).then(result=>result.json())
      .catch(error=>{console.log(error);})
    }
     _clickBasket() {
      document.querySelector('.basket__btn_a').addEventListener('click',()=>{
        document.querySelector(this.container).classList.toggle('active')
      });
    }
    render(){
      const block = document.querySelector(this.container);
      for (let product of this.goods){
        const productObj = new ProductBasket();
        block.insertAdjacentHTML('beforeend', productObj.render(product));
      }
    }
  
}
let test = new Basket()

class ProductBasket {
  render(product) {
    return `
      <div>${product.id_product}</div>
      <div>${product.product_name}</div>
      <div>${product.price}руб.</div>
`;
  }
}

