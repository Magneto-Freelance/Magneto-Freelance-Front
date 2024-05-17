import { z } from "zod";


export const Offer = z.object({
    _id: z.string().optional(),
	title: z.string(),
	employer: z.string(),
	description: z.string(),
	skills: z.string(),
	salary: z.string(),
});


export const Portafolio = z.object({
    _id: z.string().optional(),
	profesion: z.string(),
	description: z.string(),
	salary: z.string(),
	skills: z.string(),
	whatsapp: z.string(),
	other: z.string(),
});


export type Offer = z.infer<typeof Offer>;
export type Portafolio = z.infer<typeof Portafolio>;
