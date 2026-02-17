
import Image from "next/image"
import Card from "@/components/Card"

const datas = [
  {
    title: "Plumbing Pipes",
    alt: "White Plumbing Pipes",
    imageSrc: "/images-3.jpg",
    body: "High-quality pipes designed for efficient water flow and plumbing systems, produced in a variety of sizes to meet different project and installation requirements."
  },
  {
    title: "Electrical Conduit Pipes",
    alt: "Electrical 20mm Conduit Pipes",
    imageSrc: "/conduit_pipes.jpg",
    body: "Durable pipes for safe and efficient electrical wiring installations."
  }
]

export default function Products() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-6 uppercase">Our Products</h1>
      <div className="flex flex-wrap justify-between gap-3 md:*:max-w-[48%]">
        {datas.map(data => (
          <Card noPadding key={data.title}>
            <h2 className="text-xl font-bold p-4">{data.title}</h2>
            <div className="w-full h-[250px] relative">
              <Image
                src={data.imageSrc}
                className="object-cover h-full w-full"
                fill
                alt={data.alt}
              />
            </div>
            <p className="p-4">{data.body}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}