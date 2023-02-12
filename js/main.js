let cart = {}
function init() {
    // вывод товара на главную страницу
    $.getJSON("goods.json", goodsOut )
}

function goodsOut(data){
    // let goods = JSON.parse(data)
    let out ='';
    for (let key in data){
        out += `<div class="cart">`;
        out += `<p class="name">${data[key].name}</p>`;
        out += `<img src='images/${data[key].img}' alt="none">`;
        out += `<div class="cost">${data[key].cost}</div>`;
        out += `<button class="add-to-cart" data-id='${key}'>Купить</button>`;
        out += `</div>`;
    }
    $('.goods-out').html(out)
    $('.add-to-cart').on('click', addToCart);
}

function addToCart(){
    // добавляем товар в корзину
    let id = $(this).attr('data-id');
    console.log(id)
    if (cart[id] == undefined){
        cart[id] = 1; // если в корзине нет товара - делаем равным 1
    }
    else {
        cart[id]++; // если такой товар есть - увеличиваю на единицу
    }
    showMiniCart();
    console.log(cart)
}

function showMiniCart(){
    // показываем мини корзину
    let out = "";
    for (let key in cart){
        out += key + ' --- ' + cart[key] + '<br>'
    }
    $('.mini-cart').html(out)
}

$(document).ready(function(){
    init();
})