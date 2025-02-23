
import YouTube from "@/components/Youtube_video"
import Image from "next/image"
import Link from "next/link"
import Card from "@/components/Card"
import Faqs from "@/components/Faqs"
import ContactForm from "@/components/ContactForm"
import InfoIcon from "@mui/icons-material/Info"; // About Us
import InventoryIcon from "@mui/icons-material/Inventory"; // Products
import BuildIcon from "@mui/icons-material/Build"; // Services
import LiveHelpIcon from "@mui/icons-material/LiveHelp"; // FAQs
import ContactsIcon from "@mui/icons-material/Contacts"; // Contact



export default function Home() {
  return (
    <main className="">

      {/*" Hero Section "*/}
      <section className="flex flex-col space-y-5 md:flex-row bg-primary pt-2 pb-10 md:px-5 md:gap-2">
        <div className="container md:px-5 text-white text-center md:pt-5">
          <Image src="/bfanel_logo.png" alt="bfanel logo" className="block mx-auto mb-2" width="150" height="50" />
          <h2 className="text-4xl font-bold">Your <span className="text-cyan-400">Trusted</span> Partner in Electrical & Plumbing Piping Systems</h2>
          <p className="mt-4 text-lg">Located at Amaebu in Orsu L.G.A, Imo State</p>
        </div>
        <div className="relative aspect-square w-full" >
          <Image src="/bfanel.jpg" alt="Bfanel pipes sample" className="absolute inset-0 object-contain" fill />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        <div>
          {/*" About Us "*/}
          <section id="about" className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-primary mb-6"><InfoIcon className="text-4xl" /> About Us</h2>
              <p className="text-lg leading-relaxed">
                B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation.
              </p>
            </div>
          </section>

          {/*" Video "*/}
          <section id="video" className="mb-8">
            <YouTube
              id="Bkg9yt2FJGc"
              title="B-Fanel Industries"
            />
          </section>

          {/*" Products "*/}
          <section id="products" className="bg-cyan-500  text-slate-900/90 py-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-slate-900 mb-6"><InventoryIcon className="text-4xl" /> Our Products</h2>
              <div className="flex flex-wrap gap-3 md:*:max-w-[45%]">
                <Card>
                  <h3 className="text-xl font-bold text-slate-900">Plumbing Pipes</h3>
                  <p className="mt-2">High-quality pipes designed for efficient water flow and plumbing systems.</p>
                </Card>
                <Card>
                  <h3 className="text-xl font-bold text-slate-900">Electrical Conduit Pipes</h3>
                  <p className="mt-2">Durable pipes for safe and efficient electrical wiring installations.</p>
                </Card>
              </div>
            </div>
          </section>

          {/*" Services "*/}
          <section id="services" className="pt-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-primary mb-6"><BuildIcon className="text-4xl" /> Our Services</h2>
              <Card>
                <ul className="space-y-4">
                  <li>✔ Custom Pipe Manufacturing</li>
                  <li>✔ Installation Consultancy</li>
                  <li>✔ Bulk Orders and Distribution</li>
                </ul>
              </Card>
              <hr className="border border-black/10 mt-16" />
            </div>
          </section>


          {/*" Certifications "*/}
          {/*<section className="bg-gray-100 dark:bg-slate-900 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-6">Certifications & Quality Assurance</h2>
          <p className="text-lg leading-relaxed">
            B-Fanel Industries is ISO 9001 certified and adheres to strict industry standards to ensure the highest product quality. Our pipes undergo rigorous testing to meet durability and safety requirements.
          </p>
        </div>
      </section>*/}

          {/*" Testimonials "*/}
          <section className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-primary mb-6">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <p>"B-Fanel pipes are the most reliable on the market."</p>
                  <span className="block mt-4 font-bold">- John Doe, Contractor</span>
                </Card>
                <Card>
                  <p>"Excellent customer service and top-notch quality. Highly recommended."</p>
                  <span className="block mt-4 font-bold">- Jane Smith, Engineer</span>
                </Card>
              </div>
            </div>
          </section>
        </div>
        <div>
          {/*" Careers "*/}
          <section className="relative career-background py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 from-40% via-black/85 via-70% to-black/70"></div>
            <div className="container relative z-1">
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-lg text-white/80">
                We're always looking for talented individuals to join our growing team. Send your CV to <Link href="mailto:careers@bfanelindustries.com" className="text-cyan-200 underline underline-offset-2">careers@bfanelindustries.com</Link>
              </p>
            </div>
          </section>

          {/*" Faqs "*/}
          <section id="faqs" className="py-16 bg-cyan-500 text-slate-800">
            <div className="container">
              <h2 className="text-3xl font-bold text-slate-900 mb-6"><LiveHelpIcon className="text-4xl" /> Frequently Asked Questions</h2>
              <Faqs />
            </div>
          </section>

          {/*" Contact Us "*/}
          <section id="contact" className="py-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-primary mb-6"><ContactsIcon className="text-4xl" /> Contact Us</h2>
              <p className="mb-4">Address: Amaebu, Orsu LGA, Imo State</p>
              <p className="mb-4">Phone: <Link href="tel:+234-703-845-0694" className="underline underline-offset-2">+234-703-845-0694</Link></p>
              <p className="mb-4">Email: info@bfanelindustries.com</p>
              <ContactForm />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
