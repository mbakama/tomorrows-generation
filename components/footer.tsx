import Link from "next/link"
import { Music } from "lucide-react"
import { Facebook, Instagram, Youtube } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Tomorrow's Generation</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Fondé en 2019, Tomorrow's Generation est un groupe de musique Baha'i dédié à promouvoir l'unité, la paix
              et la compréhension à travers le pouvoir de la musique.
            </p>
            <div className="flex space-x-4">

              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" style={{ color: "#1877F2" }} />
                </Link>
                <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" style={{ color: "#E4405F" }} />
                </Link>
                <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" style={{ color: "#FF0000" }} />
                </Link>
              </div>
              {/* <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" style={color:blue}/>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Événements", "Musique", "Galerie", "Ressources", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Accueil" ? "/" : `/${item === "À propos" ? "about" : item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contactez-nous</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@tomorrowsgeneration.org</li>
              <li>Téléphone: (123) 456-7890</li>
              <li className="pt-4">
                <Link href="/contact" className="text-primary hover:underline">
                  Envoyez-nous un message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tomorrow's Generation. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Politique de confidentialité
            </Link>
            <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

