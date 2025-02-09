
import YouTube from "@/components/Youtube_video"
import Header from "@/components/Header"
import Card from "@/components/Card"


export default function Home() {
  return (
    <main className="">
      {/*" Header "*/}
      <Header />

      {/*" Hero Section "*/}
      <section className="flex flex-col space-y-5 md:flex-row bg-primary py-20 md:px-5 md:gap-2">
        <div className="container md:px-5 text-white text-center md:pt-5">
          <h2 className="text-4xl font-bold">Your <span className="text-cyan-200">Trusted</span> Partner in Electrical & Plumbing Piping Systems</h2>
          <p className="mt-4 text-lg">Located at Amaebu in Orsu LGA, Imo State</p>
        </div>
        <div>
          <img src="/bfanel.jpg" className="w-full" />
        </div>
      </section>

      {/*" About Us "*/}
      <section id="about" className="pt-16 pb-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
          <p className="text-lg leading-relaxed">
            B-Fanel Industries specializes in the production of top-quality plumbing and electrical conduit pipes. Our mission is to deliver durable, innovative, and environmentally friendly piping solutions while ensuring customer satisfaction. Our vision is to be a global leader in the piping industry through excellence and innovation.
          </p>
        </div>
      </section>

      {/*" Video "*/}
      <section id="products" className="mb-3">
        <YouTube
          id="Bkg9yt2FJGc"
          title="B-Fanel Industries"
        />
      </section>

      {/*" Products "*/}
      <section id="products" className="bg-gray-100 dark:bg-slate-900 dark:bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <h3 className="text-xl font-bold text-primary">Plumbing Pipes</h3>
              <p className="mt-2">High-quality pipes designed for efficient water flow and plumbing systems.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-primary">Electrical Conduit Pipes</h3>
              <p className="mt-2">Durable pipes for safe and efficient electrical wiring installations.</p>
            </Card>
          </div>
        </div>
      </section>

      {/*" Services "*/}
      <section id="services" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>
          <ul className="space-y-4">
            <li>✔ Custom Pipe Manufacturing</li>
            <li>✔ Installation Consultancy</li>
            <li>✔ Bulk Orders and Distribution</li>
          </ul>
        </div>
      </section>

      {/*" Certifications "*/}
      <section className="bg-gray-100 dark:bg-slate-900 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Certifications & Quality Assurance</h2>
          <p className="text-lg leading-relaxed">
            B-Fanel Industries is ISO 9001 certified and adheres to strict industry standards to ensure the highest product quality. Our pipes undergo rigorous testing to meet durability and safety requirements.
          </p>
        </div>
      </section>

      {/*" Testimonials "*/}
      <section className="py-16">
        <div className="container mx-auto">
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

      {/*" Careers "*/}
      <section className="bg-cyan-200 text-slate-900/90 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Join Our Team</h2>
          <p className="text-lg">
            We're always looking for talented individuals to join our growing team. Send your CV to careers@bfanelindustries.com.
          </p>
        </div>
      </section>

      {/*" Blog "*/}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-bold text-primary">5 Tips for Better Plumbing Systems</h3>
              <p className="mt-2">Learn how to maximize the efficiency of your plumbing with these expert tips.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-primary">Why Choose B-Fanel Pipes?</h3>
              <p className="mt-2">Discover what makes our products the best choice for your projects.</p>
            </Card>
          </div>
        </div>
      </section>

      {/*" Contact Us "*/}
      <section id="contact" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Contact Us</h2>
          <p className="mb-4">Address: Amaebu, Orsu LGA, Imo State</p>
          <p className="mb-4">Phone: <a href="tel:+234-703-845-0694" className="underline underline-offset-2">+234-703-845-0694</a></p>
          <p className="mb-4">Email: info@bfanelindustries.com</p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:bg-black/20 dark:shadow-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:bg-black/20" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-500">Your Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm dark:bg-black/20"></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="px-6 py-3 bg-primary text-white font-bold rounded-md shadow hover:bg-blue-800">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/*" Footer "*/}
      <footer className="bg-primary text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} B-Fanel Industries. All Rights Reserved.</p>
        </div>
      </footer>

    </main >
  );
}
