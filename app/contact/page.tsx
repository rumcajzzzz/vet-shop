"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Skontaktuj się <span className="text-green-600">z nami</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jesteśmy tutaj, aby pomóc Tobie i Twojemu pupilowi. Skontaktuj się z nami w dowolny sposób - odpowiemy jak
              najszybciej.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Informacje kontaktowe</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Znajdź nas w centrum Warszawy. Oferujemy wygodny dojazd komunikacją publiczną oraz parking dla naszych
                  klientów.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      ul. Weterynaryjna 123
                      <br />
                      00-001 Warszawa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+48123456789" className="hover:underline">
                        +48 123 456 789
                      </a>
                      <br />
                      Pogotowie:{' '}
                      <a href="tel:+48987654321" className="hover:underline">
                        +48 987 654 321
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      kontakt@vetcare.pl
                      <br />
                      recepcja@vetcare.pl
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Godziny otwarcia</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Poniedziałek - Piątek: 8:00 - 20:00</p>
                      <p>Sobota: 9:00 - 16:00</p>
                      <p>Niedziela: 10:00 - 14:00</p>
                      <p className="text-green-600 font-medium">Pogotowie: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Napisz do nas</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div>
                    <label htmlFor="petName" className="block text-sm font-medium text-gray-700 mb-2">
                      Imię zwierzaka
                    </label>
                    <Input
                      id="petName"
                      name="petName"
                      type="text"
                      value={formData.petName}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Burek"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    placeholder="Opisz problem swojego zwierzaka lub zadaj pytanie..."
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 cursor-pointer">
                  Wyślij wiadomość
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Jak nas znaleźć</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nasza klinika znajduje się w dogodnej lokalizacji z łatwym dostępem komunikacją publiczną
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1329307451324!2d21.012228316042317!3d52.22967597975724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669cbef0df%3A0x5a7d2f334bfa000!2sul.%20Weterynaryjna%20123%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1718637420000!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nagły przypadek?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Nasze pogotowie weterynaryjne jest dostępne 24 godziny na dobę, 7 dni w tygodniu. W przypadku nagłych
              sytuacji nie wahaj się zadzwonić.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+48987654321" className="hover:underline">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg cursor-pointer">
                    <Phone className="w-5 h-5 mr-2" />
                  
                    +48 987 654 321
                  
                </Button>
              </a>
              <a href="/first-aid">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-700 hover:bg-red-50 px-8 py-4 text-lg cursor-pointer"
                >
                  Pierwsza pomoc - poradnik
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
