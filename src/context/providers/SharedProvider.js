import { useReducer } from 'react'
import reviews from '../../data/reviews'
import services from '../../data/services'
import SharedReducer from '../reducers/SharedReducer'
import SharedContext from '../SharedContext'

const SharedProvider = (props) => {
   const [sharedData, dispatch] = useReducer(SharedReducer, {
      servicesData: services,
      reviews: reviews,
   })
   return <SharedContext.Provider value={{ sharedData, dispatch }}>{props.children}</SharedContext.Provider>
}
export default SharedProvider
