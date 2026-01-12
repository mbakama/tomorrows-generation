"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Download, 
  Play, 
  Eye,
  Calendar,
  Music,
  Globe
} from "lucide-react"

// Mock data - would come from analytics API
const overviewStats = [
  {
    title: "Visiteurs uniques",
    value: "2,543",
    change: "+12.5%",
    icon: Users,
    description: "Ce mois-ci",
  },
  {
    title: "Pages vues",
    value: "8,721",
    change: "+8.2%",
    icon: Eye,
    description: "Ce mois-ci",
  },
  {
    title: "Téléchargements",
    value: "1,234",
    change: "+18.7%",
    icon: Download,
    description: "Ce mois-ci",
  },
  {
    title: "Lectures",
    value: "5,678",
    change: "+23.1%",
    icon: Play,
    description: "Ce mois-ci",
  },
]

const popularPages = [
  { page: "/music", views: 3421, percentage: 39.2 },
  { page: "/", views: 2156, percentage: 24.7 },
  { page: "/events", views: 1234, percentage: 14.1 },
  { page: "/about", views: 987, percentage: 11.3 },
  { page: "/gallery", views: 654, percentage: 7.5 },
  { page: "/contact", views: 269, percentage: 3.1 },
]

const popularTracks = [
  { track: "Le remède", plays: 1234, album: "Le remède" },
  { track: "Sala Ete", plays: 987, album: "Le remède" },
  { track: "Unité dans la Diversité", plays: 876, album: "Single" },
  { track: "La vraie liberté", plays: 765, album: "Le remède" },
  { track: "Méditation de l'Aube", plays: 654, album: "Single" },
]

const trafficSources = [
  { source: "Recherche organique", visitors: 1234, percentage: 48.5 },
  { source: "Réseaux sociaux", visitors: 654, percentage: 25.7 },
  { source: "Direct", visitors: 432, percentage: 17.0 },
  { source: "Références", visitors: 187, percentage: 7.4 },
  { source: "Autres", visitors: 36, percentage: 1.4 },
]

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Statistiques</h1>
        <p className="text-muted-foreground">
          Analysez les performances de votre site
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-500" />
                {stat.change} {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="traffic">Trafic</TabsTrigger>
          <TabsTrigger value="content">Contenu</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Popular Pages */}
            <Card>
              <CardHeader>
                <CardTitle>Pages les plus visitées</CardTitle>
                <CardDescription>
                  Les pages les plus populaires ce mois-ci
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularPages.map((page, index) => (
                    <div key={page.page} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{page.page}</div>
                          <div className="text-sm text-muted-foreground">
                            {page.views.toLocaleString()} vues
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {page.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tracks */}
            <Card>
              <CardHeader>
                <CardTitle>Pistes les plus écoutées</CardTitle>
                <CardDescription>
                  Les titres les plus populaires ce mois-ci
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularTracks.map((track, index) => (
                    <div key={track.track} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{track.track}</div>
                          <div className="text-sm text-muted-foreground">
                            {track.album}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {track.plays.toLocaleString()} lectures
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Traffic Sources */}
            <Card>
              <CardHeader>
                <CardTitle>Sources de trafic</CardTitle>
                <CardDescription>
                  D'où viennent vos visiteurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source) => (
                    <div key={source.source} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium">{source.source}</div>
                          <div className="text-sm text-muted-foreground">
                            {source.visitors.toLocaleString()} visiteurs
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {source.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Traffic */}
            <Card>
              <CardHeader>
                <CardTitle>Trafic mensuel</CardTitle>
                <CardDescription>
                  Évolution du trafic sur 6 mois
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Janvier</span>
                    <span className="text-sm font-medium">1,234 visiteurs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Février</span>
                    <span className="text-sm font-medium">1,456 visiteurs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mars</span>
                    <span className="text-sm font-medium">1,678 visiteurs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Avril</span>
                    <span className="text-sm font-medium">1,890 visiteurs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mai</span>
                    <span className="text-sm font-medium">2,123 visiteurs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Juin</span>
                    <span className="text-sm font-medium">2,543 visiteurs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Music Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Statistiques musicales</CardTitle>
                <CardDescription>
                  Performance de votre contenu musical
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4 text-muted-foreground" />
                      <span>Total des lectures</span>
                    </div>
                    <span className="font-medium">5,678</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>Total des téléchargements</span>
                    </div>
                    <span className="font-medium">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>Auditeurs uniques</span>
                    </div>
                    <span className="font-medium">892</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span>Taux de rétention</span>
                    </div>
                    <span className="font-medium">67%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Album Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Performance des albums</CardTitle>
                <CardDescription>
                  Popularité de vos albums
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Le remède</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }} />
                      </div>
                      <span className="text-sm">3,456</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Prières Sacrées</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }} />
                      </div>
                      <span className="text-sm">2,234</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Singles</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }} />
                      </div>
                      <span className="text-sm">1,678</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Demographics */}
            <Card>
              <CardHeader>
                <CardTitle>Démographie</CardTitle>
                <CardDescription>
                  Informations sur votre audience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>18-24 ans</span>
                    <span className="font-medium">23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>25-34 ans</span>
                    <span className="font-medium">38%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>35-44 ans</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>45-54 ans</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>55+ ans</span>
                    <span className="font-medium">4%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geographic */}
            <Card>
              <CardHeader>
                <CardTitle>Géographie</CardTitle>
                <CardDescription>
                  Localisation de vos visiteurs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>France</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Belgique</span>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Suisse</span>
                    <span className="font-medium">8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Canada</span>
                    <span className="font-medium">7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Autres</span>
                    <span className="font-medium">8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
