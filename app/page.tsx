import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Najlepsza opieka dla Twojego pupila
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Nowoczesna
                  <span className="text-green-600 block">weterynaria</span>
                  przyszłości
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Zapewniamy profesjonalną opiekę weterynaryjną z wykorzystaniem najnowszych technologii. Twój pupil
                  zasługuje na najlepsze.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg cursor-pointer">
                    Umów wizytę
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-200 text-green-700 hover:bg-green-50 px-8 py-4 text-lg cursor-pointer"
                  >
                    Dowiedz się więcej
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/imgs/happydog.jpg"
                  alt="Szczęśliwy pies u weterynarza"
                  width={500}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dlaczego wybierają nas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Łączymy tradycyjną opiekę weterynaryjną z nowoczesnymi rozwiązaniami
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pełna opieka</h3>
              <p className="text-gray-600">
                Kompleksowa opieka weterynaryjna od profilaktyki po zaawansowane zabiegi chirurgiczne.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nowoczesny sprzęt</h3>
              <p className="text-gray-600">
                Wykorzystujemy najnowsze technologie diagnostyczne i terapeutyczne dla najlepszych rezultatów.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dostępność 24/7</h3>
              <p className="text-gray-600">Pogotowie weterynaryjne dostępne przez całą dobę w przypadkach nagłych.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Gotowy na najlepszą opiekę dla swojego pupila?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Umów wizytę już dziś i przekonaj się, dlaczego tysiące właścicieli zwierząt nam ufa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="border-none bg-white text-green-600 hover:text-white hover:brightness-90 px-8 py-4 text-lg cursor-pointer">
              Umów wizytę online
            </Button>
            <Button
              size="lg"
              variant="outline"
               className="border-none bg-white text-green-600 hover:text-white hover:bg-green-600 hover:brightness-90 px-8 py-4 text-lg cursor-pointer"
            >
              Zadzwoń: +48 123 456 789
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
