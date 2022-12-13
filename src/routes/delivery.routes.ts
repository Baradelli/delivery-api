import { Router } from 'express'
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman'
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/findAllAvailableController'

const routes = Router()

const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle
)

routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
)

export { routes }
