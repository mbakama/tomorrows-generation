import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

// Modifier les métadonnées en français
export const metadata = {
  title: "Événements | Tomorrow's Generation",
  description: "Rejoignez Tomorrow's Generation lors de nos concerts, ateliers et événements communautaires à venir.",
}

// Modifier les données des événements en français
const events = [
  {
    id: 1,
    title: "Concert Unité dans la Diversité",
    date: "15 juin 2025",
    time: "19h00 - 21h30",
    location: "Centre des Arts Communautaires, New York",
    description:
      "Rejoignez-nous pour une soirée de musique inspirante célébrant le principe d'unité dans la diversité. Ce concert présente des compositions originales inspirées par les écrits Baha'is.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Atelier Mélodies Sacrées",
    date: "8 juillet 2025",
    time: "14h00 - 17h00",
    location: "Salle Harmonie, Boston",
    description:
      "Apprenez à incorporer des thèmes spirituels dans les compositions musicales. Cet atelier interactif convient aux musiciens de tous niveaux.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Autonomisation des Jeunes par la Musique",
    date: "20 août 2025",
    time: "10h00 - 16h00",
    location: "Centre Communautaire Riverside, Chicago",
    description:
      "Un événement d'une journée pour les jeunes musiciens afin d'explorer comment la musique peut être un outil de changement social positif et de croissance spirituelle.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Prières en Harmonie",
    date: "12 septembre 2025",
    time: "18h30 - 20h30",
    location: "Jardin de la Paix, San Francisco",
    description:
      "Une soirée intime de prières musicales et de méditation, réunissant diverses traditions dans un esprit d'unité.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function EventsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Modifier le contenu principal en français */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Événements à venir</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Rejoignez-nous lors de nos concerts, ateliers et rassemblements communautaires où nous partageons la beauté de
          la musique Baha'ie avec le monde.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/events/${event.id}`}>En savoir plus</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Organisez un événement</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Intéressé à faire jouer Tomorrow's Generation lors de votre événement communautaire, rassemblement dévotionnel
          ou occasion spéciale ? Nous serions ravis de collaborer avec vous.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </div>
    </div>
  )
}

