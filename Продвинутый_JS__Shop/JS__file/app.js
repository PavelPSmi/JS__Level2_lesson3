// const renderProduct = (card) => `
//                 <div class="goods-item">
//                     <div>
//                         <img src="./${img}/${main}/${goodListCtg}/${card.image}" alt="BeardManitemCard">
//                     </div>
//                     <div class="goods-item-text">
//                         <h3>${card.title}</h3>
//                         <p>${card.price} руб.</p>
//                         <button class="cart-button data-id${card.id}">купить</button>
//                     </div>
//                 </div>
// `;

const renderPage = (list) => {
//   const productList = list.map((card) => renderProduct(card)).join('');
  document.querySelector(".goods-list").innerHTML = 
  (list.map((card) => renderProduct(card)).join(''));
};
renderPage();

//элементы array по умолчанию разделены запятой. join() позволяет поставить между элементами массива любой другой элемент, какой мы ему передадим