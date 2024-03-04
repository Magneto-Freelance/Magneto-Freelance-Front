import { z } from "zod";

export const Offer = z.object({
    _id: z.string().optional(),
	title: z.string(),
	employer: z.string(),
	description: z.string(),
	skills: z.string(),
	salary: z.string(),
});

export type Offer = z.infer<typeof Offer>;
