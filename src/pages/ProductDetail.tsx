
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

// Mock product data
const PRODUCTS = [
  {
    id: 1,
    name: "Carottes tordues",
    image: "https://images.unsplash.com/photo-1598170845053-15e1d5b7c4f7",
    gallery: [
      "https://images.unsplash.com/photo-1598170845053-15e1d5b7c4f7",
      "https://images.unsplash.com/photo-1447175008436-054170c2e979",
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780"
    ],
    category: "Légumes",
    originalPrice: 2.99,
    discountPrice: 1.49,
    expiryDate: "2025-05-10",
    reason: "Esthétique",
    discount: 50,
    description: "Ces carottes ont des formes inhabituelles, mais leur goût et leurs qualités nutritionnelles sont identiques à celles des carottes standards. Parfaites pour les soupes, les jus ou simplement râpées en salade.",
    origin: "France",
    nutrition: {
      calories: "41 kcal/100g",
      carbs: "10g/100g",
      protein: "0.9g/100g",
      fat: "0.2g/100g"
    }
  },
  {
    id: 2,
    name: "Pommes irrégulières",
    image: "https://images.unsplash.com/photo-1567306226408-c302e35a5ba3",
    gallery: [
      "https://images.unsplash.com/photo-1567306226408-c302e35a5ba3",
      "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a",
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a"
    ],
    category: "Fruits",
    originalPrice: 3.49,
    discountPrice: 1.75,
    expiryDate: "2025-05-08",
    reason: "Esthétique",
    discount: 50,
    description: "Ces pommes présentent quelques imperfections visuelles qui n'affectent en rien leur goût délicieux et leur fraîcheur. Idéales pour une consommation directe, en compote ou en pâtisserie.",
    origin: "France",
    nutrition: {
      calories: "52 kcal/100g",
      carbs: "14g/100g",
      protein: "0.3g/100g",
      fat: "0.2g/100g"
    }
  },
  {
    id: 3,
    name: "Yaourts nature",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    gallery: [
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777",
      "https://images.unsplash.com/photo-1557434440-415fd2470697"
    ],
    category: "Produits frais",
    originalPrice: 2.50,
    discountPrice: 1.25,
    expiryDate: "2025-05-06",
    reason: "Date courte",
    discount: 50,
    description: "Ces yaourts sont parfaitement bons mais leur date de péremption est proche. Ils sont riches en probiotiques bénéfiques pour votre digestion et peuvent être consommés nature ou agrémentés de fruits.",
    origin: "France",
    nutrition: {
      calories: "59 kcal/100g",
      carbs: "4.7g/100g",
      protein: "3.5g/100g",
      fat: "3.2g/100g"
    }
  },
  {
    id: 4,
    name: "Pain complet",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    gallery: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
      "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04"
    ],
    category: "Boulangerie",
    originalPrice: 2.20,
    discountPrice: 0.99,
    expiryDate: "2025-05-04",
    reason: "Date courte",
    discount: 55,
    description: "Ce pain complet est riche en fibres et a un goût délicieux. Sa date de consommation est proche, mais il reste frais et peut être congelé pour une conservation prolongée.",
    origin: "Boulangerie locale",
    nutrition: {
      calories: "265 kcal/100g",
      carbs: "45g/100g",
      protein: "9g/100g",
      fat: "3g/100g"
    }
  },
];

// Similar products based on category
const getSimilarProducts = (currentProduct, allProducts) => {
  return allProducts
    .filter(product => 
      product.id !== currentProduct.id && 
      product.category === currentProduct.category
    )
    .slice(0, 3);
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  
  useEffect(() => {
    // Find product by ID
    const productId = Number(id);
    const foundProduct = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0]; // Fallback to first product if not found
    
    setProduct(foundProduct);
    setSelectedImage(foundProduct?.image || null);
    setSimilarProducts(getSimilarProducts(foundProduct, PRODUCTS));
  }, [id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Chargement du produit...</h2>
      </div>
    );
  }
  
  const expiryDate = new Date(product.expiryDate);
  const today = new Date();
  const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
  
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/produits" className="flex items-center text-sm text-gray-600 hover:text-ecologis-green transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour aux produits
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={selectedImage || product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Gallery */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex space-x-2">
                  {product.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 ${selectedImage === image ? 'border-ecologis-green' : 'border-transparent'}`}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} - image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <Badge variant="outline" className="mt-1">{product.category}</Badge>
                </div>
                <Badge className="bg-ecologis-orange text-white">-{product.discount}%</Badge>
              </div>
              
              <div className="mt-4 flex items-end">
                <span className="text-gray-500 line-through text-lg mr-2">{product.originalPrice.toFixed(2)}€</span>
                <span className="text-ecologis-green font-bold text-3xl">{product.discountPrice.toFixed(2)}€</span>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mt-6 p-4 bg-ecologis-green/10 rounded-lg">
                <h3 className="font-medium mb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ecologis-green mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pourquoi ce produit est déstocké
                </h3>
                <p className="text-gray-700 text-sm">{product.reason === "Esthétique" 
                  ? "Ce produit présente des défauts esthétiques mais est parfaitement comestible." 
                  : product.reason === "Date courte" 
                    ? "Ce produit a une date de péremption proche mais est parfaitement bon à consommer." 
                    : "Ce produit est déstocké pour d'autres raisons mais est parfaitement consommable."}
                </p>
              </div>
              
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Quantité</h3>
                  <div className="flex items-center mt-2 border rounded-md">
                    <button 
                      className="px-3 py-1 border-r" 
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-6 py-1">{quantity}</span>
                    <button 
                      className="px-3 py-1 border-l" 
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <h3 className="font-medium">Sous-total</h3>
                  <span className="text-ecologis-green font-bold text-xl">
                    {(product.discountPrice * quantity).toFixed(2)}€
                  </span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Button className="w-full bg-ecologis-green hover:bg-ecologis-green-dark">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Ajouter au panier
                </Button>
                
                <div className="text-center p-2 border rounded-lg bg-gray-50">
                  <p className="text-sm">
                    <span className={`font-medium ${daysUntilExpiry <= 3 ? 'text-ecologis-orange' : 'text-ecologis-green'}`}>
                      Encore bon !
                    </span> À consommer avant le {expiryDate.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="border-t p-6">
            <h3 className="font-semibold text-lg mb-4">Informations complémentaires</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-sm text-gray-500 mb-1">Origine</h4>
                <p>{product.origin}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-gray-500 mb-1">Conservation</h4>
                <p>{product.category === "Produits frais" || product.category === "Boulangerie" 
                  ? "À conserver au réfrigérateur" 
                  : product.category === "Surgelés" 
                    ? "À conserver au congélateur (-18°C)" 
                    : "À conserver dans un endroit frais et sec"}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-gray-500 mb-1">Réduction</h4>
                <p>-{product.discount}% par rapport au prix habituel</p>
              </div>
            </div>
          </div>
          
          {/* Nutrition Facts */}
          {product.nutrition && (
            <div className="border-t p-6">
              <h3 className="font-semibold text-lg mb-4">Valeurs nutritionnelles</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">Calories</h4>
                  <p className="font-semibold">{product.nutrition.calories}</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">Glucides</h4>
                  <p className="font-semibold">{product.nutrition.carbs}</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">Protéines</h4>
                  <p className="font-semibold">{product.nutrition.protein}</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">Lipides</h4>
                  <p className="font-semibold">{product.nutrition.fat}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Produits similaires</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow group">
                  <Link to={`/produit/${product.id}`} className="block">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 right-2 bg-ecologis-orange">-{product.discount}%</Badge>
                    </div>
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/produit/${product.id}`} className="block">
                      <h3 className="font-semibold text-lg hover:text-ecologis-green transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center mt-1 mb-3">
                      <span className="text-gray-500 line-through text-sm mr-2">{product.originalPrice.toFixed(2)}€</span>
                      <span className="text-ecologis-green font-bold text-lg">{product.discountPrice.toFixed(2)}€</span>
                    </div>
                    
                    <Button className="w-full bg-ecologis-green hover:bg-ecologis-green-dark">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Ajouter au panier
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
