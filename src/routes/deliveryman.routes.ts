import { Router } from 'express'
import { AuthenticateDeliverymanController } from '../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const routes = Router()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
)

export { routes }
