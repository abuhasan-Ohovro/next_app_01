import {z} from 'zod';

export const userValidation = z
       .string()
       .min(8,"Username Must be atleast  8 charater")
       .max(20,"Username should not be more than 20 character")
       .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special Character")

export const signUpSchema = z.object({
    username : userValidation,
    email : z.string().email({message :'Invalid Email Address'}),
    password : z.string().min(6,{message : "Password must be at least 6 character"})
})