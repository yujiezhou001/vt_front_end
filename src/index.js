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

//function that changes button content on click
const buttonOnClick = (index) => {
    //index is an input which will be acquired from index in forEach loop
    const button = document.getElementsByTagName('button');
    if (button[index].innerHTML === 'Add to cart') {
        button[index].innerHTML = 'Remove from cart';
    } else {
        button[index].innerHTML = 'Add to cart';
    }

}

//this function is used for static html components, to test 
//button change feature before dynamically make them
const buttonOnChangeTest = () => {
    //toggle text in and color of button
    const button = document.getElementsByTagName('button');
    if (button[0].innerHTML === 'Add to cart') {
        button[0].innerHTML = 'Remove from cart';
        button[0].style.background = '#17f27a';
    } else {
        button[0].innerHTML = 'Add to cart';
        button[0].style.background = '#15d36b';
    }
    //toggle badge's opacity
    const badge = document.getElementsByClassName('badge');
    if (badge[0].style.opacity === '1') {
        badge[0].style.opacity = '0';
    } else {
        badge[0].style.opacity = '1';
    }
}

const buildProductCard = (product, index) => {

    
    //Create elements to build HTML card component
    const card_container = document.querySelector('.card-container');
    const card = document.createElement('div');
    const imageGroup = document.createElement('div');
    const image = document.createElement('img');
    const button = document.createElement('button');
    const badge = document.createElement('div');
    const card_body = document.createElement('div');
    const h4 = document.createElement('h4');
    const price = document.createElement('p');
    const rating = document.createElement('p');
    const star = document.createElement('img');
    //svg attributes need to be set before the loop of appending it begins
    star.setAttribute('src', './assets/star.svg');
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
    imageGroup.append(image);
    imageGroup.append(button);
    imageGroup.append(badge);
    card.append(imageGroup);
    card.append(card_body);
    card_body.append(h4);
    card_body.append(price);
    card_body.append(rating);


    //Set content and attributes
    rating.setAttribute('class', 'rating');
    card.setAttribute('class', 'card');
    imageGroup.setAttribute('class', 'imageGroup');
    image.setAttribute('class', 'image');
    image.setAttribute('src', product.image_source);
    image.setAttribute('alt', product.product_name);
    button.setAttribute('type', 'button');
    button.setAttribute('id', index);
    button.innerHTML = 'Add to cart';
    button.setAttribute('onclick', `buttonOnClick(${index})`);
    badge.setAttribute('class', 'badge');
    badge.innerHTML = 'In Cart';
    card_body.setAttribute('class', 'card-body');
    price.setAttribute('class', 'price');
    price.innerHTML = product.price;
    h4.innerHTML = product.product_name;
}

//loop through data array and build product card for each object in data
// data.forEach(function(product, index){
//     buildProductCard(product, index)
// })







