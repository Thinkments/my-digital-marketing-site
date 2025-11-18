import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ShoppingCart, ArrowLeft, Star, Truck, Shield, RotateCcw, Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function ProductPage() {
  const { productSlug } = useParams<{ productSlug: string }>();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app this would come from an API
  const products: { [key: string]: any } = {
    'if-you-want-it-done-right-call-berry-white-t-shirt': {
      id: 1,
      name: 'If You Want It Done Right, Call Berry White! T-Shirt',
      price: 24.99,
      originalPrice: 29.99,
      rating: 5,
      reviews: 12,
      description: 'A fun twist on digital marketing with our "If You Want It Done Right, Call Berry White!" t-shirt. Made from 100% cotton, this comfortable unisex tee is perfect for marketing professionals with a sense of humor.',
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=600&h=600&fit=crop'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Black Heather', 'Asphalt'],
      features: [
        '100% ring-spun cotton',
        'Pre-shrunk for perfect fit',
        'Soft and comfortable',
        'Unisex sizing',
        'Tear-away label'
      ]
    },
    'unisex-t-shirt': {
      id: 2,
      name: 'ThinkMents Logo T-Shirt',
      price: 22.99,
      rating: 5,
      reviews: 8,
      description: 'Show your ThinkMents pride with our classic logo t-shirt. Featuring our signature logo on a premium quality unisex tee.',
      images: [
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'White', 'Navy'],
      features: [
        '100% cotton',
        'Classic fit',
        'Ribbed collar',
        'Machine washable'
      ]
    },
    'white-glossy-mug': {
      id: 3,
      name: 'White Glossy Mug',
      price: 15.99,
      rating: 4,
      reviews: 15,
      description: 'Start your morning right with our premium ceramic mug featuring the ThinkMents logo. Perfect for coffee, tea, or any hot beverage.',
      images: [
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop'
      ],
      sizes: ['11 oz', '15 oz', '20 oz'],
      colors: ['White'],
      features: [
        'Ceramic construction',
        'Dishwasher safe',
        'Microwave safe',
        'Glossy finish'
      ]
    },
    'five-panel-cap': {
      id: 4,
      name: 'Five Panel Cap',
      price: 18.99,
      rating: 5,
      reviews: 6,
      description: 'Complete your look with our stylish five-panel cap featuring the embroidered ThinkMents logo.',
      images: [
        'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop'
      ],
      sizes: ['One Size'],
      colors: ['Black'],
      features: [
        'Five-panel construction',
        'Embroidered logo',
        'Adjustable strap',
        'One size fits most'
      ]
    }
  };

  const product = productSlug ? products[productSlug] : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <motion.div
        className="pt-16 min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h1 className="text-4xl mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/store">
            <Button className="bg-gradient-to-r from-primary to-accent">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Store
            </Button>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumb */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/store" className="hover:text-primary transition-colors">Store</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              <h1 className="text-3xl md:text-4xl mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="destructive">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Options */}
              <div className="space-y-6 mb-8">
                {/* Size Selection */}
                {product.sizes && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size: string) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 border rounded-lg transition-all ${
                            selectedSize === size
                              ? 'border-primary bg-primary text-white'
                              : 'border-gray-300 hover:border-primary'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {product.colors && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Color</label>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color: string) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 border rounded-lg transition-all ${
                            selectedColor === color
                              ? 'border-primary bg-primary text-white'
                              : 'border-gray-300 hover:border-primary'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium mb-2">Quantity</label>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-muted"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex space-x-4 mb-8">
                <Button size="lg" className="flex-1 bg-gradient-to-r from-primary to-accent">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <h3 className="font-medium">Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="text-muted-foreground text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Truck className="w-4 h-4 text-green-500" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <RotateCcw className="w-4 h-4 text-blue-500" />
                  <span>30-day returns</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-purple-500" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Store */}
      <section className="py-12 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <Link to="/store">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Store
            </Button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}