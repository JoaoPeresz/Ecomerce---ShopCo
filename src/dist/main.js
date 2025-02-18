"use strict";
const arrivals = [
    {
        image: "assets/home-page/T-shirt%20with%20Tape.png",
        title: "T-shirt with Tape Details",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 120,
        previous: 0,
        discount: ""
    },
    {
        image: "assets/home-page/Skinny%20Fit%20Jeans.png",
        title: "Skinny Fit Jeans",
        ratingImage: "assets/home-page/rating-3.5.png",
        rating: "3.5/5",
        price: 240,
        previous: 260,
        discount: "-20%"
    },
    {
        image: "assets/home-page/Checked%20Shirt.png",
        title: "Checkered Shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 180,
        previous: 0,
        discount: ""
    },
    {
        image: "assets/home-page/Sleeve%20Striped.png",
        title: "Sleeve Striped T-shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 130,
        previous: 160,
        discount: "-30%"
    },
];
const topSelling = [
    {
        image: "assets/home-page/vertical-striped.png",
        title: "T-shirt with Tape Details",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 120,
        previous: 0,
        discount: ""
    },
    {
        image: "assets/home-page/courage-graphic.png",
        title: "Skinny Fit Jeans",
        ratingImage: "assets/home-page/rating-3.5.png",
        rating: "3.5/5",
        price: 240,
        previous: 260,
        discount: "-20%"
    },
    {
        image: "assets/home-page/loose-fit.png",
        title: "Checkered Shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 180,
        previous: 0,
        discount: ""
    },
    {
        image: "assets/home-page/faded-skinny.png",
        title: "Sleeve Striped T-shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 130,
        previous: 160,
        discount: "-30%"
    },
];
const topics = [
    {
        image: "assets/home-page/topic-casual.png",
        topic: "Casual"
    },
    {
        image: "assets/home-page/topic-formal.png",
        topic: "Formal"
    },
    {
        image: "assets/home-page/topic-party.png",
        topic: "Party"
    },
    {
        image: "assets/home-page/topic-gym.png",
        topic: "Gym"
    },
];
const navOptions = [
    {
        title: "COMPANY",
        options: [
            "About",
            "Features",
            "Works",
            "Career",
        ]
    },
    {
        title: "HELP",
        options: [
            "Customer Support",
            "Delivery Details",
            "Terms & Conditions",
            "Privacy Policy",
        ]
    },
    {
        title: "FAQ",
        options: [
            "Account",
            "Manage Deliveries",
            "Orders",
            "Payment",
        ]
    },
    {
        title: "Resources",
        options: [
            "Free eBook",
            "Development Tutotial",
            "How to - Blog",
            "Youtube Playlist",
        ]
    },
];
document.addEventListener("DOMContentLoaded", () => {
    renderCards(arrivals, ".cards-container.arrivals");
    renderCards(topSelling, ".cards-container.top-selling");
    renderTopics();
    renderFooterNavs();
    setupEmailSubscription();
});
const renderCards = (products, containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = products.map((product) => `
            <article class="container-arrival">
                <img src="${product.image}" alt="${product.title}" />
                <h3 class="product-title">${product.title}</h3>
                <section class="container-rating">
                    <img src="${product.ratingImage}" alt="rating" />
                    <h3>${product.rating}</h3>
                </section>
                <section class="container-prices">
                    <h1 class="clothes-price">$${product.price}</h1>
                    ${product.previous > 0 ? `
                        <h2 class="previous-price"><del>$${product.previous}</del></h2>
                        <section class="container-discount">
                          <span class="discount">${product.discount}</span>
                        </section>
                    ` : ''}
                </section>
            </article>
        `).join("");
    }
};
const renderTopics = () => {
    const container = document.querySelector(".card-topics-browse");
    if (container) {
        container.innerHTML = topics.map((topic) => `
            <section class="container-topics">
                <img class="topic-image" src="${topic.image}" alt="topic"/>
                <h2 class="topic">${topic.topic}</h2>
            </section>        
        `).join("");
    }
};
const renderFooterNavs = () => {
    const container = document.querySelector(".footer-nav");
    if (container) {
        container.innerHTML = navOptions.map((item) => `
            <section class="container-footer-nav">
                <h1 class="title-footer-nav">${item.title}</h1>
                <ul class="list-nav">
                    ${item.options.map(option => `
                        <li class="option-footer-nav"><p class="option-text" href="#">${option}</p></li>
                    `).join('')}
                </ul>
            </section>
        `).join("");
    }
};
const setupEmailSubscription = () => {
    let emails = [];
    const emailInput = document.querySelector(".footer-input");
    const subscribeButton = document.querySelector(".subscriber-button");
    if (emailInput && subscribeButton) {
        subscribeButton.addEventListener("click", () => {
            const email = emailInput.value.trim();
            if (email && validateEmail(email)) {
                if (emails.some(registeredEmail => registeredEmail === email)) {
                    renderMessage("⚠️Your email is already registered.", "#FFAA00");
                }
                else {
                    emails.push(email);
                    renderMessage("✅ Your email has been successfully registered!", "#4CAF50");
                }
            }
            else {
                renderMessage("🚨Please enter a valid email address.", "#F44336");
            }
        });
    }
};
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function renderMessage(message, color) {
    const successElement = document.querySelector(".message-email");
    if (successElement) {
        successElement.innerHTML = `
            <section class="success-message">
                <h2 style="color: ${color}" class="email-result">${message}</h2>
            </section>
        `;
    }
}
const carouselContainer = document.getElementById('carousel-container');
const [arrowLeft, arrowRight] = document.querySelectorAll('.arrows-happy-customers img');
const CARD_OFFSET = 420;
const TRANSITION = 'transform 0.5s ease';
let currentCards = [0, 1, 2, 3, 4];
const cards = Array.from(carouselContainer.children);
const reorganizeCarousel = (newOrder) => {
    carouselContainer.replaceChildren(...newOrder.map(i => cards[i]));
};
const rotateCarousel = (direction) => {
    const translateX = direction === 'next' ? -CARD_OFFSET : CARD_OFFSET;
    carouselContainer.style.transition = TRANSITION;
    carouselContainer.style.transform = `translateX(${translateX}px)`;
    const onTransitionEnd = () => {
        carouselContainer.removeEventListener('transitionend', onTransitionEnd);
        currentCards = direction === 'next'
            ? [...currentCards.slice(1), currentCards[0]]
            : [currentCards[4], ...currentCards.slice(0, 4)];
        reorganizeCarousel(currentCards);
        carouselContainer.style.transition = 'none';
        carouselContainer.style.transform = 'translateX(0)';
        void carouselContainer.offsetHeight;
        carouselContainer.style.transition = TRANSITION;
    };
    carouselContainer.addEventListener('transitionend', onTransitionEnd);
};
arrowRight.addEventListener('click', () => rotateCarousel('next'));
arrowLeft.addEventListener('click', () => rotateCarousel('previous'));
