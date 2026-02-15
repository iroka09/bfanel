
import Image from "next/image"
import Card from "@/components/Card"

const datas = [
  {
    title: "Plumbing Pipes",
    imageSrc: "/images-3.jpg",
    body: "High-quality pipes designed for efficient water flow and plumbing systems, produced in a variety of sizes to meet different project and installation requirements."
  },
  {
    title: "Electrical Conduit Pipes",
    imageSrc: "/conduit_pipes.jpg",
    body: "Durable pipes for safe and efficient electrical wiring installations."
  }
]

export default function Products() {
  return (
    <div className="container !text-black">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase">Our Products</h2>
      <div className="flex flex-wrap justify-between gap-3 md:*:max-w-[48%]">
        {datas.map(data => (
          <Card noPadding key={data.title}>
            <h3 className="text-xl font-bold text-slate-900 p-4">{data.title}</h3>
            <div className="w-full h-[250px] relative">
              <Image
                src={data.imageSrc}
                className="object-cover h-full w-full"
                fill
                alt={data.title}
              />
            </div>
            <p className="p-4">{data.body}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}