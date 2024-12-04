document.addEventListener("DOMContentLoaded", () => {
    // Получение ссылок на элементы
    const priceRadio = document.getElementById("price");
    const titleRadio = document.getElementById("title");
    const productsList = document.getElementById("products-list");

    // Данные о продуктах (можно заменить запросом к API)
    const products = [
        { title: "Яркое чудо", price: 15550, description: "Букет из гортензий, пионов и асклепий", img: "1.jpg" },
        { title: "Момент мечты", price: 6890, description: "Букет из роз", img: "2.jpg" },
        { title: "Влюблённость", price: 3200, description: "Букет из альстромерий", img: "3.jpg" },
        { title: "Нежное послание", price: 4200, description: "Букет из хризантем", img: "4.jpg" },
        { title: "Маленькая радость", price: 3800, description: "Букет из пионов", img: "5.jpeg" },
        { title: "Светлое вдохновение", price: 2300, description: "Букет из гипсофил", img: "6.jpg" },
        { title: "Лилу", price: 8700, description: "Букет из лилий", img: "7.jpg" },
        { title: "Полевое чудо", price: 3750, description: "Букет из ромашек", img: "8.jpg" },
        { title: "Миссис", price: 2660, description: "Букет из ирисов", img: "9.jpg" }
    ];

    // Функция рендера продуктов
    function renderProducts(productsArray) {
        productsList.innerHTML = ''; // Очищаем список
        productsArray.forEach(product => {
            productsList.innerHTML += `
                <li class="card product-card">
                    <img src="${product.img}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}. Цена: ${product.price} р.</p>
                        <input type="number" class="form-control mb-2" min="0" placeholder="0">
                        <button class="btn btn-primary">Заказать</button>
                    </div>
                </li>
            `;
        });
    }

    // Функция сортировки
    function sort() {
        let sortedProducts = [...products]; // Копируем массив для сортировки
        if (priceRadio.checked) {
            sortedProducts.sort((a, b) => a.price - b.price); // Сортировка по цене
        } else if (titleRadio.checked) {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title, 'ru')); // Сортировка по названию
        }
        renderProducts(sortedProducts); // Отображаем отсортированные продукты
    }

    // Слушатели событий для сортировки
    priceRadio.addEventListener("change", sort);
    titleRadio.addEventListener("change", sort);

    // Рендер начального состояния
    sort();
});
