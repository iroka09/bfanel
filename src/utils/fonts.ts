/*import { Montserrat, Roboto, Assistant } from "next/font/google"


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
*/

import { Lora, Lato, Open_Sans } from 'next/font/google'

// Configure the Serif font for Headers
export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora', // CSS variable name
})

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  variable: '--font-lato', // CSS variable name
})

// Configure the Sans-Serif font for Body
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans', // CSS variable name
})

