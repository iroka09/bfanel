
import YouTube from "@/components/Youtube_video"
import Image from "next/image"
import Link from "next/link"
import Card from "@/components/Card"
import Faqs from "@/components/Faqs"
import About from "@/components/About"
import Products from "@/components/Products"
import HeroButtons from "@/components/HeroButtons"
import ContactForm from "@/components/ContactForm"
import Testimonials from "@/components/Testimonials"
import { roboto } from "@/utils/fonts"





export default function Home() {
  return (
    <main className="">

      {/*" Hero Section "*/}
      <section className="flex flex-col space-y-5 md:flex-row pt-2 pb-10 md:px-5 md:gap-2">
        <div className="container text-primary md:pt-5 space-y-5 py-5 text-center">
          {<Image src="/logo_high.png" alt="bfanel logo" className="block mx-auto mb-2" width="200" height="100" />}
          <p className={"text-3xl uppercase font-black " + roboto.className}>
            Bfanel Industries Limited
          </p>
          <p className="inline-block mt-4 text-md">
            Your <span className="text-secondary-fixed font-bold">Trusted</span> Partner in Electrical & Plumbing Piping Systems. <br />
            Specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction.
          </p>
          <HeroButtons />
        </div>
        {/*<div className="md:max-h-[300px] overflow-hidden">
          <Image src={bfanelPic} alt="Bfanel pipes sample" className="max-h-full object-fit" />
        </div>*/}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
        <div>
          {/*" About Us "*/}
          <section id="about" className="bg-gray-200 dark:bg-slate-800 py-5">
            <div id="about" className="container">
              <About />
            </div>
          </section>
          {/*" Video "*/}
          <section id="video" className="py-5">
            <YouTube
              id="Bkg9yt2FJGc"
              title="B-Fanel Industries"
            />
          </section>

          {/*" Products "*/}
          <section id="products" className="bg-secondary  text-slate-900/90 py-16">
            <Products />
          </section>

          {/*" Services "*/}
          {/*   <section id="services" className="pt-16">
            <div className="container">
              <h2 className="text-3xl font-bold text-primary mb-6 uppercase">Our Services</h2>
              <Card>
                <ul className="space-y-4">
                  <li>✔ Custom Pipe Manufacturing</li>
                  <li>✔ Installation Consultancy</li>
                  <li>✔ Bulk Orders and Distribution</li>
                </ul>
              </Card>
              <hr className="border border-black/10 mt-16" />
            </div>
          </section>*/}


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
          <section className="py-16 bg-neutral-100 dark:bg-slate-600">
            <div className="container">
              <h2 className="text-2xl font-bold text-primary mb-6 uppercase">What Our Clients Say</h2>
              <div className="py-0 ">
                <Testimonials />
              </div>
            </div>
          </section>
        </div>
        <div>
          {/*" Join us"*/}
          <section className="relative career-background py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 from-40% via-black/70 via-70% to-black/40"></div>
            <div className="container relative z-1">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase">Join Our Team</h2>
              <p className="text-lg text-white/80">
                We're always looking for talented individuals to join our growing team. Send your CV to <Link href="mailto:careers@bfanelindustries.com" className="text-secondary underline underline-offset-2">info@bfanelindustries.com</Link>
              </p>
            </div>
          </section>

          {/*" Faqs "*/}
          <section id="faqs" className="py-16 bg-secondary text-slate-800">
            <div className="container">
              <h2 className="text-2xl font-bold text-primary mb-6 uppercase">Frequently Asked Questions</h2>
              <Faqs />
            </div>
          </section>

          {/*" Contact Us "*/}
          <section id="contact" className="py-16">
              <ContactForm />
          </section>

        </div>
      </div>
    </main>
  );
}
