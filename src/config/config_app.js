import dotenv from "dotenv"
dotenv.config()

export const application={
    port:process.env.PORT,
    URI:process.env.URI,
    secretkey:process.env.secretkey
}