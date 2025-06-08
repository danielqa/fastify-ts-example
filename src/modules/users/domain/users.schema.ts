import {z} from "zod"

export const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
})

export const createUserSchema = userSchema.omit({id: true})

export type CreateUserInput = z.infer<typeof createUserSchema>
