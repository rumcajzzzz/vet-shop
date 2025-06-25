import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function FirstAidPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Pierwsza pomoc dla <span className="text-green-600">zwierząt</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sprawdź, jak możesz pomóc swojemu pupilowi w sytuacjach nagłych – zanim dotrzesz do weterynarza.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6 space-y-16">
          {/* 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Zatrucia</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jeśli podejrzewasz, że zwierzę zjadło coś toksycznego (np. czekoladę, leki, trutkę), <b>nie wywołuj wymiotów bez konsultacji</b> z weterynarzem. Zabezpiecz próbkę substancji i natychmiast skontaktuj się z kliniką.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?width=500&height=350"
                alt="Zatrucie u psa"
                width={500}
                height={350}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <Image
                src="/placeholder.svg?width=500&height=350"
                alt="Skaleczenia u zwierzęcia"
                width={500}
                height={350}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Skaleczenia i krwawienie</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Użyj czystej gazy lub materiału, aby ucisnąć ranę i zatrzymać krwawienie. <b>Nie używaj waty</b>. Jeśli rana jest głęboka lub nie ustaje krwawienie – jak najszybciej udaj się do weterynarza.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Brak oddechu / zatrzymanie akcji serca</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Sprawdź, czy zwierzę oddycha i czy bije serce. W przypadku zatrzymania oddechu można rozpocząć <b>sztuczne oddychanie (ustami-nos)</b>. W razie braku akcji serca – rozpocznij masaż klatki piersiowej. <b>Zadzwoń po pomoc natychmiast.</b>
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?width=500&height=350"
                alt="Resuscytacja psa"
                width={500}
                height={350}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-red-600 text-white px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Nie czekaj w razie wypadku</h2>
          <p className="text-xl mb-6">W sytuacjach nagłych natychmiast skontaktuj się z naszym pogotowiem weterynaryjnym.</p>
          <a href="tel:+48987654321" className="hover:underline">
                <Button size="lg" className="bg-white text-black hover:bg-gray-700 hover:text-white text-lg cursor-pointer">
                    <Phone className="w-5 h-5 mr-2" />
                  
                    +48 987 654 321
                  
                </Button>
		  </a>
        </div>
      </section>
    </div>
  )
}
