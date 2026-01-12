"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Plus, 
  Edit, 
  Trash2, 
  Play, 
  Pause, 
  Download, 
  Upload,
  Music as MusicIcon,
  Disc
} from "lucide-react"

// Mock data - would come from API
const albums = [
  {
    id: "1",
    title: "Le remède",
    year: "2023",
    cover: "/placeholder.svg?height=300&width=300",
    description: "Notre album phare explorant les thèmes d'unité, de paix et de connexion spirituelle",
    tracks: 11,
    isPublished: true,
  },
  {
    id: "2",
    title: "Prières Sacrées",
    year: "2022",
    cover: "/placeholder.svg?height=300&width=300",
    description: "Une collection de prières Baha'ies mises en musique",
    tracks: 5,
    isPublished: true,
  },
]

const singles = [
  {
    id: "1",
    title: "Unité dans la Diversité",
    releaseDate: "Janvier 2024",
    cover: "/placeholder.svg?height=200&width=200",
    duration: "4:17",
    isPublished: true,
  },
  {
    id: "2",
    title: "Méditation de l'Aube",
    releaseDate: "Mars 2024",
    cover: "/placeholder.svg?height=200&width=200",
    duration: "5:23",
    isPublished: true,
  },
]

export default function AdminMusic() {
  const [isAddAlbumOpen, setIsAddAlbumOpen] = useState(false)
  const [isAddSingleOpen, setIsAddSingleOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion de la musique</h1>
          <p className="text-muted-foreground">
            Gérez vos albums, singles et pistes musicales
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isAddSingleOpen} onOpenChange={setIsAddSingleOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un single
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ajouter un single</DialogTitle>
                <DialogDescription>
                  Ajoutez un nouveau single à votre catalogue
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="single-title">Titre</Label>
                  <Input id="single-title" placeholder="Titre du single" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="single-date">Date de sortie</Label>
                  <Input id="single-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="single-duration">Durée</Label>
                  <Input id="single-duration" placeholder="4:17" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="single-cover">Pochette</Label>
                  <Input id="single-cover" type="file" accept="image/*" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="single-file">Fichier audio</Label>
                  <Input id="single-file" type="file" accept="audio/*" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Ajouter le single</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog open={isAddAlbumOpen} onOpenChange={setIsAddAlbumOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un album
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ajouter un album</DialogTitle>
                <DialogDescription>
                  Ajoutez un nouvel album à votre catalogue
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="album-title">Titre</Label>
                  <Input id="album-title" placeholder="Titre de l'album" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="album-year">Année</Label>
                  <Input id="album-year" type="number" placeholder="2024" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="album-description">Description</Label>
                  <Textarea id="album-description" placeholder="Description de l'album" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="album-cover">Pochette</Label>
                  <Input id="album-cover" type="file" accept="image/*" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Ajouter l'album</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="albums" className="space-y-4">
        <TabsList>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="singles">Singles</TabsTrigger>
        </TabsList>

        <TabsContent value="albums" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {albums.map((album) => (
              <Card key={album.id} className="overflow-hidden">
                <div className="aspect-square relative bg-muted">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={album.isPublished ? "default" : "secondary"}>
                      {album.isPublished ? "Publié" : "Brouillon"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Disc className="h-4 w-4" />
                    {album.title}
                  </CardTitle>
                  <CardDescription>
                    {album.year} • {album.tracks} pistes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {album.description}
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="singles" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {singles.map((single) => (
              <Card key={single.id} className="overflow-hidden">
                <div className="aspect-square relative bg-muted">
                  <img
                    src={single.cover}
                    alt={single.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={single.isPublished ? "default" : "secondary"}>
                      {single.isPublished ? "Publié" : "Brouillon"}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <MusicIcon className="h-3 w-3" />
                    {single.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {single.releaseDate} • {single.duration}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-1">
                  <Button size="sm" variant="outline">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Play className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
