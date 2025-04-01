import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Music, Heart, Globe, Users } from "lucide-react"

// Modifier les métadonnées en français
export const metadata = {
  title: "À propos | Tomorrow's Generation",
  description:
    "Découvrez Tomorrow's Generation, notre mission, nos valeurs et les musiciens passionnés qui composent notre groupe de musique Baha'i.",
}

// Modifier les données des membres de l'équipe en français
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chanteuse & Compositrice",
    bio: "Sarah interprète de la musique inspirée par la Foi Baha'ie depuis plus de 10 ans. Ses compositions mêlent styles traditionnels et contemporains.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Guitariste & Producteur",
    bio: "Michael apporte son expertise en production et arrangement musical pour créer des sons riches et complexes qui renforcent notre message spirituel.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Leila Ahmadi",
    role: "Pianiste & Auteure-compositrice",
    bio: "La formation classique de Leila et sa connexion profonde avec les écrits Baha'is inspirent ses compositions et performances émouvantes.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Williams",
    role: "Percussionniste & Animateur d'ateliers",
    bio: "David est spécialisé dans les percussions du monde et dirige nos ateliers interactifs sur le rythme et la construction communautaire.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

// Modifier les valeurs en français
const values = [
  {
    title: "Unité dans la diversité",
    description:
      "Nous célébrons la riche tapisserie des traditions musicales du monde entier, reflétant l'unité de l'humanité.",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    title: "Élévation spirituelle",
    description:
      "Notre musique vise à élever l'âme et à inspirer la réflexion sur notre nature et notre but spirituels.",
    icon: <Heart className="h-10 w-10 text-primary" />,
  },
  {
    title: "Construction communautaire",
    description:
      "Nous utilisons la musique comme un outil pour renforcer les liens entre les personnes et favoriser un sentiment d'appartenance.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Excellence artistique",
    description:
      "Nous visons la plus haute qualité dans nos compositions et performances, croyant que l'excellence honore le Divin.",
    icon: <Music className="h-10 w-10 text-primary" />,
  },
]

export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">À propos de nous</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Tomorrow's Generation est un collectif de musiciens dédiés à partager les enseignements spirituels de la Foi
          Baha'ie à travers le langage universel de la musique.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
          <div className="space-y-4">
            <p>
              Fondé en 2019, Tomorrow's Generation est né d'une vision partagée par un groupe de musiciens Baha'is qui
              ont reconnu le rôle puissant que la musique peut jouer dans la transformation spirituelle et la
              construction communautaire.
            </p>
            <p>
              Notre nom reflète notre engagement à nourrir le développement spirituel et artistique des générations
              futures, tout en reconnaissant notre responsabilité de créer un monde plus unifié et pacifique pour
              demain.
            </p>
            <p>
              Au fil des années, nous sommes passés de rassemblements informels à des concerts organisés, des ateliers
              et des projets d'enregistrement. Notre répertoire comprend des compositions originales et des arrangements
              de prières et chants traditionnels Baha'is, mélangeant divers styles musicaux pour atteindre un public
              plus large.
            </p>
            <p>
              À travers notre musique, nous visons à créer des espaces où des personnes de tous horizons peuvent
              expérimenter le pouvoir transformateur des mélodies spirituelles et des paroles inspirées par les
              enseignements Baha'is.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Tomorrow's Generation en concert"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-primary/5 border-primary/10">
              <CardContent className="pt-6">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="bg-primary/10 rounded-lg p-8 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
        <p className="text-xl italic max-w-3xl mx-auto">
          "À Tomorrow's Generation, notre mission est de promouvoir les valeurs fondamentales de la Foi Baha'ie à
          travers la musique, en favorisant l'unité, la paix et la compréhension entre tous les peuples. Nous nous
          efforçons d'être un phare de lumière, encourageant les autres à explorer leur spiritualité et à se connecter
          avec la communauté à travers le don de la musique."
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Rencontrez notre équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Rejoignez-nous dans notre voyage</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Nous vous invitons à explorer notre musique, à assister à nos événements et à nous rejoindre dans notre
          mission de promouvoir l'unité et la croissance spirituelle à travers les arts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/events">Événements à venir</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/music">Écoutez notre musique</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

