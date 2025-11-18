import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { ShoppingCart, Search, Filter, Star, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function StorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 4 },
    { id: 'apparel', name: 'Apparel', count: 2 },
    { id: 'accessories', name: 'Accessories', count: 2 }
  ];

  const products = [
    {
      id: 1,
      name: 'If You Want It Done Right, Call Berry White! T-Shirt',
      price: '$24.99',
      originalPrice: '$29.99',
      category: 'apparel',
      rating: 5,
      reviews: 12,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      slug: 'if-you-want-it-done-right-call-berry-white-t-shirt',
      badge: 'Best Seller',
      description: 'Comfortable unisex t-shirt with a fun marketing twist!'
    },
    {
      id: 2,
      name: 'ThinkMents Logo T-Shirt',
      price: '$22.99',
      category: 'apparel',
      rating: 5,
      reviews: 8,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
      slug: 'unisex-t-shirt',
      description: 'Classic ThinkMents branded t-shirt in multiple colors.'
    },
    {
      id: 3,
      name: 'White Glossy Mug',
      price: '$15.99',
      category: 'accessories',
      rating: 4,
      reviews: 15,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop',
      slug: 'white-glossy-mug',
      description: 'Start your day with ThinkMents! Perfect for coffee or tea.'
    },
    {
      id: 4,
      name: 'Five Panel Cap',
      price: '$18.99',
      category: 'accessories',
      rating: 5,
      reviews: 6,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
      slug: 'five-panel-cap',
      description: 'Stylish cap with embroidered ThinkMents logo.'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ThinkMents{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Store
              </span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Show your love for digital marketing with our exclusive ThinkMents merchandise collection. High-quality products that make great conversation starters and help you represent the brand you trust for your marketing success.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#products">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link to="/get-a-quote">
                <Button size="lg" variant="outline">
                  Get Marketing Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                          {product.badge}
                        </Badge>
                      </div>
                    )}
                    {product.originalPrice && (
                      <div className="absolute top-4 right-4">
                        <Badge variant="destructive">
                          Sale
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <Link to={`/store/p/${product.slug}`}>
                      <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        View Product
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Stay Updated on{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                New Products
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be the first to know about new merchandise, exclusive deals, and special offers from ThinkMents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-primary to-accent">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}