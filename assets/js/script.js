$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
       autoplay:true,
        margin:30,
        loop:true,
        dots:true
  //      nav:true,
  //      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
    });
  });




// const products=require("./data.json");

// console.log(pro)

// // Product data array (you can replace this with API data in real applications)
// const products = [
//   {
//     name: "Cho Cake",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     price: 15000,
//     discountedPrice: 12000,
//     rating: 4.7,
//     imageUrl: "./assets/images/Cake.jpg",
//     category: "cakes",
//     discount: 20
//   },
//   {
//     name: "Cho Brownie",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     price: 20000,
//     discountedPrice: 18000,
//     rating: 4.5,
//     imageUrl: "./assets/images/Brownies.jpg",
//     category: "brownies",
//     discount: 10
//   },
//   {
//     name: "Leather Jacket",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     price: 8000,
//     discountedPrice: 6000,
//     rating: 4.8,
//     imageUrl: "./assets/images/muffin.jpg",
//     category: "cup-cakes",
//     discount: 25
//   },

//   {
//     name: "Bun",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     price: 15000,
//     discountedPrice: 12000,
//     rating: 4.7,
//     imageUrl: "./assets/images/bun.png",
//     category: "cakes",
//     discount: 20
//   },
//   {
//     name: "Donuts",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     price: 20000,
//     discountedPrice: 18000,
//     rating: 4.5,
//     imageUrl: "./assets/images/macarons-4701978_1920.jpg",
//     category: "brownies",
//     discount: 10
//   },
//   {
//     name: "Leather Jacket",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     price: 8000,
//     discountedPrice: 6000,
//     rating: 4.8,
//     imageUrl: "./assets/images/donut's.png",
//     category: "cakes",
//     discount: 25
//   },
//   // Add more products here...
// ];

// Function to render products
function renderProducts(productList) {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = ''; // Clear the grid before rendering

  productList.forEach(product => {
    const productCard = `
      <div class="col-md-4">
        <div class="card product-card">
          <div class="position-relative">
            <img src="${product.imageUrl}" class="card-img-top product-img" alt="${product.name}">
            <span class="rating">${product.rating}</span>
            <span class="discount-badge">${product.discount}% OFF</span>
          </div>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="product-price">
              ₹${product.discountedPrice} <span class="discounted-price">₹${product.price}</span>
            </p>
            <a href="#" class="btn btn-primary">Call to Order</a>
          </div>
        </div>
      </div>
    `;
    productGrid.innerHTML += productCard;
  });
}

// // Initial render of all products
// renderProducts(products);

// // Search functionality
// document.getElementById('searchInput').addEventListener('input', function () {
//   const query = this.value.toLowerCase();
//   const filteredProducts = products.filter(product =>
//     product.name.toLowerCase().includes(query)
//   );
//   renderProducts(filteredProducts);
// });

// // Filter functionality
// document.getElementById('categoryFilter').addEventListener('change', function () {
//   const selectedCategory = this.value;
//   const filteredProducts = selectedCategory
//     ? products.filter(product => product.category === selectedCategory)
//     : products;
//   renderProducts(filteredProducts);
// });

// Use fetch() to load the JSON file
fetch('/data.json')
  .then(response => response.json()) // Parse JSON
  .then(products => {
    // Render products using the fetched data
    renderProducts(products);

    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
      );
      renderProducts(filteredProducts);
    });

    // Filter functionality
    document.getElementById('categoryFilter').addEventListener('change', function () {
      const selectedCategory = this.value;
      const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;
      renderProducts(filteredProducts);
    });
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
