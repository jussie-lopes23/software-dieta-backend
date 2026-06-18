import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']). default('production'),
    DATABSE_CLIENT: z.enum(['sqlite', 'pg']).default('sqlite'),
    DATABASE_URL: z.string(),
    PORT: z.coerce.number().default(3333), 
})



const _env = envSchema.safeParse(process.env)


if (_env.success === true) {
  console.log("ambiente atual:", _env.data.NODE_ENV) 
}

if(_env.success === false ){
    console.error('Variáveis ​​de ambiente inválidas', _env.error.format())

    throw new Error('Inavlid environment variables')
}

export const env = _env.data