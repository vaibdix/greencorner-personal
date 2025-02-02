import React, { useState, useEffect, useContext } from 'react';
import { ShoppingBag, Star, Wallet, Plus, Minus, PlusIcon, Heart } from 'lucide-react';
import { StarIcon } from 'lucide-react';
import Review from '../review/Review';
import CardFiveProduct from './CardFiveProduct';
import { useParams } from 'react-router-dom';
import { context } from '../../store/AppContext';
import potimage from '../../assets/images/potImage.png';
import potImageNoPlant from '../../assets/images/potImageNoPlant.png';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [error, setError] = useState(null);

  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useContext(context);

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch plants');
        }
        return response.json();
      })
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id));
        if (!selectedProduct) {
          throw new Error('Plant not found');
        }
        console.log('Product Data:', selectedProduct);
        setProduct(selectedProduct);
        setMainImage(selectedProduct.primaryImage);
        setError(null);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message || 'Failed to load product');
      });
  }, [id]);

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }
  if (!product) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.primaryImage,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  const handleAddToWishlist = () => {
    const productData = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.primaryImage,
    };

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist!');
    } else {
      addToWishlist(productData);
      toast.success('Added to wishlist!');
    }
  };

  return (
    <>
      <section className="relative py-5 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1 text-lg font-semibold text-gray-600">
              <li>
                <a href="/" className="hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-700">
                  Products
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <span className="text-gray-900">{product?.name || 'Loading...'}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <div className="justify-center lg:justify-start">
              <div>
                <img
                  className="h-[600px] w-full rounded-xl object-contain"
                  src={mainImage}
                  alt="Main Product"
                />
              </div>
              {/* Image Thumbnails below the main image */}
              <div className="mt-6 ml-7 flex justify-start gap-4 p-2">
                {product.secondaryImages.map((image, index) => (
                  <div key={index} onClick={() => setMainImage(image)} className="cursor-pointer">
                    <img
                      className="h-16 w-16 rounded-lg border-2 border-gray-200 object-cover transition-all hover:border-[#1C3035]"
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex w-full flex-col justify-center max-lg:mx-auto max-lg:max-w-[608px]">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-3xl leading-10 font-semibold text-gray-900">{product.name}</h2>
                <button
                  onClick={handleAddToWishlist}
                  className="p-2 transition-all hover:scale-110"
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isInWishlist(product.id) ? 'fill-red-400 text-red-400' : 'text-red-400'
                    }`}
                  />
                </button>
              </div>

              <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                <h6 className="mr-5 border-gray-200 pr-5 text-2xl leading-9 font-semibold text-gray-900 sm:border-r">
                  ₹ {product.price}
                </h6>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        size={20}
                        className={
                          index < Math.round(product.rating) ? 'text-amber-400' : 'text-gray-200'
                        }
                      />
                    ))}
                  </div>
                  <span className="pl-2 text-sm leading-7 font-normal text-gray-500">
                    {product.reviews.length} reviews
                  </span>
                </div>
              </div>

              <div className="mb-5 flex gap-7">
                <div className="rounded-full border border-[#1C3035]/50 px-7 py-2">
                  {product.availability}
                </div>
                <div className="rounded-full border border-[#1C3035]/50 px-7 py-2">
                  {product.sunlightRequirement}
                </div>
                <div className="rounded-full border border-[#1C3035]/50 px-7 py-2">
                  {product.season}
                </div>
              </div>

              <div className="mt-5 mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button className="group cusor-pointer relative col-span-2 flex w-full items-center justify-center gap-3 rounded-lg border-1 border-[#1C3035]/50 bg-white px-6 py-4">
                  <div className="relative">
                    <img
                      src={potImageNoPlant}
                      width={30}
                      height={30}
                      className="rounded-md object-cover transition-transform group-hover:scale-110"
                      alt="Plant Pot"
                    />
                    {/* Updated tooltip positioning */}
                    <div className="invisible absolute right-full bottom-1/2 z-50 mr-2 translate-y-1/2 cursor-pointer opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-xl">
                        <div className="w-[150px]">
                          <img
                            src={potimage}
                            className="h-[150px] w-full rounded-lg object-contain"
                            alt="Plant Pot Preview"
                          />
                          <p className="mt-2 text-center text-sm font-medium text-gray-600">
                            Decorative Pot
                          </p>
                        </div>
                        {/* Arrow pointing to button */}
                        <div className="absolute top-1/2 -right-2 h-4 w-4 -translate-y-1/2 rotate-45 transform border-t border-r border-gray-200 bg-white"></div>
                      </div>
                    </div>
                  </div>
                  <span className="font-medium text-[#1C3035]">Add Decorative Pot for ₹300</span>
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#1C3035] p-5 text-xs text-white">
                    New
                  </span>
                </button>
              </div>

              {/* Add to Cart and Buy Now buttons */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  onClick={handleAddToCart}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-lg border-[#1C3035] bg-[#1C3035] px-6 py-4 text-white shadow-md transition-all duration-300"
                >
                  <ShoppingBag className="h-5 w-5 transition-transform group-hover:scale-110 hover:text-white" />
                  <span className="font-medium hover:text-white">Add to Cart</span>
                  <span className="absolute right-4 opacity-0 transition-opacity group-hover:opacity-100 hover:text-white">
                    →
                  </span>
                </button>

                <button className="group relative flex w-full items-center justify-center gap-3 rounded-lg border-1 border-[#1C3035]/50 bg-white px-6 py-4 text-[#1C3035] shadow-md transition-all duration-300 hover:bg-[#1C3035] hover:text-white hover:shadow-xl active:scale-95 active:transform">
                  <Wallet className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="font-medium">Buy Now</span>
                  <span className="absolute right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </button>
              </div>

              <div className="mb-8">
                <div className="mb-4 rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Shipping Information</h3>
                  <p className="text-gray-600">{product.shoppingPolicy}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Return & Refund Policy</h3>
                  <p className="text-gray-600">{product.refundPolicy}</p>
                </div>
              </div>

              <div className="space-y-4">
                <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Description</h2>
                    <span className="transition group-open:rotate-180">
                      <PlusIcon />
                    </span>
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Seller Information</h2>
                    <PlusIcon />
                  </summary>
                  <div className="mt-4 px-4 leading-relaxed text-gray-700">
                    {product?.sellerName && (
                      <p>
                        <strong>Seller Name:</strong> {product.sellerName}
                      </p>
                    )}
                    {product?.sellerAddress?.street && (
                      <p>
                        <strong>Street Address:</strong> {product.sellerAddress.street}
                      </p>
                    )}
                    {product?.sellerAddress?.city && (
                      <p>
                        <strong>City:</strong> {product.sellerAddress.city}
                      </p>
                    )}
                    {product?.sellerAddress?.state && (
                      <p>
                        <strong>State:</strong> {product.sellerAddress.state}
                      </p>
                    )}
                    {product?.sellerAddress?.pincode && (
                      <p>
                        <strong>Zip Code:</strong> {product.sellerAddress.pincode}
                      </p>
                    )}
                    {product?.sellerAddress?.country && (
                      <p>
                        <strong>Country:</strong> {product.sellerAddress.country}
                      </p>
                    )}
                  </div>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Plant Care Information</h2>
                    <PlusIcon />
                  </summary>
                  <div className="mt-4 px-4 leading-relaxed text-gray-700">
                    {product.sunlightRequirement && (
                      <p>
                        <strong>Sunlight Requirement:</strong> {product.sunlightRequirement}
                      </p>
                    )}
                    {product.moistureRequirement && (
                      <p>
                        <strong>Moisture Requirement:</strong> {product.moistureRequirement}
                      </p>
                    )}
                    {product.soilType && (
                      <p>
                        <strong>Soil Type:</strong> {product.soilType}
                      </p>
                    )}
                    {product.growthRate && (
                      <p>
                        <strong>Growth Rate:</strong> {product.growthRate}
                      </p>
                    )}
                    {product.season && (
                      <p>
                        <strong>Season:</strong> {product.season}
                      </p>
                    )}
                    {product.potSizeRequired && (
                      <p>
                        <strong>Pot Size Required:</strong> {product.potSizeRequired}
                      </p>
                    )}
                    {product.genus && (
                      <p>
                        <strong>Genus:</strong> {product.genus}
                      </p>
                    )}
                    {product.localName && (
                      <p>
                        <strong>Local Name:</strong> {product.localName}
                      </p>
                    )}
                    {product.regionalName && (
                      <p>
                        <strong>Regional Name:</strong> {product.regionalName}
                      </p>
                    )}
                    {product.biologicalName && (
                      <p>
                        <strong>Biological Name:</strong> {product.biologicalName}
                      </p>
                    )}
                    {product.botanicalName && (
                      <p>
                        <strong>Botanical Name:</strong> {product.botanicalName}
                      </p>
                    )}
                    {product.tags && product.tags.length > 0 && (
                      <p>
                        <strong>Tags:</strong> {product.tags.join(', ')}
                      </p>
                    )}
                  </div>
                </details>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <Review reviews={product.reviews} />
        </div>
        <CardFiveProduct />
      </section>
    </>
  );
};

export default Product;
