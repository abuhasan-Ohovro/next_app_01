import {z} from 'zod'

export const MessageSchema = z.object({
       content : z
       .string()
       .min(10,{message : 'Content must be at least of 10 charecter'})    
       .max(300,{message:"Content must not be no longer then 300 words "})
})