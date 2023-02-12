function toggleCartStatus () {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const orederForm = document.querySelector('#order-form');

    if (cartWrapper.children.length > 0) {
        cartEmpty.classList.add('none');
        orederForm.classList.remove('none');
    } else {
        cartEmpty.classList.remove('none');
        orederForm.classList.add('none');

    }

}