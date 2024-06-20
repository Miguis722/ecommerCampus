// Función para agregar productos a la lista de deseos
export async function addToWishlist(productInfo) {
    let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    const { id, title, image, category } = productInfo;

    // Verificar si el producto ya está en la lista de deseos
    const existingItem = wishlistItems.find(item => item.id === id);
    if (!existingItem) {
        // Si no está, agregarlo a la lista de deseos
        wishlistItems.push({ id, title, image, category });
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
        alert("Producto añadido a la lista de deseos.");
    } else {
        alert("El producto ya está en la lista de deseos.");
    }

    renderWishlist(); // Volver a renderizar la lista de deseos después de agregar un producto
}

// Función para renderizar los elementos de la lista de deseos
document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.getElementById("main__section__wishlist");

    function renderWishlist() {
        const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlistContainer.innerHTML = wishlistItems.map(item => /*HTML*/`
            <article class="details__product" data-id="${item.id}">
                <div class="product__custom">
                    <a href="#" class="remove-wishlist-button">
                        <div class="product__select">
                            <img src="../storage/img/heartWhite.svg">
                        </div>
                    </a>
                </div>
                <div class="product__imagen">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="product__description">
                    <h3>${item.title}</h3>
                    <small>${item.category}</small>
                </div>
                <div class="product__custom">
                    <a href="checkout.html">
                        <div class="product__select">
                            <img src="../storage/img/shopping-cart.svg">
                        </div>
                    </a>
                </div>
            </article>
        `).join('');
        attachRemoveEvent();
    }

    // Función para adjuntar eventos de eliminación a los botones de eliminar
    function attachRemoveEvent() {
        const removeButtons = document.querySelectorAll(".remove-wishlist-button");
        removeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const product = e.target.closest(".details__product");
                const productId = product.getAttribute("data-id");
                removeFromWishlist(productId);
            });
        });
    }

    // Función para eliminar un producto de la lista de deseos
    function removeFromWishlist(productId) {
        let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
        wishlistItems = wishlistItems.filter(item => item.id !== productId);
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
        renderWishlist(); // Volver a renderizar la lista de deseos después de eliminar un producto
    }

    // Renderizar inicialmente la lista de deseos al cargar la página
    renderWishlist();
});
