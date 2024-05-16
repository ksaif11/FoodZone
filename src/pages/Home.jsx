import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context';
import RecipeItem from '../components/RecipeItem';


const Home = () => {
  const { recipeList } = useContext(GlobalContext);


  return (
    <div className="container mx-20 px-15 py-8">
      {recipeList && recipeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 ">
          {recipeList.map(item => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Nothing to show, Please search for a food item</h2>
           
      
          
        </div>
      )}
    </div>
  );
}

export default Home;
