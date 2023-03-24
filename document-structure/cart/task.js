const cartList = document.querySelector('.cart__products');
const controls = Array.from(document.querySelectorAll('.product__quantity-control'));
let arrProductValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const arrProductBasket = Array.from(document.querySelectorAll('.product__add'))

function controlProduct() {
	let index = this.closest('.product').dataset.id - 1;
	let valueNew = Number(arrProductValue[index].innerText);
	if (this.classList.contains('product__quantity-control_dec')) {
		if (valueNew == 1) {
			return false;
		} else {
			valueNew -= 1;
			arrProductValue[index].innerText = valueNew;
		}
	} else if (this.classList.contains('product__quantity-control_inc')) {
		valueNew += 1;
		arrProductValue[index].innerText = valueNew;
	}
}

function addInBasket() {
	let product = this.closest('.product');
	let productClone = product.cloneNode(false);
	productClone.className = 'cart__product';
	let image = product.childNodes[3].cloneNode(true);
	image.className = 'cart__product-image';
	productClone.appendChild(image);
	let count = document.createElement('div');
	count.className = 'cart__product-count';
	let countProduct = product.querySelector('.product__quantity-value').innerText
	count.innerText = countProduct;
	productClone.appendChild(count);

	let elements = Array.from(cartList.querySelectorAll('.cart__product'));
	let element = elements.find(item => item.dataset.id === productClone.dataset.id)
	if (element) {
		element.childNodes[1].innerText = Number(element.childNodes[1].innerText) + Number(countProduct);
	} else {
		cartList.appendChild(productClone);
	}
}

controls.forEach((control) => control.addEventListener('click', controlProduct));
arrProductBasket.forEach((button) => button.addEventListener('click', addInBasket));