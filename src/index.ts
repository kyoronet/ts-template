import Koa from 'koa'

const app = new Koa()

const host: string = process.env.HOST || '127.0.0.1'
const port: number = Number(process.env.PORT) || 3000

app.use((ctx) => {
  ctx.status = 200
  ctx.respond = false // Bypass Koa's built-in response handling
})

app.listen(port, host)
console.log(`Server listening on http://${host}:${port}`)
