document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector('.cart img');
    let cartCount = 0;
  

    const countSpan = document.createElement('span');
    countSpan.classList.add('cart-count');
    countSpan.textContent = cartCount;
    cartIcon.parentNode.appendChild(countSpan);
  
    const updateCartCount = (newCount) => {
        cartCount += newCount;
        document.querySelector('.cart-count').textContent = cartCount;
    };
  
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const quantity = parseInt(this.previousElementSibling.querySelector('.quantity').textContent, 10);
            updateCartCount(quantity);
        });
    });
  
    document.querySelectorAll('.increase-btn').forEach(button => {
        button.addEventListener('click', function() {
            const quantitySpan = this.previousElementSibling;
            let quantity = parseInt(quantitySpan.textContent, 10);
            quantity++;
            quantitySpan.textContent = quantity;
        });
    });
  
    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', function() {
            const quantitySpan = this.nextElementSibling;
            let quantity = parseInt(quantitySpan.textContent, 10);
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
            }
        });
    });
  });
  
