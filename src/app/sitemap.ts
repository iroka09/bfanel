
import { MetadataRoute } from 'next'
import moment from 'moment-timezone'
import { baseUrl } from '@/data'

function getIsoDate(str) {
  return moment(str, "DD-MMM-YYYY hh:mm:ssa").format('YYYY-MM-DDTHH:mm:ss+01:00')
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: getIsoDate("15-Feb-2026 10:28:31am"),
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
      lastModified: getIsoDate("16-feb-2026 01:40:32pm"),
      changeFrequency: 'daily',
      priority: 0.8,
      images: [
        `${baseUrl}/logo_high.png`,
      ],
    },
  ]
}



/*
OUTPUT SAMPLE

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    <url>
      <loc>https://bfanel.vercel.app/</loc>
      <image:image>
        <image:loc>https://bfanel.vercel.app/ADMIN_BLOCK.jpg</image:loc>
      </image:image>
      <image:image>
        <image:loc>https://bfanel.vercel.app/bfanel.jpg</image:loc>
      </image:image>
      <lastmod>2026-02-17T18:24:11+01:00</lastmod>
      <changefreq>daily</changefreq>
      <priority>1</priority>
    </url>
    <url>
      <loc>https://bfanel.vercel.app/about</loc>
      <image:image>
        <image:loc>https://bfanel.vercel.app/logo_high.png</image:loc>
      </image:image>
      <lastmod>2026-02-17T19:24:11+01:00</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>
*/