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
const renderCards = (products, containerSelector) => {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = products
            .map((product) => `
        <article class="container-arrival">
          <img src="${product.image}" alt="${product.title}" />
          <h3 class="product-title">${product.title}</h3>
          <section class="container-rating">
            <img src="${product.ratingImage}" alt="rating" />
            <h3>${product.rating}</h3>
          </section>
          <section class="container-prices">
            <h1 class="clothes-price">$${product.price}</h1>
            ${product.previous > 0
            ? `
              <h2 class="previous-price"><del>$${product.previous}</del></h2>
              <section class="container-discount">
                <span class="discount">${product.discount}</span>
              </section>
            `
            : ''}
          </section>
        </article>
      `)
            .join("");
    }
};
document.addEventListener("DOMContentLoaded", () => {
    renderCards(arrivals, ".cards-container.arrivals");
    renderCards(topSelling, ".cards-container.top-selling");
});
const topics = [
    {
        image: "..assets/home-page/topic-casual.png",
        topic: "Casual"
    },
    {
        image: "..assets/home-page/topic-formal.png",
        topic: "Formal"
    },
    {
        image: "..assets/home-page/topic-party.png",
        topic: "Party"
    },
    {
        image: "..assets/home-page/topic-gym.png",
        topic: "Gym"
    },
];
const renderTopics = () => {
    const container = document.querySelector(".card-topics-browse");
    if (container) {
        container.innerHTML = topics.map((topic) => `
            <section class="container-topics">
                <img class="topic-image" src=${topic.image}/>
                <h2 class="topic">${topic.topic}</h2>
            </section>        
        `).join("");
    }
};
document.addEventListener("DOMContentLoaded", () => {
    renderTopics();
});
const reviews = [
    {
        "rating": "assets/home-page/rating-5.png",
        "name": "Emily R.",
        "review": "Shop.co has completely transformed my shopping experience. The quality, the fit, and the customer service are all top-notch. I can't recommend them enough!"
    },
    {
        "rating": "assets/home-page/rating-5.png",
        "name": "Sarah M.",
        "review": "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        "rating": "assets/home-page/rating-5.png",
        "name": "Alex K.",
        "review": "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        "rating": "assets/home-page/rating-5.png",
        "name": "James L.",
        "review": "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        "rating": "assets/home-page/rating-5.png",
        "name": "Olivia T.",
        "review": "I've never felt more confident in my outfits since shopping at Shop.co. Their pieces are stylish, comfortable, and make me feel amazing every time I wear them!"
    }
];
const renderGoodReviews = () => {
    const container = document.querySelector(".container-good-reviews");
    if (container) {
        container.innerHTML = reviews.map((review) => `
            <section class="container-box-reviews">
                <img src=${review.rating}/>
                <section class="data-reviewr">
                    <h1 class="title-reviewr">${review.name}</h1>
                    <img src="assets/home-page/checked.png"/>
                </section>
                    <h3 class="review">${review.review}</h3>
            </section>
        `).join("");
    }
};
document.addEventListener("DOMContentLoaded", () => {
    renderGoodReviews();
});
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
document.addEventListener("DOMContentLoaded", () => {
    renderFooterNavs();
});
