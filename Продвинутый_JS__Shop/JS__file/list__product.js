const img = "img";
const main = "main";
const goodListCtg = "good-list";

class GoodsList {
  constructor(container = ".goods-list") {
    this.container = container;
    this.goods = [];
    this._fetchGoods()
    .then((data) => {
      this.goods = data.contents;
      this.render();
    });
;
    this.render();
    this.sumCtg();
  }
  _fetchGoods() {
  //   this.goods = [
  //     { title: "Shirt", price: 150, id: 1, image: "BeardManitemCard.svg" },
  //     { title: "Socks", price: 50, id: 2, image: "BeardManitemCard.svg" },
  //     { title: "Jacket", price: 350, id: 3, image: "BeardManitemCard.svg" },
  //     { title: "Shoes", price: 250, id: 4, image: "BeardManitemCard.svg" },
  //     { title: "Shoes", price: 250, id: 5, image: "BeardManitemCard.svg" },
  //     { title: "Shoes", price: 1250, id: 6, image: "BeardManitemCard.svg" },
  //   ];
    return fetch(`${API}/getBasket.json`).then(result=>result.json())
  .catch(error=>{console.log(error);})
}

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new GoodsItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
    }
  }
  sumCtg(){
    let sum = 0;
    for (let product of this.goods) {
      sum += product.price;
    }
    console.log(sum);
  }
}

class GoodsItem {
  constructor(product) {
    (this.id = product.id_product),
    (this.title = product.product_name),
    (this.price = product.price)
  }
  render() {
    return `
    <div class="goods-item">
        <div>
          <img src="./img/main/good-list/BeardManitemCard.svg" alt="BeardManitemCard">
        </div>
        <div class="goods-item-text">
            <h3>${this.title}</h3>
            <p>${this.price} руб.</p>
            <button class="cart-button data-id${this.id}">купить</button>
        </div>
    </div>`;
  }
}
let list = new GoodsList();

// class Car{
//   constructor(title,price){
//     this.title = title;
//     this.price = price;
//   }
// }
// class Factory{
//   constructor(titleFactory){
//     this.titleFactory = titleFactory;
//   }
//   createCar(title){
//     console.log(`Сборка авто ${title} на заводе ${this.titleFactory} началась`);
//     const car = new Car(title,parseInt(Math.random() * 4000 + 1000));
//     return car;
//   }
// }

// class Order{
//   constructor(countCars,factory,models,diller){
//     this.countCars = countCars;
//     this.factory = factory;
//     this.models = models;
//     this.diller = diller;
//     this.cars =[];//фура для загрузки авто
//     this.sumOrder = 0;//сумма заказа машин
//     this.initOrder();//в этом методе заполним массив cars
//     this.showInfo();
//   }

//   initOrder(){
//     for(let i =0;i<this.countCars;i++){
//       this.cars.push(
//         this.factory.createCar(this.models[parseInt(Math.random() *
//         this.models.length)]));
//       this.sumOrder += this.cars[i].price;
//     }
//   }

//   showInfo(){
//     this.cars.forEach(car=>console.log(`Автомобиль ${car.title} стоит ${car.price}`));
//     console.log(`Общая сумма всех авто составляет ${this.sumOrder}`);

//   }
// }
// class Diller{
//   constructor(titleDiller,countYears){
//     this.titleDiller = titleDiller;
//     this.countYears = countYears;
//   }
// }
// class Main{
//   static run(){
//     const COUNT = parseInt(Math.random() * 20 + 10);
//     const MODELS = ['Ларгус','Веста','Гранта'];
//     const FACTORY = new Factory('ВАЗ');
//     const DILLER = new Diller("Элвис", 20);
//     const ORDER = new Order(COUNT, FACTORY, MODELS, DILLER);
//   }
// }

// Main.run();
