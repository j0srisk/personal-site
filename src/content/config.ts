import { z, defineCollection } from 'astro:content'

const projects = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		name: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		tools: z.array(z.string()),
		image: z.string(),
		link: z.string().optional(),
		github: z.string().optional()
	})
})

export const collections = {
	projects
}
