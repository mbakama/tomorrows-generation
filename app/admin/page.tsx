"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Music, 
  Calendar, 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Play,
  Download,
  Eye
} from "lucide-react"

const stats = [
  {
    title: "Albums publiés",
    value: "2",
    description: "+1 ce mois",
    icon: Music,
  },
  {
    title: "Pistes totales",
    value: "17",
    description: "+3 ce mois",
    icon: Play,
  },
  {
    title: "Événements à venir",
    value: "3",
    description: "Prochain: 15 Mars",
    icon: Calendar,
  },
  {
    title: "Téléchargements",
    value: "1,234",
    description: "+12% ce mois",
    icon: Download,
  },
]

const recentActivity = [
  {
    action: "Nouvel album ajouté",
    item: "Le remède",
    time: "Il y a 2 heures",
    icon: Music,
  },
  {
    action: "Événement créé",
    item: "Concert de printemps",
    time: "Il y a 5 heures",
    icon: Calendar,
  },
  {
    action: "Photo ajoutée",
    item: "Galerie - Concert 2024",
    time: "Hier",
    icon: ImageIcon,
  },
  {
    action: "Page mise à jour",
    item: "À propos",
    time: "Il y a 2 jours",
    icon: FileText,
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Vue d'ensemble de votre site Tomorrow's Generation
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Activité récente</CardTitle>
            <CardDescription>
              Dernières modifications sur votre site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.item}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Actions rapides</CardTitle>
            <CardDescription>
              Accès rapide aux fonctionnalités courantes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-2">
              <button className="flex items-center justify-center w-full p-3 text-sm border rounded-md hover:bg-accent transition-colors">
                <Music className="mr-2 h-4 w-4" />
                Ajouter un album
              </button>
              <button className="flex items-center justify-center w-full p-3 text-sm border rounded-md hover:bg-accent transition-colors">
                <Calendar className="mr-2 h-4 w-4" />
                Créer un événement
              </button>
              <button className="flex items-center justify-center w-full p-3 text-sm border rounded-md hover:bg-accent transition-colors">
                <ImageIcon className="mr-2 h-4 w-4" />
                Ajouter des photos
              </button>
              <button className="flex items-center justify-center w-full p-3 text-sm border rounded-md hover:bg-accent transition-colors">
                <FileText className="mr-2 h-4 w-4" />
                Modifier une page
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
