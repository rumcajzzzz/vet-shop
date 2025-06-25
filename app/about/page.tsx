import { Heart, Users, Award, Stethoscope } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              O naszej <span className="text-green-600">klinice</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Od ponad 15 lat zapewniamy najwyższą jakość opieki weterynaryjnej, łącząc doświadczenie z najnowszymi
              technologiami medycznymi.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Nasza misja</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Wierzymy, że każde zwierzę zasługuje na najlepszą opiekę medyczną. Nasza misja to zapewnienie
                kompleksowej, współczunej i profesjonalnej opieki weterynaryjnej, która pomoże Twojemu pupilowi żyć
                długo i zdrowo.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stosujemy holistyczne podejście do zdrowia zwierząt, koncentrując się nie tylko na leczeniu chorób, ale
                także na profilaktyce i edukacji właścicieli.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/imgs/vetwdog.png"
                alt="Weterynarz z psem"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasze wartości</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kierujemy się najwyższymi standardami etycznymi i profesjonalnymi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Współczucie</h3>
              <p className="text-gray-600">Traktujemy każde zwierzę z miłością i szacunkiem</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Doskonałość</h3>
              <p className="text-gray-600">Dążymy do najwyższych standardów w każdym aspekcie pracy</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Zespół</h3>
              <p className="text-gray-600">Współpracujemy jako zgrany zespół specjalistów</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <Stethoscope className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Innowacje</h3>
              <p className="text-gray-600">Wykorzystujemy najnowsze technologie medyczne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasz zespół</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Doświadczeni specjaliści z pasją do pomocy zwierzętom
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Image
                src="/imgs/womanvet1.jpg"
                alt="Dr Anna Kowalska"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr Anna Kowalska</h3>
              <p className="text-green-600 font-medium mb-4">Główny weterynarz</p>
              <p className="text-gray-600">15 lat doświadczenia w chirurgii i medycynie wewnętrznej zwierząt małych.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Image
                src="/imgs/manvet.png"
                alt="Dr Piotr Nowak"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr Piotr Nowak</h3>
              <p className="text-green-600 font-medium mb-4">Specjalista chirurg</p>
              <p className="text-gray-600">Ekspert w dziedzinie chirurgii ortopedycznej i neurochirurgii zwierząt.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Image
                src="/imgs/womanvet2.jpg"
                alt="Dr Maria Wiśniewska"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr Maria Wiśniewska</h3>
              <p className="text-green-600 font-medium mb-4">Specjalista dermatolog</p>
              <p className="text-gray-600">Specjalizuje się w dermatologii i alergologii zwierząt domowych.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
