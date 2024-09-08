import { api } from '../lib/axios'

export interface ResgisterRestaurantBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function resgisterRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: ResgisterRestaurantBody) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
