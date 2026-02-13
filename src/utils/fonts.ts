import { Montserrat, Roboto, Assistant } from "next/font/google"


export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: "300"
})


export const roboto = Roboto({
  subsets: ['latin'],
  weight: "400"
})


export const assistant = Assistant({
  subsets: ["latin"],
  display: "swap",
  weight: "300"
});
