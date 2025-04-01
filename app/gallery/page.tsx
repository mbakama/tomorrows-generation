import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Modifier les métadonnées en français
export const metadata = {
  title: "Galerie | Tomorrow's Generation",
  description:
    "Découvrez les photos et vidéos des performances, ateliers et événements communautaires de Tomorrow's Generation.",
}

// Modifier les données des photos en français
const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Concert à la Salle de l'Unité",
    category: "performances",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Atelier avec des jeunes participants",
    category: "workshops",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Session d'enregistrement en studio",
    category: "behind-the-scenes",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Rassemblement communautaire avec musique",
    category: "community",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Performance en plein air au Festival de l'Unité",
    category: "performances",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Session collaborative d'écriture de chansons",
    category: "workshops",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Répétition de groupe",
    category: "behind-the-scenes",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Rassemblement dévotionnel avec musique",
    category: "community",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Performance internationale",
    category: "performances",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Atelier de musique et d'arts",
    category: "workshops",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Séance photo pour la couverture d'album",
    category: "behind-the-scenes",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Projet de service communautaire",
    category: "community",
  },
]

export default function GalleryPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Modifier le contenu principal en français */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Galerie</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explorez les moments de nos performances, ateliers et événements communautaires à travers ces souvenirs
          visuels.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="performances">Performances</TabsTrigger>
          <TabsTrigger value="workshops">Ateliers</TabsTrigger>
          <TabsTrigger value="behind-the-scenes">Coulisses</TabsTrigger>
          <TabsTrigger value="community">Communauté</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <GalleryItem key={photo.id} photo={photo} />
            ))}
          </div>
        </TabsContent>

        {["performances", "workshops", "behind-the-scenes", "community"].map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos
                .filter((photo) => photo.category === category)
                .map((photo) => (
                  <GalleryItem key={photo.id} photo={photo} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="bg-primary/5 rounded-lg p-8 text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Partagez vos photos</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Avez-vous assisté à l'un de nos événements ? Nous aimerions voir et partager vos photos ! Identifiez-nous sur
          les réseaux sociaux ou envoyez-nous directement vos photos.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-background px-4 py-2 rounded-full text-sm font-medium">#TomorrowsGeneration</div>
          <div className="bg-background px-4 py-2 rounded-full text-sm font-medium">#MusiqueBAhaie</div>
          <div className="bg-background px-4 py-2 rounded-full text-sm font-medium">#MusiquePourl'Unité</div>
        </div>
      </div>
    </div>
  )
}

function GalleryItem({ photo }) {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm">{photo.alt}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

