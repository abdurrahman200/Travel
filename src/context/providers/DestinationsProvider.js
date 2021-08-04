import { useReducer } from 'react'
import Cities from '../../data/cities'
import { destinations } from '../../data/destinations'
import DestinationsContext from '../DestinationsContext'
import DestinationsReducer from '../reducers/DestinationsReducer'

const DestinationsProvider = (props) => {
   const [destinationsData, dispatch] = useReducer(DestinationsReducer, {
      destinations,
      details: {},
      cities: Cities,
      filteredCities: [],
   })
   return <DestinationsContext.Provider value={{ destinationsData, dispatch }}>{props.children}</DestinationsContext.Provider>
}
export default DestinationsProvider
