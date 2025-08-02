import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"

const services = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "src/data/services/" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    videos: z.array(z.string())
  })
})

export const collections = { services }
