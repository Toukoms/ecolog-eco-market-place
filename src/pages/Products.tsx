
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ShoppingCart } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Mock product data
const PRODUCTS = [
  {
    id: 1,
    name: "Carottes tordues",
    image: "https://images.unsplash.com/photo-1598170845053-15e1d5b7c4f7",
    category: "Légumes",
    originalPrice: 2.99,
    discountPrice: 1.49,
    expiryDate: "2025-05-10",
    reason: "Esthétique",
    discount: 50
  },
  {
    id: 2,
    name: "Pommes irrégulières",
    image: "https://images.unsplash.com/photo-1567306226408-c302e35a5ba3",
    category: "Fruits",
    originalPrice: 3.49,
    discountPrice: 1.75,
    expiryDate: "2025-05-08",
    reason: "Esthétique",
    discount: 50
  },
  {
    id: 3,
    name: "Yaourts nature",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    category: "Produits frais",
    originalPrice: 2.50,
    discountPrice: 1.25,
    expiryDate: "2025-05-06",
    reason: "Date courte",
    discount: 50
  },
  {
    id: 4,
    name: "Pain complet",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "Boulangerie",
    originalPrice: 2.20,
    discountPrice: 0.99,
    expiryDate: "2025-05-04",
    reason: "Date courte",
    discount: 55
  },
  {
    id: 5,
    name: "Tomates cerises",
    image: "https://images.unsplash.com/photo-1561155707-3f9e6749b233",
    category: "Légumes",
    originalPrice: 2.99,
    discountPrice: 1.49,
    expiryDate: "2025-05-09",
    reason: "Surplus",
    discount: 50
  },
  {
    id: 6,
    name: "Concombre courbé",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e",
    category: "Légumes",
    originalPrice: 1.79,
    discountPrice: 0.89,
    expiryDate: "2025-05-08",
    reason: "Esthétique",
    discount: 50
  },
  {
    id: 7,
    name: "Oranges bio",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9",
    category: "Fruits",
    originalPrice: 4.99,
    discountPrice: 2.99,
    expiryDate: "2025-05-07",
    reason: "Calibre irrégulier",
    discount: 40
  },
  {
    id: 8,
    name: "Pâtes complètes",
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14",
    category: "Épicerie",
    originalPrice: 1.99,
    discountPrice: 0.99,
    expiryDate: "2025-07-20",
    reason: "Emballage abîmé",
    discount: 50
  },
  {
    id: 9,
    name: "Petit-pois surgelés",
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
    category: "Surgelés",
    originalPrice: 2.49,
    discountPrice: 1.49,
    expiryDate: "2025-08-15",
    reason: "Emballage abîmé",
    discount: 40
  },
];

// Categories 
const CATEGORIES = ["Tous", "Fruits", "Légumes", "Produits frais", "Boulangerie", "Épicerie", "Surgelés"];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [showNearExpiry, setShowNearExpiry] = useState(false);
  const [sortBy, setSortBy] = useState("discount");

  // Filter products based on search, category, price, and expiry
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory;
    const matchesPrice = product.discountPrice >= priceRange[0] && product.discountPrice <= priceRange[1];
    
    const expiryDate = new Date(product.expiryDate);
    const today = new Date();
    const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    
    const matchesExpiry = !showNearExpiry || daysUntilExpiry <= 5;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesExpiry;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case "price-low":
        return a.discountPrice - b.discountPrice;
      case "price-high":
        return b.discountPrice - a.discountPrice;
      case "expiry":
        return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
      case "discount":
      default:
        return b.discount - a.discount;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Nos produits anti-gaspi</h1>
        <p className="text-gray-600 mb-8">
          Découvrez notre sélection de produits sauvés du gaspillage à prix mini
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm border h-fit sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Filtres</h2>
            
            {/* Search */}
            <div className="mb-6">
              <Label htmlFor="search" className="text-sm font-medium mb-2 block">Rechercher</Label>
              <Input 
                type="text" 
                id="search" 
                placeholder="Rechercher un produit..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Catégories</h3>
              <div className="space-y-2">
                {CATEGORIES.map(category => (
                  <div key={category} className="flex items-center">
                    <Button
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className={`w-full justify-start ${selectedCategory === category ? 'bg-ecologis-green hover:bg-ecologis-green-dark' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Prix (€)</h3>
              <Slider
                defaultValue={[0, 5]}
                max={5}
                step={0.5}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>{priceRange[0]}€</span>
                <span>{priceRange[1]}€</span>
              </div>
            </div>
            
            {/* Near Expiry */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="expiry" 
                  checked={showNearExpiry} 
                  onCheckedChange={() => setShowNearExpiry(!showNearExpiry)} 
                />
                <Label htmlFor="expiry" className="text-sm font-medium">Date limite proche</Label>
              </div>
            </div>
            
            {/* Sort By */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Trier par</h3>
              <RadioGroup defaultValue="discount" value={sortBy} onValueChange={setSortBy}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="discount" id="discount" />
                  <Label htmlFor="discount">Réduction</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="price-low" id="price-low" />
                  <Label htmlFor="price-low">Prix croissant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="price-high" id="price-high" />
                  <Label htmlFor="price-high">Prix décroissant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expiry" id="expiry-date" />
                  <Label htmlFor="expiry-date">Date de péremption</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full border-gray-300"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Tous");
                setPriceRange([0, 5]);
                setShowNearExpiry(false);
                setSortBy("discount");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
          
          {/* Products Grid */}
          <div className="md:col-span-3">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Aucun produit trouvé</h3>
                <p className="text-gray-600">Essayez de modifier vos filtres pour voir plus de résultats.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => {
                  const expiryDate = new Date(product.expiryDate);
                  const today = new Date();
                  const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
                  
                  return (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow group">
                      <Link to={`/produit/${product.id}`} className="block">
                        <div className="h-48 overflow-hidden relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-2 right-2 bg-ecologis-orange">-{product.discount}%</Badge>
                          {daysUntilExpiry <= 3 && (
                            <Badge className="absolute top-2 left-2 bg-ecologis-green">
                              À consommer bientôt
                            </Badge>
                          )}
                        </div>
                      </Link>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <Link to={`/produit/${product.id}`} className="block">
                            <h3 className="font-semibold text-lg hover:text-ecologis-green transition-colors">
                              {product.name}
                            </h3>
                          </Link>
                          <Badge variant="outline" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        
                        <div className="mb-3">
                          <span className="text-xs text-gray-500">Cause: {product.reason}</span>
                          <div className="flex items-center mt-1">
                            <span className="text-gray-500 line-through text-sm mr-2">{product.originalPrice.toFixed(2)}€</span>
                            <span className="text-ecologis-green font-bold text-lg">{product.discountPrice.toFixed(2)}€</span>
                          </div>
                          <p className="text-sm mt-1 text-gray-600">
                            À consommer avant le {new Date(product.expiryDate).toLocaleDateString()}
                          </p>
                        </div>
                        
                        <Button className="w-full bg-ecologis-green hover:bg-ecologis-green-dark">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Ajouter au panier
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
