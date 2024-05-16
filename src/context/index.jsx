import {createContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const GlobalContext = createContext(null)


export default function GlobalState({children}){
    const [searchParam, setSearchParam] = useState('')
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [favouriteList, setFavouriteList] = useState([])
    const navigate=useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try {
          const res= await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
          const data=await res.json()
          
          if(data?.data?.recipes){
            setRecipeList(data?.data?.recipes)
          }
          setSearchParam('')
          navigate('/')
        } catch (error) {
            console.log(error)
            setSearchParam('')
        }

    }

    function addToFavoutite(getItem){
        console.log(getItem)
        let copyfav=[...favouriteList]
        const index=copyfav.findIndex((item)=>item.id===getItem.id)
        if(index===-1){
            copyfav.push(getItem)
        }
        else{
            copyfav.splice(index);
        }
        setFavouriteList(copyfav);
       
    }
   return (
    <GlobalContext.Provider value={{searchParam, setSearchParam, handleSubmit, recipeList, recipeDetails, setRecipeDetails,addToFavoutite, favouriteList}}>
        {children}
    </GlobalContext.Provider>
   )
}