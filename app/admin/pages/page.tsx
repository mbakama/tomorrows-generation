"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus, 
  Edit, 
  Eye, 
  Trash2, 
  FileText,
  Globe,
  Home,
  Info,
  Mail,
  Calendar,
  Music as MusicIcon,
  Image as ImageIcon
} from "lucide-react"

// Mock data - would come from API
const pages = [
  {
    id: "home",
    title: "Accueil",
    slug: "/",
    description: "Page d'accueil principale",
    lastModified: "2024-01-15",
    status: "published",
    icon: Home,
  },
  {
    id: "about",
    title: "À propos",
    slug: "/about",
    description: "Présentation du groupe et mission",
    lastModified: "2024-01-10",
    status: "published",
    icon: Info,
  },
  {
    id: "music",
    title: "Musique",
    slug: "/music",
    description: "Catalogue musical et albums",
    lastModified: "2024-01-12",
    status: "published",
    icon: MusicIcon,
  },
  {
    id: "events",
    title: "Événements",
    slug: "/events",
    description: "Concerts et événements à venir",
    lastModified: "2024-01-08",
    status: "published",
    icon: Calendar,
  },
  {
    id: "gallery",
    title: "Galerie",
    slug: "/gallery",
    description: "Photos et vidéos",
    lastModified: "2024-01-05",
    status: "published",
    icon: ImageIcon,
  },
  {
    id: "contact",
    title: "Contact",
    slug: "/contact",
    description: "Formulaire de contact",
    lastModified: "2024-01-03",
    status: "published",
    icon: Mail,
  },
]

export default function AdminPages() {
  const [selectedPage, setSelectedPage] = useState(pages[0])
  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des pages</h1>
          <p className="text-muted-foreground">
            Modifiez le contenu de vos pages web
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nouvelle page
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Créer une nouvelle page</DialogTitle>
              <DialogDescription>
                Ajoutez une nouvelle page à votre site
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="page-title">Titre</Label>
                <Input id="page-title" placeholder="Titre de la page" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="page-slug">URL</Label>
                <Input id="page-slug" placeholder="/nom-de-la-page" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="page-description">Description</Label>
                <Textarea id="page-description" placeholder="Description de la page" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Créer la page</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Pages List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Pages</CardTitle>
              <CardDescription>
                Sélectionnez une page à modifier
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setSelectedPage(page)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedPage.id === page.id
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <page.icon className="h-4 w-4" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{page.title}</div>
                      <div className="text-sm text-muted-foreground truncate">
                        {page.slug}
                      </div>
                    </div>
                    <Badge variant={page.status === "published" ? "default" : "secondary"}>
                      {page.status === "published" ? "Publiée" : "Brouillon"}
                    </Badge>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Page Editor */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <selectedPage.icon className="h-5 w-5" />
                    {selectedPage.title}
                  </CardTitle>
                  <CardDescription>
                    {selectedPage.slug} • Dernière modification: {selectedPage.lastModified}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Modifier la page</DialogTitle>
                        <DialogDescription>
                          Mettez à jour le contenu de la page "{selectedPage.title}"
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
                        <div className="grid gap-2">
                          <Label htmlFor="edit-title">Titre</Label>
                          <Input id="edit-title" defaultValue={selectedPage.title} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="edit-slug">URL</Label>
                          <Input id="edit-slug" defaultValue={selectedPage.slug} />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="edit-meta-title">Titre SEO</Label>
                          <Input id="edit-meta-title" placeholder="Titre pour les moteurs de recherche" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="edit-meta-description">Description SEO</Label>
                          <Textarea id="edit-meta-description" placeholder="Description pour les moteurs de recherche" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="edit-content">Contenu</Label>
                          <Textarea 
                            id="edit-content" 
                            placeholder="Contenu principal de la page"
                            className="min-h-[200px]"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Enregistrer les modifications</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="content" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="content">Contenu</TabsTrigger>
                  <TabsTrigger value="seo">SEO</TabsTrigger>
                  <TabsTrigger value="preview">Aperçu</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Contenu principal</Label>
                    <Textarea 
                      placeholder="Contenu de la page..."
                      className="min-h-[300px]"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="seo" className="space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label>Titre SEO</Label>
                      <Input placeholder="Titre pour Google..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Description SEO</Label>
                      <Textarea placeholder="Description pour Google..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Mots-clés</Label>
                      <Input placeholder="musique, baha'i, spiritualité..." />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="preview" className="space-y-4">
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <div className="text-sm text-muted-foreground">
                      Aperçu de la page "{selectedPage.title}"
                    </div>
                    <div className="mt-2 text-center">
                      <div className="text-lg font-semibold">{selectedPage.title}</div>
                      <div className="text-muted-foreground">{selectedPage.description}</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
