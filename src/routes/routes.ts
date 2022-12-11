import { Router } from 'express'
import { routes as client } from './client.routes'
import { routes as deliveryman } from './deliveryman.routes'
import { routes as delivery } from './delivery.routes'

const routes = Router()

routes.use(client)
routes.use(deliveryman)
routes.use(delivery)

export { routes }
