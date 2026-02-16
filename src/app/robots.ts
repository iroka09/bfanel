import type { MetadataRoute } from 'next'
import { web_address } from "@/data"


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: web_address + '/sitemap.xml',
  }
}