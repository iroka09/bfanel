import type { MetadataRoute } from 'next'
import { baseUrl } from "@/data"


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: baseUrl + '/sitemap.xml',
  }
}