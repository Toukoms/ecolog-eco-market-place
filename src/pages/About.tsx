import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-ecologis-green text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre mission anti-gaspillage
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Chez ECOLOGIS, nous sommes déterminés à créer un monde où aucun
            aliment comestible n'est jeté.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre histoire</h2>
              <p className="text-gray-700 mb-4">
                Fondée en mai 2025, ECOLOGIS est née d'un constat simple :
                chaque année à Madagascar, près de 3 millions de tonnes de
                nourriture sont gaspillées, alors que des millions de personnes
                ont du mal à se nourrir correctement.
              </p>
              <p className="text-gray-700 mb-4">
                Nous avons constater que plusieurs produits sont jetés à la
                poubelle avant même mis au marchés.
              </p>
              <p className="text-gray-700">
                ECOLOGIS est née comme <b>réseau de destockage</b>, proposant
                des produits sauvés du gaspillage à des prix réduits dans un but
                de reduire le gaspillage et donner du pouvoir d'achat aux
                fammilles malagasy à revenue modeste.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl w-full max-h-80">
              <img
                src="/products.png"
                alt="Cagettes de légumes"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre impact</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Depuis notre lancement, nous avons contribué à réduire
            significativement le gaspillage alimentaire
          </p>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-ecologis-green mb-2">
                150 tonnes
              </div>
              <p className="text-gray-700">
                de nourriture sauvée du gaspillage
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-ecologis-green mb-2">
                95 tonnes
              </div>
              <p className="text-gray-700">d'émissions de CO2 évitées</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-ecologis-green mb-2">
                32 000
              </div>
              <p className="text-gray-700">
                familles ont bénéficié de produits à prix réduits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos valeurs</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-ecologis-green/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-ecologis-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Responsabilité environnementale
                </h3>
                <p className="text-gray-700">
                  Nous nous engageons à réduire l'impact environnemental du
                  gaspillage alimentaire en valorisant des produits qui seraient
                  autrement jetés.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-ecologis-green/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-ecologis-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
                <p className="text-gray-700">
                  Nous croyons que tout le monde devrait avoir accès à une
                  alimentation de qualité à des prix abordables, quelle que soit
                  sa situation financière.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-ecologis-green/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-ecologis-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparence</h3>
                <p className="text-gray-700">
                  Nous sommes totalement transparents sur l'origine de nos
                  produits, leur qualité et la raison pour laquelle ils sont
                  proposés à prix réduits.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 bg-ecologis-green/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-ecologis-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Communauté</h3>
                <p className="text-gray-700">
                  Nous cherchons à créer une communauté engagée qui partage
                  notre passion pour la lutte contre le gaspillage alimentaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Des personnes passionnées qui travaillent chaque jour pour réduire
            le gaspillage alimentaire
          </p>
        </div>

        {/* <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  alt="Anne Dupont"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Anne Dupont</h3>
                <p className="text-gray-600">Fondatrice & CEO</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  alt="Thomas Martin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Thomas Martin</h3>
                <p className="text-gray-600">Directeur des Opérations</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  alt="Sophie Legrand"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Sophie Legrand</h3>
                <p className="text-gray-600">Responsable Partenariats</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                  alt="Lucas Bernard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Lucas Bernard</h3>
                <p className="text-gray-600">Responsable Logistique</p>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ecologis-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre mission</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Que vous soyez un consommateur soucieux de l'environnement ou un
            producteur à la recherche d'un débouché pour vos produits déclassés,
            nous serions ravis de vous compter parmi notre communauté.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-white text-ecologis-green hover:bg-gray-100"
            >
              <Link to="/produits">Découvrir nos produits</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/20"
            >
              <Link to="/contact">Devenir partenaire</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
