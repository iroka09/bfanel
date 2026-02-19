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

/*
User-Agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Disallow: /api/
Sitemap: https://bfanel.vercel.app/sitemap.xml
*/