
import { MetadataRoute } from 'next'
import dayjs from 'dayjs'
import { baseUrl } from '@/data'



export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: dayjs().subtract(1, 'hour').format('YYYY-MM-DDTHH:mm:ss+01:00'),
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        `${baseUrl}/ADMIN_BLOCK.jpg`,
        `${baseUrl}/bfanel.jpg`,
        `${baseUrl}/conduit_pipes.jpg`,
        `${baseUrl}/contact_us.jpg`,
        `${baseUrl}/empty_female.jpg`,
        `${baseUrl}/empty_male.jpg`,
        `${baseUrl}/images-2.jpg`,
        `${baseUrl}/images-3.jpg`,
      ],
      /* alternates: {
         languages: {
           en: `${baseUrl}/en`,
           yo: `${baseUrl}/yo`, // Yoruba
         },
       },*/
    },
    {
      url: `${baseUrl}/about`,
      lastModified: dayjs().format('YYYY-MM-DDTHH:mm:ss+01:00'),
      changeFrequency: 'daily',
      priority: 0.8,
      images: [
        `${baseUrl}/logo_high.png`,
      ],
    },
  ]
}


/*
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  <url>
    <loc>https://bfanel.vercel.app/</loc>
    <lastmod>2026-02-16T15:11:16+01:00</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bfanel.vercel.app/about</loc>
    <lastmod>2026-02-16T15:33:16+01:00</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>

*/