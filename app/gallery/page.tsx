import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/imgs/dog1.jpg",
      alt: "Szczęśliwy golden retriever po zabiegu",
      title: "Max po udanej operacji",
    },
    {
      src: "/imgs/dog3.jpg",
      alt: "Labrador podczas kontroli",
      title: "Bella na rutynowej kontroli",
    },
    {
      src: "/imgs/dog2.jpg",
      alt: "Mały pies rasy york",
      title: "Charlie po szczepieniu",
    },
    {
      src: "/imgs/dog4.jpg",
      alt: "Border collie u weterynarza",
      title: "Luna podczas badania",
    },
    {
      src: "/imgs/dog1.jpg",
      alt: "Szczeniak husky",
      title: "Rocky - pierwsza wizyta",
    },
    {
      src: "/imgs/dog3.jpg",
      alt: "Pies rasy beagle",
      title: "Milo po leczeniu",
    },
    {
      src: "/imgs/dog3.jpg",
      alt: "Owczarek niemiecki",
      title: "Rex po rehabilitacji",
    },
    {
      src: "/imgs/dog2.jpg",
      alt: "Mały pies mieszaniec",
      title: "Buddy - zdrowy i szczęśliwy",
    },
    {
      src: "/imgs/dog5.jpg",
      alt: "Pies rasy shih tzu",
      title: "Coco po zabiegu pielęgnacyjnym",
    },
  ];
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Galeria <span className="text-green-600">szczęśliwych</span> pacjentów
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zobacz naszych czworonożnych pacjentów po udanych zabiegach i leczeniu. Każdy uśmiech i merdający ogon to
              nasza największa nagroda.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Historie sukcesu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Poznaj historie naszych pacjentów, którzy odzyskali zdrowie dzięki naszej opiece
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <Image
                  src="/imgs/dog1.jpg"
                  alt="Max - golden retriever"
                  width={300}
                  height={200}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Max - Operacja biodra</h3>
              <p className="text-gray-600 mb-4">
                Max przyszedł do nas z problemami z biodrem. Po udanej operacji i rehabilitacji znów biega i bawi się
                jak szczeniak.
              </p>
              <div className="text-sm text-green-600 font-medium">Czas leczenia: 6 tygodni</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <Image
                  src="/imgs/dog5.jpg"
                  alt="Bella - labrador"
                  width={300}
                  height={200}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bella - Leczenie alergii</h3>
              <p className="text-gray-600 mb-4">
                Bella cierpiała na przewlekłe alergie skórne. Dzięki specjalistycznemu leczeniu jej skóra jest teraz
                zdrowa i lśniąca.
              </p>
              <div className="text-sm text-green-600 font-medium">Czas leczenia: 3 miesiące</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <Image
                  src="/imgs/dog3.jpg"
                  alt="Charlie - york"
                  width={300}
                  height={200}
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Charlie - Leczenie serca</h3>
              <p className="text-gray-600 mb-4">
                Charlie miał problemy z sercem. Dzięki wczesnej diagnozie i odpowiedniemu leczeniu prowadzi normalne,
                aktywne życie.
              </p>
              <div className="text-sm text-green-600 font-medium">Leczenie długoterminowe</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Twój pupil też może być tu!</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Umów wizytę już dziś i daj swojemu zwierzakowi szansę na zdrowe, szczęśliwe życie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact">
              <Button size="lg" className="border-none bg-white text-green-600 hover:text-white hover:bg-green-600 hover:brightness-90 px-8 py-4 text-lg cursor-pointer">
                Umów się na wizytę
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
