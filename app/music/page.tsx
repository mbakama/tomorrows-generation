"use client"


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Heart, ExternalLink } from "lucide-react"
import YouTube from 'react-youtube'
import Image from 'next/image'
import React, { useState } from 'react'
import { YouTubeVideoPlayer } from "@/components/YouTubeVideoPlayer"

// export const metadata = {
//   title: "Musique | Tomorrow's Generation",
//   description:
//     "Écoutez et téléchargez la musique de Tomorrow's Generation, avec des compositions originales et des arrangements de prières Baha'ies.",
// }

// Album réel avec des pistes existantes
const albums = [
  {
    id: "remede",
    title: "Le remède",
    year: "2023",
    cover: "/placeholder.svg?height=300&width=300",
    description:
      "Notre album phare explorant les thèmes d'unité, de paix et de connexion spirituelle à travers des mélodies inspirantes et des paroles profondes.",
    tracks: [
      { title: "Le remède", duration: "4:32", preview: "#", isAvailable: true },
      { title: "Sala Ete", duration: "5:00", preview: "#", isAvailable: true },
      { title: "La vraie liberté", duration: "4:43", preview: "#", isAvailable: true },
      { title: "Ceci aussi passera", duration: "4:26", preview: "#", isAvailable: true },
      { title: "Océan de Miséricorde", duration: "6:12", preview: "#", isAvailable: true },
      { title: "Sunga nga", duration: "5:12", preview: "#", isAvailable: true },
      { title: "Il fera", duration: "5:03", preview: "#", isAvailable: true },
      { title: "Kimia nde Bomoyi", duration: "5:18", preview: "#", isAvailable: true },
      { title: "Elombeli Malamu", duration: "4:26", preview: "#", isAvailable: true },
      { title: "Eeh mokonzi na nga", duration: "4:16", preview: "#", isAvailable: true },
      { title: "Esadja", duration: "4:16", preview: "#", isAvailable: true },
    ],
  },
  {
    id: "prieres-sacrees",
    title: "Prières Sacrées",
    year: "2022",
    cover: "/placeholder.svg?height=300&width=300",
    description:
      "Une collection de prières Baha'ies mises en musique, conçues pour créer une atmosphère méditative et inspirante lors des rassemblements dévotionnels.",
    tracks: [
      { title: "Béni est l'Endroit", duration: "4:10", preview: "#", isAvailable: true },
      { title: "Ô Dieu Guide-Moi", duration: "3:22", preview: "#", isAvailable: true },
      { title: "Ô Fils de l'Esprit", duration: "5:30", preview: "#", isAvailable: true },
      { title: "Remède à Toute Souffrance", duration: "2:58", preview: "#", isAvailable: false, comingSoon: true },
      { title: "Crée en Moi un Cœur Pur", duration: "4:45", preview: "#", isAvailable: false, comingSoon: true },
    ],
  },
]

// Singles et EPs
const singles = [
  {
    title: "Unité dans la Diversité",
    releaseDate: "Janvier 2024",
    cover: "/placeholder.svg?height=200&width=200",
    description: "Notre dernier single célébrant la beauté de la diversité humaine et le principe d'unité.",
    duration: "4:17",
    isAvailable: true,
  },
  {
    title: "Méditation de l'Aube",
    releaseDate: "Mars 2024",
    cover: "/placeholder.svg?height=200&width=200",
    description: "Une composition méditative inspirée par les prières de l'aube dans la tradition Baha'ie.",
    duration: "5:23",
    isAvailable: true,
  },
  {
    title: "EP Célébration de l'Unité",
    releaseDate: "Prévu pour Juin 2024",
    cover: "/placeholder.svg?height=200&width=200",
    description: "Un EP de 4 titres explorant les thèmes de l'unité et de la paix mondiale.",
    tracks: ["Célébration de l'Unité", "Voix de la Paix", "Harmonie Mondiale", "Un Seul Peuple"],
    isAvailable: false,
    comingSoon: true,
  },
]

// Plateformes de streaming
const streamingPlatforms = [
  { name: "Spotify", url: "#", icon: "spotify", color: "#1DB954" },
  { name: "Apple Music", url: "#", icon: "apple", color: "#007AFF" },
  { name: "YouTube Music", url: "#", icon: "youtube", color: "#FF0000" },
  { name: "Amazon Music", url: "#", icon: "amazon", color: "#FF0000" },
  { name: "Deezer", url: "#", icon: "deezer", color: "#000000" },
]

export default function MusicPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Notre Musique</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez notre collection de compositions originales et d'arrangements de prières et d'écrits Baha'is, conçus
          pour élever l'âme et inspirer la connexion spirituelle.
        </p>
      </div>

      {/* Plateformes de streaming */}
      <div className="mb-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Écoutez-nous sur</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {streamingPlatforms.map((platform) => (
            <Button key={platform.name} variant="outline" asChild className="gap-2" style={{ color: platform.color }}>
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                <span>{platform.name}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="albums" className="w-full mb-16">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="singles">Singles & EPs</TabsTrigger>
        </TabsList>

        <TabsContent value="albums" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {albums.map((album) => (
              <Card key={album.id} className="overflow-hidden flex flex-col">
                <div className="relative aspect-square w-full">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{album.title}</CardTitle>
                  <CardDescription>{album.year}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{album.description}</p>
                  <div className="space-y-2">
                    {album.tracks.map((track, index) => (
                      <div key={index} className="flex justify-between items-center p-2 hover:bg-muted rounded-md">
                        <div className="flex items-center gap-3">
                          <Button size="icon" variant="ghost" className="h-8 w-8" disabled={!track.isAvailable}>
                            <Play className="h-4 w-4" />
                            <span className="sr-only">Jouer {track.title}</span>
                          </Button>
                          <span className="font-medium">{track.title}</span>
                          {track.comingSoon && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Bientôt</span>
                          )}
                        </div>
                        <span className="text-muted-foreground text-sm">{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    Sauvegarder
                  </Button>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="singles" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {singles.map((single, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-square w-full">
                  <img
                    src={single.cover || "/placeholder.svg"}
                    alt={single.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{single.title}</CardTitle>
                  <CardDescription>{single.releaseDate}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{single.description}</p>
                  {single.duration && (
                    <div className="flex justify-between items-center p-2 hover:bg-muted rounded-md">
                      <div className="flex items-center gap-3">
                        <Button size="icon" variant="ghost" className="h-8 w-8" disabled={!single.isAvailable}>
                          <Play className="h-4 w-4" />
                          <span className="sr-only">Jouer {single.title}</span>
                        </Button>
                        <span className="font-medium">{single.title}</span>
                        {single.comingSoon && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Bientôt</span>
                        )}
                      </div>
                      <span className="text-muted-foreground text-sm">{single.duration}</span>
                    </div>
                  )}
                  {single.tracks && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium mb-2">Pistes:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {single.tracks.map((track, idx) => (
                          <li key={idx}>{track}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  {single.isAvailable ? (
                    <>
                      <Button variant="outline" size="sm">
                        <Heart className="mr-2 h-4 w-4" />
                        Sauvegarder
                      </Button>
                      <Button size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger
                      </Button>
                    </>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      Bientôt disponible
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Section concerts en direct */}
      {/* <div className="bg-primary/5 rounded-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Enregistrements en direct</h2>
          <p className="text-lg mb-6">
            Découvrez l'expérience immersive de nos performances en direct. Ces enregistrements capturent l'énergie et
            la connexion spirituelle de nos concerts.
          </p>
          <div className="aspect-video w-full max-w-2xl mx-auto bg-black/10 rounded-lg flex items-center justify-center">
            <Button size="lg" className="gap-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
              <Play className="h-5 w-5 flex-shrink-0" />
              <span className="hidden sm:inline">Regarder notre dernier concert</span>
              <span className="sm:hidden">Notre dernier concert</span>
            </Button>
          </div>
        </div>
      </div> */}



      <div className="bg-primary/5 rounded-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Enregistrements en direct</h2>
          <p className="text-lg mb-6">
            Découvrez l'expérience immersive de nos performances en direct. Ces enregistrements capturent l'énergie et
            la connexion spirituelle de nos concerts.
          </p>
          <div className="aspect-video w-full max-w-2xl mx-auto bg-black/10 rounded-lg flex items-center justify-center relative">
            {/* YouTube Video Container */}
            {videoPlaying ? (
              <YouTubeVideoPlayer
                videoId="voZNFCVENnY"
                thumbnailUrl="https://img.youtube.com/vi/voZNFCVENnY/maxresdefault.jpg"
                title="Concert Tomorrow's Generation"
              />
            ) : (
              <>
                <Image
                  src="https://img.youtube.com/vi/voZNFCVENnY/maxresdefault.jpg"
                  alt="Concert Tomorrow's Generation"
                  fill
                  className="object-cover rounded-lg"
                />
                <Button
                  size="lg"
                  className="gap-2 z-10 absolute"
                  onClick={() => setVideoPlaying(true)}
                >
                  <Play className="h-5 w-5 flex-shrink-0" />
                  <span className="hidden sm:inline">Regarder notre dernier concert</span>
                  <span className="sm:hidden">Notre dernier concert</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Section licence */}
      <div className="bg-primary/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Licence de notre musique</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Notre musique est disponible pour une utilisation lors de rassemblements dévotionnels, d'événements
          communautaires et de réflexion personnelle. Pour les utilisations éducatives ou commerciales, veuillez nous
          contacter pour des informations de licence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="mailto:licensing@tomorrowsgeneration.org">Contacter pour une licence</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resources">Voir nos ressources musicales</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

