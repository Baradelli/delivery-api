import { Router } from 'express'
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman'
import { AuthenticateDeliverymanController } from '../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import { FindAllDeliveriesDeliverymanController } from '../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController'

const routes = Router()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController()

routes.post('/deliveryman', createDeliverymanController.handle)

routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
)

routes.get(
  '/deliveryman/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
)

export { routes }
