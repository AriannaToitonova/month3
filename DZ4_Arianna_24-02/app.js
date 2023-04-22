const productsContainer = document.querySelector('.products-container');

const reqest = new XMLHttpRequest();
reqest.open('GET', 'data.json');
reqest.setRequestHeader("Content-type", "application/json");
reqest.onreadystatechange = function () {
    if (reqest.readyState === 4 && reqest.status === 200) {
        const data = JSON.parse(reqest.responseText);
        console.log(JSON.parse(reqest.responseText))

        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            const image = document.createElement('img');
            image.src = product.img;
            image.alt = product.title;

            const title = document.createElement('h3');
            title.textContent = product.title;

            const description = document.createElement('p');
            description.textContent = product.description;

            const price = document.createElement('div');
            price.classList.add('price');
            price.textContent = formatPrice(product.price);

            function formatPrice(price) {
                return price.toLocaleString('ru-RU') + ' ₽';
            }

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(price);

            productsContainer.appendChild(card);
        });
    }
};

reqest.send();
