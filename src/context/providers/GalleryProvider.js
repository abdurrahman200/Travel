import { useReducer } from 'react'
import gallery from '../../data/gallery'
import GalleryContext from '../GalleryContext'
import GalleryReducer from '../reducers/GalleryReducer'

const GalleryProvider = (props) => {
   const [galleryStore, dispatch] = useReducer(GalleryReducer, {
      gallery,
      lightBoxStatus: false,
      currentLightBox: {},
   })
   return <GalleryContext.Provider value={{ galleryStore, dispatch }}>{props.children}</GalleryContext.Provider>
}
export default GalleryProvider
