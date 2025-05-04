import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MinusCircle,
  PlusCircle,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const initialCart = [
  {
    id: 1,
    name: "Spaghetti",
    image: "/spaghetti.png",
    category: "Épicerie",
    price: 2850,
    quantity: 2,
    expiryDate: "2025-07-20",
  },
  {
    id: 2,
    name: "Vary Gasy",
    image: "/vary.jpg",
    category: "Épicerie",
    price: 3750,
    quantity: 12,
    expiryDate: "2025-08-15",
    unit: "kg",
  },
  {
    id: 4,
    name: "Mofo dopaina",
    image: "/pain.png",
    category: "Boulangerie",
    price: 350,
    quantity: 38,
    expiryDate: "2025-08-04",
    unit: "unité",
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast("Article retiré", {
      description: "L'article a été retiré de votre panier",
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 3.99 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    toast("Commande validée", {
      description: "Merci pour votre commande anti-gaspi !",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/produits"
            className="flex items-center text-sm text-gray-600 hover:text-ecologis-green transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Continuer mes achats
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-2">Votre panier</h1>
        <p className="text-gray-600 mb-8">
          {cartItems.length === 0
            ? "Votre panier est vide"
            : `${cartItems.length} article${
                cartItems.length > 1 ? "s" : ""
              } dans votre panier`}
        </p>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-semibold mb-2">
              Votre panier est vide
            </h2>
            <p className="text-gray-600 mb-6">
              Il est temps de découvrir nos produits à sauver !
            </p>
            <Button
              className="bg-ecologis-green hover:bg-ecologis-green-dark"
              asChild
            >
              <Link to="/produits">Voir les produits</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="p-6">
                  <div className="hidden md:grid grid-cols-12 gap-4 mb-4 text-sm text-gray-500 font-medium">
                    <div className="col-span-6">Produit</div>
                    <div className="col-span-2 text-center">Prix</div>
                    <div className="col-span-2 text-center">Quantité</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>

                  <Separator className="mb-6" />

                  {cartItems.map((item) => (
                    <div key={item.id} className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        <div className="col-span-1 md:col-span-2">
                          <div className="aspect-square w-20 h-20 rounded-md overflow-hidden bg-gray-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="col-span-11 md:col-span-4">
                          <Link
                            to={`/produit/${item.id}`}
                            className="font-semibold hover:text-ecologis-green"
                          >
                            {item.name}
                          </Link>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            <span className="ml-2 text-xs text-gray-500">
                              À consommer avant le{" "}
                              {new Date(item.expiryDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <div className="col-span-3 md:col-span-2 text-center">
                          <span className="md:hidden text-sm text-gray-500">
                            Prix:{" "}
                          </span>
                          <span>{item.price.toFixed(0)}€</span>
                        </div>

                        <div className="col-span-5 md:col-span-2 flex items-center justify-center">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-500 hover:text-ecologis-green"
                          >
                            <MinusCircle size={18} />
                          </button>
                          <span className="mx-3 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-500 hover:text-ecologis-green"
                          >
                            <PlusCircle size={18} />
                          </button>
                        </div>

                        <div className="col-span-4 md:col-span-2 text-right">
                          <span className="md:hidden text-sm text-gray-500">
                            Total:{" "}
                          </span>
                          <span className="font-semibold">
                            {(item.price * item.quantity).toFixed(0)}€
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="md:hidden ml-3 text-red-500 hover:text-red-700"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>

                      <div className="hidden md:flex justify-end mt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={16} className="mr-1" />
                          Retirer
                        </Button>
                      </div>

                      <Separator className="mt-6 mb-6" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">
                  Résumé de la commande
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sous-total</span>
                    <span>{subtotal.toFixed(0)}€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span>{shipping.toFixed(0)}€</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-ecologis-green">
                      {total.toFixed(0)}€
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-ecologis-green hover:bg-ecologis-green-dark"
                    onClick={handleCheckout}
                  >
                    Valider ma commande
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/produits">Continuer mes achats</Link>
                  </Button>
                </div>

                <div className="mt-6 text-xs text-gray-500 text-center">
                  <p>Satisfait ou remboursé sous 14 jours</p>
                  <p className="mt-1">
                    Livraison à domicile ou en point relais
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
