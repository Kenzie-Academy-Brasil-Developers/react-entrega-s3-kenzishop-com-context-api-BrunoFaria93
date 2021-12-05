import { createContext, useState } from 'react'
import api from '../../services/api'
export const CatalogueContext = createContext([])

export const CatalogueProvider = ({ children }) => {

  const response = api.get("/products/");

	const [catalogue, setCatalogue] = useState([response]);
  console.log(response)

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item])
  };

  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    )
    setCatalogue(newCatalogue)
  }

return (
  <CatalogueContext.Provider
   value={{ catalogue, addToCatalogue, removeFromCatalogue }}>
	{children}
  </CatalogueContext.Provider>
 )
}
