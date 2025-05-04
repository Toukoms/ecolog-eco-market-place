import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { calculateDiscount } from "@/lib/discount";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Mock product data with essential items
const PRODUCTS = [
  {
    id: 1,
    name: "Spaghetti",
    image: "/spaghetti.png",
    category: "Épicerie",
    originalPrice: 3400,
    expiryDate: "2025-07-20",
    reason: "Emballage abîmé",
    discount: 16,
    unit: "unité",
  },
  {
    id: 2,
    name: "Sardine",
    image: "/sardines.jpg",
    category: "Épicerie",
    originalPrice: 4500,
    expiryDate: "2025-08-15",
    reason: "Emballage abîmé",
    discount: 26,
    unit: "unité",
  },
  {
    id: 3,
    name: "Lait demi-écrémé",
    image: "/lait.png",
    category: "Produits frais",
    originalPrice: 8000,
    expiryDate: "2025-06-10",
    reason: "Date courte",
    discount: 32,
    unit: "boîte",
  },
  {
    id: 4,
    name: "Mofo dopaina",
    image: "/pain.png",
    category: "Boulangerie",
    originalPrice: 600,
    expiryDate: "2025-08-04",
    reason: "Date courte",
    discount: 38,
    unit: "unité",
  },
  {
    id: 7,
    name: "Farine de blé",
    image: "/farine.png",
    category: "Épicerie",
    originalPrice: 4000,
    expiryDate: "2025-08-20",
    reason: "Emballage abîmé",
    discount: 42,
    unit: "kg",
  },
  {
    id: 8,
    name: "Huile de tournesol",
    image: "/huile.jpg",
    category: "Épicerie",
    originalPrice: 11000,
    expiryDate: "2025-10-15",
    reason: "Emballage abîmé",
    discount: 36,
    unit: "litre",
  },
  {
    id: 9,
    name: "Sucre en poudre",
    image: "/sugar.jpg",
    category: "Épicerie",
    originalPrice: 5600,
    expiryDate: "2026-01-15",
    reason: "Emballage abîmé",
    discount: 24,
    unit: "kg",
  },
];

// Similar products based on category
const getSimilarProducts = (currentProduct, allProducts) => {
  return allProducts
    .filter(
      (product) =>
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
    const foundProduct =
      PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0]; // Fallback to first product if not found

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
  const daysUntilExpiry = Math.floor(
    (expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
  );

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  product.discountPrice = calculateDiscount(
    product.originalPrice,
    product.discount
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/produits"
            className="flex items-center text-sm text-gray-600 hover:text-ecologis-green transition-colors"
          >
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
                      className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                        selectedImage === image
                          ? "border-ecologis-green"
                          : "border-transparent"
                      }`}
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
                  <Badge variant="outline" className="mt-1">
                    {product.category}
                  </Badge>
                </div>
                <Badge className="bg-ecologis-orange text-white">
                  -{product.discount}%
                </Badge>
              </div>

              <div className="mt-4 flex items-end">
                <span className="text-gray-500 line-through text-lg mr-2">
                  {product.originalPrice.toFixed(0)} Ar
                </span>
                <span className="text-ecologis-green font-bold text-3xl">
                  {product.discountPrice} Ar
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="mt-6 p-4 bg-ecologis-green/10 rounded-lg">
                <h3 className="font-medium mb-1 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ecologis-green mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Pourquoi ce produit est déstocké
                </h3>
                <p className="text-gray-700 text-sm">
                  {product.reason === "Esthétique"
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
                    {product.discountPrice * quantity} Ar
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
                    <span
                      className={`font-medium ${
                        daysUntilExpiry <= 3
                          ? "text-ecologis-orange"
                          : "text-ecologis-green"
                      }`}
                    >
                      Encore bon !
                    </span>{" "}
                    À consommer avant le {expiryDate.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="border-t p-6">
            <h3 className="font-semibold text-lg mb-4">
              Informations complémentaires
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-sm text-gray-500 mb-1">
                  Origine
                </h4>
                <p>{product.origin}</p>
              </div>

              <div>
                <h4 className="font-medium text-sm text-gray-500 mb-1">
                  Conservation
                </h4>
                <p>
                  {product.category === "Produits frais" ||
                  product.category === "Boulangerie"
                    ? "À conserver au réfrigérateur"
                    : product.category === "Surgelés"
                    ? "À conserver au congélateur (-18°C)"
                    : "À conserver dans un endroit frais et sec"}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-sm text-gray-500 mb-1">
                  Réduction
                </h4>
                <p>-{product.discount}% par rapport au prix habituel</p>
              </div>
            </div>
          </div>

          {/* Nutrition Facts */}
          {product.nutrition && (
            <div className="border-t p-6">
              <h3 className="font-semibold text-lg mb-4">
                Valeurs nutritionnelles
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">
                    Calories
                  </h4>
                  <p className="font-semibold">{product.nutrition.calories}</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">
                    Glucides
                  </h4>
                  <p className="font-semibold">{product.nutrition.carbs}</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">
                    Protéines
                  </h4>
                  <p className="font-semibold">{product.nutrition.protein}</p>
                </div>

                <div className="p-3 bg-gray-50 rounded-lg text-center">
                  <h4 className="font-medium text-sm text-gray-500 mb-1">
                    Lipides
                  </h4>
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
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow group"
                >
                  <Link to={`/produit/${product.id}`} className="block">
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 right-2 bg-ecologis-orange">
                        -{product.discount}%
                      </Badge>
                    </div>
                  </Link>

                  <div className="p-4">
                    <Link to={`/produit/${product.id}`} className="block">
                      <h3 className="font-semibold text-lg hover:text-ecologis-green transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center mt-1 mb-3">
                      <span className="text-gray-500 line-through text-sm mr-2">
                        {product.originalPrice.toFixed(2)}€
                      </span>
                      <span className="text-ecologis-green font-bold text-lg">
                        {product.discountPrice} Ar
                      </span>
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
