const product = {
    id: 123, 
    name: 'Product Name', 
    description: 'Product description goes here',
    image: 'product-image.jpg', 
    price: 19.99, 
    quantity: 50, 
    category: 'Category Name', 
    brand: 'Brand Name', 
    rating: 4.5, 
    reviews: [
      {
        id: 1,
        author: 'John Doe', 
        rating: 4, 
        comment: 'Product review goes here', 
        date: '2023-04-22', 
      },
      {
        id: 2,
        author: 'Jane Doe',
        rating: 5,
        comment: 'Product review goes here',
        date: '2023-04-23',
      },
    ], 
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4'
    ], 
    shipping: {
      dimensions: {
        length: 10, 
        width: 5, 
        height: 2, 
      },
      weight: 1.5, 
      method: 'Standard Shipping', 
      cost: 5.99, 
      estimatedDelivery: '2023-05-01', 
    }, 
    addToCart: function(quantity) {
      
      console.log(`${quantity} units of ${this.name} have been added to the cart.`);
      
    },
    buyNow: function() {
      
      console.log(`You have purchased ${this.name} for $${this.price}.`);
      
    },
  };
  