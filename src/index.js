//Information needed to display on cards
const data = [
    {
        id: 1,
        product_name: 'Blue Flower',
        price: '$80.00',
        rating: 4,
        image_source:'./assets/blue-flower.png'
    },
    {
        id: 2,
        product_name: 'Orange Flower',
        price: '$17.60',
        rating: 3,
        image_source:'./assets/orange-flower.png'
    },
    {
        id: 3,
        product_name: 'Pink Flower',
        price: '$40.00',
        rating: 5,
        image_source:'./assets/pink-flower.png'
    }
];

const buildProductCard = (product) => {

    //Create elements to build HTML card component
    const card_container = document.querySelector('.card-container');
    const card = document.createElement('div');
    const image = document.createElement('img');
    const card_body = document.createElement('div');
    const h4 = document.createElement('h4');
    const price = document.createElement('p');
    const rating = document.createElement('p');
    const star = document.createElement('img');
    //svg attributes need to be set before the loop of appending it begins
    star.setAttribute('src', './assets/star.svg');
    // star.setAttribute('style', 'width: 8px; opacity: 0.5');
    star.setAttribute('alt', 'star');

    // Append created elements into the DOM
    for (let i = 0; i < product.rating; i++) {
        star.setAttribute('style', 'width: 8px');
        rating.appendChild(star.cloneNode(true))
    }

    for (let i = 0; i < (5 - product.rating); i++) {
        star.setAttribute('style', 'width: 8px; opacity: 0.5');
        rating.appendChild(star.cloneNode(true))
    }
    card_container.append(card);
    card.append(image);
    card.append(card_body);
    card_body.append(h4);
    card_body.append(price);
    card_body.append(rating);


    //Set content and attributes
    rating.setAttribute('class', 'rating');
    card.setAttribute('class', 'card');
    image.setAttribute('class', 'image');
    image.setAttribute('src', product.image_source);
    image.setAttribute('alt', product.product_name);
    card_body.setAttribute('class', 'card-body');
    price.setAttribute('class', 'price');
    price.innerHTML = product.price;
    h4.innerHTML = product.product_name;
}


data.forEach(function(product){
    buildProductCard(product)
})







