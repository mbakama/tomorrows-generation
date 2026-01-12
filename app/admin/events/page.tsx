"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { 
  Plus, 
  Edit, 
  Trash2, 
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Users,
  Eye,
  CalendarDays
} from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

// Mock data - would come from API
const events = [
  {
    id: "1",
    title: "Concert de Printemps",
    description: "Une soirée de musique spirituelle pour célébrer l'arrivée du printemps avec des chants inspirants et des prières.",
    date: new Date("2024-03-15"),
    time: "19:00",
    location: "Salle des Fêtes, Paris",
    capacity: 150,
    registered: 87,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=400",
    ticketPrice: 15,
  },
  {
    id: "2",
    title: "Soirée Dévotionnelle",
    description: "Un moment de recueillement et de prière avec des chants sacrés et des méditations.",
    date: new Date("2024-03-22"),
    time: "18:30",
    location: "Centre Communautaire, Lyon",
    capacity: 80,
    registered: 45,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=400",
    ticketPrice: 0,
  },
  {
    id: "3",
    title: "Festival de Musique Spirituelle",
    description: "Un festival de deux jours avec plusieurs artistes et groupes spirituels.",
    date: new Date("2024-04-10"),
    time: "14:00",
    location: "Parc des Expositions, Marseille",
    capacity: 500,
    registered: 234,
    status: "upcoming",
    image: "/placeholder.svg?height=200&width=400",
    ticketPrice: 25,
  },
]

const pastEvents = [
  {
    id: "4",
    title: "Concert de Noël",
    description: "Célébration de Noël avec des chants traditionnels et spirituels.",
    date: new Date("2023-12-20"),
    time: "20:00",
    location: "Église Saint-Jean, Bordeaux",
    capacity: 200,
    registered: 189,
    status: "completed",
    image: "/placeholder.svg?height=200&width=400",
    ticketPrice: 12,
  },
]

export default function AdminEvents() {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestion des événements</h1>
          <p className="text-muted-foreground">
            Créez et gérez vos concerts et événements
          </p>
        </div>
        <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nouvel événement
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Créer un nouvel événement</DialogTitle>
              <DialogDescription>
                Ajoutez un nouvel événement à votre calendrier
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-2">
                <Label htmlFor="event-title">Titre</Label>
                <Input id="event-title" placeholder="Titre de l'événement" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-description">Description</Label>
                <Textarea id="event-description" placeholder="Description détaillée de l'événement" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP", { locale: fr }) : "Choisir une date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="event-time">Heure</Label>
                  <Input id="event-time" type="time" placeholder="19:00" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-location">Lieu</Label>
                <Input id="event-location" placeholder="Adresse complète" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="event-capacity">Capacité</Label>
                  <Input id="event-capacity" type="number" placeholder="150" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="event-price">Prix (€)</Label>
                  <Input id="event-price" type="number" placeholder="0" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-image">Image</Label>
                <Input id="event-image" type="file" accept="image/*" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Créer l'événement</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Événements à venir</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
            <p className="text-xs text-muted-foreground">
              Prochain: {format(events[0].date, "dd MMMM", { locale: fr })}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total inscrits</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {events.reduce((sum, event) => sum + event.registered, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              +12% ce mois
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Capacité totale</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {events.reduce((sum, event) => sum + event.capacity, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              3 événements
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de remplissage</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                (events.reduce((sum, event) => sum + event.registered, 0) /
                  events.reduce((sum, event) => sum + event.capacity, 0)) * 100
              )}%
            </div>
            <p className="text-xs text-muted-foreground">
              Moyenne
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Événements à venir</h2>
        <div className="grid gap-4">
          {events.map((event) => (
            <Card key={event.id}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-32 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {format(event.date, "dd MMMM yyyy", { locale: fr })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="default">
                      À venir
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="font-medium">{event.registered}</span> / {event.capacity} inscrits
                      </div>
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-8">Événements passés</h2>
        <div className="grid gap-4">
          {pastEvents.map((event) => (
            <Card key={event.id} className="opacity-75">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 h-32 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {format(event.date, "dd MMMM yyyy", { locale: fr })}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      Terminé
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium">{event.registered}</span> / {event.capacity} participants
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
