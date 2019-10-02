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
const blueFlower = data[0];

//Elements needed to construct HTML component
const body = document.querySelector('body');
const card_container = document.createElement('div');
const card = document.createElement('div');
const image = document.createElement('img');
const card_body = document.createElement('div');
const h4 = document.createElement('h4');
const price = document.createElement('p');
const rating = document.createElement('p');
const star = document.createElement('img');
//insert information for stars needs to be placed before the loop
star.setAttribute('src', './assets/star.svg');
star.setAttribute('style', 'width: 8px');
star.setAttribute('alt', 'star');


for (let i = 0; i < blueFlower.rating; i++) {
    rating.appendChild(star.cloneNode(true))
}
body.append(card_container);
card_container.append(card);
card.append(image);
card.append(card_body);
card_body.append(h4);
card_body.append(price);
card_body.append(rating);


//Add information
rating.setAttribute('class', 'rating');

card_container.setAttribute('class', 'card_container');
card.setAttribute('class', 'card');

image.setAttribute('class', 'image');
image.setAttribute('src', './assets/blue-flower.png');
image.setAttribute('alt', 'blue-flower');

card_body.setAttribute('class', 'card_body');
price.setAttribute('class', 'price');
price.innerHTML = blueFlower.price;
h4.innerHTML = blueFlower.product_name;







