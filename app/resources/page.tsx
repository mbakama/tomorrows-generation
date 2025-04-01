import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Video, Download, ExternalLink } from 'lucide-react'

export const metadata = {
  title: "Ressources | Tomorrow's Generation",
  description: "Accédez à des ressources sur la musique Baha'ie, la spiritualité et l'expression artistique pour approfondir votre compréhension et votre pratique.",
}

type Resource = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const resources = {
  articles: [
    {
      title: "Le Pouvoir Spirituel de la Musique dans la Foi Baha'ie",
      description: "Explorez comment la musique sert d'échelle pour l'âme dans les enseignements Baha'is et son rôle dans le développement spirituel.",
      link: "#",
      icon: <FileText className="h-10 w-10 text-primary" />
    },
    {
      title: "L'Unité à travers l'Expression Artistique",
      description: "Comment les efforts artistiques comme la musique peuvent combler les divisions culturelles et promouvoir le principe d'unité dans la diversité.",
      link: "#",
      icon: <FileText className="h-10 w-10 text-primary" />
    },
    {
      title: "La Musique comme Prière : Une Perspective Baha'ie",
      description: "Comprendre la nature dévotionnelle de la musique et son utilisation dans la prière et la méditation au sein de la communauté Baha'ie.",
      link: "#",
      icon: <FileText className="h-10 w-10 text-primary" />
    }
  ],
  sheet_music: [
    {
      title: "Béni est l'Endroit",
      description: "Partition de notre arrangement de cette prière Baha'ie bien-aimée, adaptée pour voix solo ou chœur.",
      link: "#",
      icon: <BookOpen className="h-10 w-10 text-primary" />
    },
    {
      title: "Ô Fils de l'Esprit",
      description: "Notre composition musicale originale de cette Parole Cachée, arrangée pour piano et voix.",
      link: "#",
      icon: <BookOpen className="h-10 w-10 text-primary" />
    },
    {
      title: "Suite Unité dans la Diversité",
      description: "Une collection de pièces instrumentales célébrant le principe d'unité, arrangées pour petit ensemble.",
      link: "#",
      icon: <BookOpen className="h-10 w-10 text-primary" />
    }
  ],
  tutorials: [
    {
      title: "Mettre en musique les Écrits Baha'is",
      description: "Un guide étape par étape pour créer des compositions musicales respectueuses et inspirantes pour les textes sacrés.",
      link: "#",
      icon: <Video className="h-10 w-10 text-primary" />
    },
    {
      title: "Créer de la Musique pour les Rassemblements Dévotionnels",
      description: "Conseils et techniques pour composer et interpréter de la musique qui améliore l'atmosphère dévotionnelle.",
      link: "#",
      icon: <Video className="h-10 w-10 text-primary" />
    },
    {
      title: "Atelier d'Écriture Collaborative de Chansons",
      description: "Découvrez notre processus de création collaborative de musique qui reflète les principes et enseignements Baha'is.",
      link: "#",
      icon: <Video className="h-10 w-10 text-primary" />
    }
  ]
}

export default function ResourcesPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ressources</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explorez notre collection de ressources sur la musique Baha'ie, la spiritualité et l'expression artistique
          pour approfondir votre compréhension et votre pratique.
        </p>
      </div>

      <Tabs defaultValue="articles" className="w-full mb-16">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="sheet_music">Partitions</TabsTrigger>
          <TabsTrigger value="tutorials">Tutoriels</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.articles.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sheet_music" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.sheet_music.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tutorials" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.tutorials.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-primary/5 rounded-lg p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Lectures recommandées</h2>
          <p className="text-lg mb-8 text-center">
            Explorez ces livres et compilations pour approfondir votre compréhension du rôle de la musique et des arts dans la Foi Baha'ie.
          </p>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-background rounded-lg">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-32 h-48 bg-muted flex items-center justify-center rounded">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">L'Importance des Arts dans la Promotion de la Foi</h3>
                <p className="text-muted-foreground mb-4">
                  Une compilation d'écrits de Baha'u'llah, 'Abdu'l-Baha et Shoghi Effendi sur l'importance des arts dans la Foi Baha'ie.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="#" className="inline-flex items-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Voir sur la Bibliothèque Baha'ie
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-background rounded-lg">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-32 h-48 bg-muted flex items-center justify-center rounded">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Musique, Dévotions et Mashriqu'l-Adhkár</h3>
                <p className="text-muted-foreground mb-4">
                  Une étude sur la relation entre la musique, la pratique dévotionnelle et le Mashriqu'l-Adhkár (Maison d'Adoration Baha'ie).
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="#" className="inline-flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger le PDF
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="mb-4">{resource.icon}</div>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={resource.link} className="inline-flex items-center justify-center">
            <ExternalLink className="mr-2 h-4 w-4" />
            Accéder à la ressource
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}