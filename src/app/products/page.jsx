import Image from 'next/image';

const ProductsPage = () => {
  // Mock products data - replace with real data from your API/database
  const products = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      price: 29.99,
      category: 'Clothing',
      image: '/product-1.jpg',
    },
    {
      id: 2,
      name: 'Leather Wallet',
      price: 49.99,
      category: 'Accessories',
      image: '/product-2.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="text-gray-600 mt-2">Browse our collection of premium products</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Clothing</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Accessories</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="ml-2">Electronics</span>
                </label>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <input 
                type="range" 
                min="0" 
                max="1000" 
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                    <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-3 py-1 rounded border hover:bg-gray-100">Previous</button>
                <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
                <button className="px-3 py-1 rounded border hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded border hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded border hover:bg-gray-100">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;