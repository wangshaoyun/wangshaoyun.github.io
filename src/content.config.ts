import {defineCollection,z} from 'astro:content';
import {glob} from 'astro/loaders';
export const collections={notes:defineCollection({loader:glob({pattern:'**/*.md',base:'./src/content/notes'}),schema:z.object({title:z.string(),category:z.string(),date:z.string()})})};
