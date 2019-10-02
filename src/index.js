//Elements needed to construct HTML component
const body = document.querySelector('body');
const card_container = document.createElement('div');
card_container.setAttribute('class', 'card_container');
const card = document.createElement('div');
card.setAttribute('class', 'card');
const image = document.createElement('img');
image.setAttribute('class', 'image');
image.setAttribute('src', './assets/blue-flower.png');
image.setAttribute('alt', 'blue-flower');
const card_body = document.createElement('div');
card_body.setAttribute('class', 'card_body');
const h4 = document.createElement('h4');
h4.innerHTML = 'Blue Flower';
const price = document.createElement('p');
price.setAttribute('class', 'price');
price.innerHTML = '$80.00';
const rating = document.createElement('p');
rating.setAttribute('class', 'rating');
const star = document.createElement('img');
star.setAttribute('src', "./assets/star.svg");
star.setAttribute('style', 'width: 8px');
star.setAttribute('alt', 'star');


for (let i = 0; i < 3; i++) {
    rating.appendChild(star.cloneNode(true))
}
// rating.appendChild(star);
body.append(card_container);
card_container.append(card);
card.append(image);
card.append(card_body);
card_body.append(h4);
card_body.append(price);
card_body.append(rating);



//Add information

















