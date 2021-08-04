import { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import Cities from '../components/cities/Cities'
import DestinationInfo from '../components/DestinationInfo'
import Footer from '../components/footer/Footer'
import Header from '../components/Header'
import DestinationsContext from '../context/DestinationsContext'
import { CITIES, DETAILS } from '../context/types/DestinationTypes'
const Details = () => {
   const { destinationsData, dispatch } = useContext(DestinationsContext)
   const { details, filteredCities } = destinationsData
   const { id } = useParams()
   useEffect(() => {
      dispatch({ type: DETAILS, payload: id })
      dispatch({ type: CITIES, payload: id })
      window.scrollTo(0, 0)
   }, [id, dispatch])
   return (
      <>
         <Helmet>
            <title>{details.name}</title>
         </Helmet>
         <Header heading={details.name} image={details.bigImage}></Header>
         <DestinationInfo details={details} />
         <Cities cities={filteredCities} name={details.name} />
         <Footer />
      </>
   )
}
export default Details
