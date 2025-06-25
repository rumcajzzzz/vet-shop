import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
  const services = [
    {
      category: "Konsultacje",
      items: [
        { name: "Konsultacja podstawowa", price: "120 zł" },
        { name: "Konsultacja specjalistyczna", price: "180 zł" },
        { name: "Wizyta domowa", price: "200 zł" },
        { name: "Konsultacja telefoniczna", price: "50 zł" },
      ],
    },
    {
      category: "Diagnostyka",
      items: [
        { name: "Badanie krwi podstawowe", price: "80 zł" },
        { name: "Badanie krwi rozszerzone", price: "150 zł" },
        { name: "RTG (1 projekcja)", price: "100 zł" },
        { name: "USG jamy brzusznej", price: "120 zł" },
        { name: "EKG", price: "80 zł" },
      ],
    },
    {
      category: "Zabiegi",
      items: [
        { name: "Kastracja psa (do 20kg)", price: "400 zł" },
        { name: "Kastracja psa (powyżej 20kg)", price: "500 zł" },
        { name: "Kastracja kotki", price: "300 zł" },
        { name: "Kastracja kota", price: "200 zł" },
        { name: "Usunięcie guza skóry", price: "250 zł" },
      ],
    },
    {
      category: "Profilaktyka",
      items: [
        { name: "Szczepienie podstawowe", price: "80 zł" },
        { name: "Szczepienie przeciw wściekliźnie", price: "60 zł" },
        { name: "Odrobaczanie", price: "30 zł" },
        { name: "Chipowanie", price: "80 zł" },
        { name: "Paszport europejski", price: "50 zł" },
      ],
    },
  ]

  const packages = [
    {
      name: "Pakiet Szczeniak",
      price: "299 zł",
      description: "Kompleksowa opieka dla młodych psów",
      features: [
        "Konsultacja weterynaryjna",
        "Szczepienia podstawowe",
        "Odrobaczanie",
        "Chipowanie",
        "Porada żywieniowa",
      ],
    },
    {
      name: "Pakiet Senior",
      price: "399 zł",
      description: "Specjalna opieka dla starszych zwierząt",
      features: [
        "Konsultacja geriatryczna",
        "Badania krwi rozszerzone",
        "EKG",
        "Kontrola ciśnienia",
        "Plan opieki długoterminowej",
      ],
    },
    {
      name: "Pakiet Wellness",
      price: "199 zł",
      description: "Regularna profilaktyka zdrowia",
      features: [
        "Konsultacja profilaktyczna",
        "Badanie podstawowe",
        "Szczepienia",
        "Kontrola wagi",
        "Porada behawioralna",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Przejrzysty <span className="text-green-600">cennik</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy konkurencyjne ceny przy najwyższej jakości usług weterynaryjnych. Bez ukrytych kosztów, z pełną
              transparentnością.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pakiety usług</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wybierz pakiet dostosowany do potrzeb Twojego pupila
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer">Wybierz pakiet</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cennik usług</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Szczegółowy wykaz wszystkich dostępnych usług</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-bold text-green-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Masz pytania o cennik?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby uzyskać szczegółowe informacje o kosztach leczenia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" className="border-none bg-white text-green-600 hover:text-white hover:bg-green-600 hover:brightness-90 px-8 py-4 text-lg cursor-pointer">
                Zapytaj o wycenę
              </Button>
            </a>
            <a href="tel:+48123456789">
              <Button
                size="lg"
                variant="outline"
                className="border-none bg-white text-green-600 hover:text-white hover:bg-green-600 hover:brightness-90 px-8 py-4 text-lg cursor-pointer"
              >
                Zadzwoń: +48 123 456 789
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
