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

function renderProducts(productList) {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = '';

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
            <a href="tel:+917867987871" class="btn btn-primary">Call to Order</a>
          </div>
        </div>
      </div>
    `;
    productGrid.innerHTML += productCard;
  });
}


fetch('/data.json')
  .then(response => response.json()) 
  .then(products => {
    renderProducts(products);
    document.getElementById('searchInput').addEventListener('input', function () {
      const query = this.value.toLowerCase();
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
      );
      renderProducts(filteredProducts);
    });
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
