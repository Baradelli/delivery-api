import { Router } from 'express'
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient'
import { AuthenticateClientController } from '../modules/account/authenticateClient/AuthenticateClientController'
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController'
import { FindAllDeliveriesController } from '../modules/clients/useCases/deliveries/FindAllDeliveriesController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const findAllDeliveriesClient = new FindAllDeliveriesController()

routes.post('/client', createClientController.handle)

routes.post('/client/authenticate', authenticateClientController.handle)

routes.get(
  '/client/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesClient.handle
)

export { routes }
