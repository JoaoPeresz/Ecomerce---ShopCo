interface Product {
    image: string;
    title: string;
    ratingImage: string;
    rating: string;
    price: number;
    previous: number;
    discount: string;
}

const arrivals: Product[] = [
    {
        image: "/assets/home-page/T-shirt%20with%20Tape.png",
        title: "T-shirt with Tape Details",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 120,
        previous: 0,
        discount: ""
    },
    {
        image: "/assets/home-page/Skinny%20Fit%20Jeans.png",
        title: "Skinny Fit Jeans",
        ratingImage: "assets/home-page/rating-3.5.png",
        rating: "3.5/5",
        price: 240,
        previous: 260,
        discount: "-20%"
    },
    {
        image: "/assets/home-page/Checked%20Shirt.png",
        title: "Checkered Shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 180,
        previous: 0,
        discount: ""
    },
    {
        image: "/assets/home-page/Sleeve%20Striped.png",
        title: "Sleeve Striped T-shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 130,
        previous: 160,
        discount: "-30%"
    },
];

const topSelling: Product[] = [
    {
        image: "/assets/home-page/vertical-striped.png",
        title: "T-shirt with Tape Details",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 120,
        previous: 0,
        discount: ""
    },
    {
        image: "/assets/home-page/courage-graphic.png",
        title: "Skinny Fit Jeans",
        ratingImage: "assets/home-page/rating-3.5.png",
        rating: "3.5/5",
        price: 240,
        previous: 260,
        discount: "-20%"
    },
    {
        image: "/assets/home-page/loose-fit.png",
        title: "Checkered Shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 180,
        previous: 0,
        discount: ""
    },
    {
        image: "/assets/home-page/faded-skinny.png",
        title: "Sleeve Striped T-shirt",
        ratingImage: "assets/home-page/rating-4.5.png",
        rating: "4.5/5",
        price: 130,
        previous: 160,
        discount: "-30%"
    },
];

const renderCards = (products: Product[], containerSelector: string) => {
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
            ${
                product.previous > 0
                    ? `
              <h2 class="previous-price"><del>$${product.previous}</del></h2>
              <section class="container-discount">
                <span class="discount">${product.discount}</span>
              </section>
            `
                    : ''
            }
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
