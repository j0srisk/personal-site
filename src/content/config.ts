import { z, defineCollection } from 'astro:content'

const projects = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			date: z.string(),
			image: image(),
			color: z.string().optional(),
			link: z.string().optional(),
			github: z.string().optional(),
			tags: z.array(z.string()),
			tools: z.array(z.string()),
			hidden: z.boolean().optional()
		})
})

const devicons = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			usage: z.string(),
			backgroundColor: z.string().optional(),
			icon: image()
		})
})

export const collections = {
	projects,
	devicons
}
