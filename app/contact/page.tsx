"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

// Modifier le contenu principal en français
export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // Dans une application réelle, vous géreriez la soumission du formulaire ici
    setIsSubmitted(true)
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Nous serions ravis d'avoir de vos nouvelles ! Que vous ayez des questions sur notre musique, que vous
          souhaitiez nous réserver pour un événement, ou que vous soyez intéressé par une collaboration, n'hésitez pas à
          nous contacter.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
            <CardDescription>
              Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground mb-6">
                  Merci de nous avoir contactés. Nous vous répondrons dès que possible.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Envoyer un autre message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Prénom</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Nom</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Demande générale</SelectItem>
                      <SelectItem value="booking">Réservation d'événement</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="music">Licence musicale</SelectItem>
                      <SelectItem value="other">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} required />
                </div>
              </form>
            )}
          </CardContent>
          {!isSubmitted && (
            <CardFooter>
              <Button type="submit" onClick={handleSubmit} className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </Button>
            </CardFooter>
          )}
        </Card>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@tomorrowsgeneration.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-20 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold">Localisation</h3>
                  <p className="text-muted-foreground">
                    Nous sommes basés à Kinshasa, mais nous nous produisons et organisons des ateliers dans tout le
                    pays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Questions fréquemment posées</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Pouvez-vous jouer lors de notre événement ?</h3>
                <p className="text-muted-foreground">
                  Oui ! Nous sommes disponibles pour des performances lors d'événements communautaires, de
                  rassemblements dévotionnels, de conférences et de fonctions privées. Veuillez nous contacter avec les
                  détails de votre événement.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Proposez-vous des ateliers ?</h3>
                <p className="text-muted-foreground">
                  Nous proposons divers ateliers sur la musique Baha'ie, l'écriture de chansons et l'utilisation de la
                  musique dans des cadres dévotionnels. Ceux-ci peuvent être adaptés à différents groupes d'âge et
                  niveaux d'expérience.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">
                  Puis-je utiliser votre musique dans mon propre rassemblement dévotionnel ?
                </h3>
                <p className="text-muted-foreground">
                  Notre musique est disponible pour une utilisation lors de rassemblements dévotionnels. Pour d'autres
                  utilisations, veuillez nous contacter concernant les licences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Êtes-vous disponibles pour des collaborations ?</h3>
                <p className="text-muted-foreground">
                  Nous aimons collaborer avec d'autres artistes et musiciens qui partagent notre vision d'utiliser la
                  musique pour promouvoir l'unité et la croissance spirituelle. Contactez-nous pour discuter des
                  possibilités !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

