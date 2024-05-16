import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { useParams } from "react-router-dom";

const Details = () => {
  const { recipeDetails, setRecipeDetails, addToFavoutite, favouriteList } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    async function getDetails() {
      const resp = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await resp.json();

      if (data?.data.recipe) {
        setRecipeDetails(data?.data?.recipe);
      }
    }
    getDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group ">
          <img
            src={recipeDetails?.image_url}
            alt=""
            className="w-full h-full object-cover block group-hover:scale-110 duration-300 "
          />
          
        </div>
        <h3 className="font-bold text-4xl m-4 text-sky-800 truncate">
          {recipeDetails?.title}
        </h3>
        <div>
        <span className="text-md text-black font-medium m-4">
          published_by:- {recipeDetails?.publisher}
        </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-500 font-medium">
          {recipeDetails?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.title}
        </h3>
        <div>
          <button onClick={()=>addToFavoutite(recipeDetails)}
          className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white">
            {
              favouriteList.findIndex((item)=>item.id===recipeDetails.id)!==-1 ? 'Remove from favourite ' 
              : 'Add to favourite'  
            }
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black mb-3 pb-3">
            Ingredients : -{" "}
          </span>
          <ul className="flex flex-col gap-3">
    
            {  
                recipeDetails?.ingredients?.map((item, index) => (
              <li key={index}>
                <span className='text-2xl font-semibold text-black'>{item.quantity} {item.unit}</span>
                <span className='text-2xl font-semibold text-black ml-2'>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
