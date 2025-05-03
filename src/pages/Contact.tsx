
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les meilleurs délais.",
      variant: "success",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-ecologis-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Des questions, des suggestions ou envie de collaborer ? N'hésitez pas à nous contacter.
          </p>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                  <p className="text-gray-700">
                    123 Avenue de la Nature<br />
                    75001 Paris<br />
                    France
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact</h3>
                  <p className="text-gray-700">
                    Téléphone: +33 (0)1 23 45 67 89<br />
                    Email: contact@ecologis.fr
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                  <p className="text-gray-700">
                    Lundi - Vendredi: 9h00 - 18h00<br />
                    Samedi: 10h00 - 16h00<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-600">Carte interactive ici</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input id="firstname" placeholder="Votre prénom" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input id="lastname" placeholder="Votre nom" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone (optionnel)</Label>
                  <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" />
                </div>
                
                <div className="space-y-2">
                  <Label>Sujet de votre message</Label>
                  <RadioGroup defaultValue="question">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="question" id="question" />
                      <Label htmlFor="question">Question générale</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="order" id="order" />
                      <Label htmlFor="order">Question sur une commande</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partnership" id="partnership" />
                      <Label htmlFor="partnership">Proposition de partenariat</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Autre</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Votre message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Détaillez votre demande ici..." 
                    className="min-h-[150px]" 
                    required 
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <a href="/legal/privacy" className="text-ecologis-green hover:underline">
                        politique de confidentialité
                      </a>
                      .
                    </Label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-ecologis-green hover:bg-ecologis-green-dark">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Comment puis-je suivre ma commande ?</h3>
              <p className="text-gray-700">
                Une fois votre commande expédiée, vous recevrez un e-mail contenant un lien de suivi. Vous pouvez également consulter l'état de votre commande dans votre compte client.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Quelles sont les zones de livraison ?</h3>
              <p className="text-gray-700">
                Nous livrons actuellement à Paris et sa proche banlieue. Nous travaillons à étendre notre zone de livraison dans les prochains mois.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Les produits sont-ils vraiment de bonne qualité ?</h3>
              <p className="text-gray-700">
                Oui ! Tous nos produits sont soigneusement vérifiés avant d'être mis en vente. Ils sont parfaitement comestibles et leurs qualités nutritionnelles sont identiques aux produits standards.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Comment devenir un partenaire fournisseur ?</h3>
              <p className="text-gray-700">
                Si vous êtes producteur, transformateur ou distributeur et que vous avez des produits à valoriser, contactez-nous via le formulaire ci-dessus en sélectionnant "Proposition de partenariat".
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
