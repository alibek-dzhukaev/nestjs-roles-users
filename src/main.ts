import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const PORT = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Advanced Backend')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('@alibek')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
  })
}

bootstrap().catch((e) => {
  console.error(e)
})
