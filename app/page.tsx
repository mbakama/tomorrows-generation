import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Music, Users, BookOpen, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Tomorrow's Generation performing"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tomorrow's Generation</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Inspirer les cœurs par le pouvoir spirituel de la musique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/events">Événements à venir</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background/20 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary"
            >
              <Link href="/music">Écoutez notre musique</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
            <p className="text-lg leading-relaxed italic">
              À Tomorrow's Generation, notre mission est de promouvoir les valeurs fondamentales de la Foi Baha'ie à
              travers la musique, en favorisant l'unité, la paix et la compréhension entre tous les peuples. Nous nous
              efforçons d'être un phare de lumière, encourageant les autres à explorer leur spiritualité et à se
              connecter avec la communauté à travers le don de la musique.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que nous offrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-primary" />}
              title="Événements & Concerts"
              description="Rejoignez-nous pour des performances en direct qui élèvent l'âme et rassemblent les communautés."
              link="/events"
            />
            <FeatureCard
              icon={<Music className="h-10 w-10 text-primary" />}
              title="Bibliothèque musicale"
              description="Explorez notre collection de compositions originales et d'arrangements de prières Baha'ies."
              link="/music"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Ateliers"
              description="Participez à nos ateliers de musique conçus pour inspirer la créativité et la croissance spirituelle."
              link="/workshops"
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Ressources"
              description="Accédez à des documents sur la musique Baha'ie, la spiritualité et le pouvoir de l'expression artistique."
              link="/resources"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Tomorrow's Generation group photo"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">À propos de nous</h2>
            <p className="text-lg mb-4">
              Fondé en 2019, Tomorrow's Generation est composé de musiciens passionnés et de chanteurs engagés à créer
              des expériences musicales diverses qui reflètent les thèmes Baha'is.
            </p>
            <p className="text-lg mb-4">
              Notre répertoire comprend des compositions originales et des arrangements de prières et chants
              traditionnels Baha'is, mélangeant divers styles musicaux pour atteindre un public plus large.
            </p>
            <p className="text-lg mb-6">
              À travers des concerts, des ateliers et des initiatives en ligne, nous cherchons à partager la beauté de
              la musique Baha'ie avec le monde, invitant des personnes de tous horizons à nous rejoindre dans notre
              célébration de la foi, de la créativité et de la communauté.
            </p>
            <Button asChild>
              <Link href="/about">En savoir plus sur nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que les gens disent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="La musique de Tomorrow's Generation a touché mon cœur d'une manière que je ne peux décrire. Leurs mélodies portent l'essence de la dévotion spirituelle."
              author="Sarah M."
            />
            <TestimonialCard
              quote="Participer à leur atelier a transformé ma compréhension de comment la musique peut être une forme de prière et de méditation. Vraiment inspirant !"
              author="David K."
            />
            <TestimonialCard
              quote="Leur interprétation des prières Baha'ies à travers la musique crée un pont entre les cultures et les croyances. Une belle expression d'unité."
              author="Leila J."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre communauté</h2>
          <p className="text-xl mb-8">
            Abonnez-vous à notre newsletter pour rester informé des événements à venir, des nouvelles sorties musicales
            et plus encore.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-md text-primary"
              required
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              S'abonner
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-muted">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link href={link} className="text-primary font-medium hover:underline inline-flex items-center">
        En savoir plus <span className="ml-1">→</span>
      </Link>
    </div>
  )
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-muted">
      <div className="mb-4 text-primary">
        <Heart className="h-6 w-6 fill-primary" />
      </div>
      <p className="italic mb-4">{quote}</p>
      <p className="font-medium">— {author}</p>
    </div>
  )
}

