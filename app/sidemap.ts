import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://akvapura.az',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
            
            
        },
      
    ]
}
