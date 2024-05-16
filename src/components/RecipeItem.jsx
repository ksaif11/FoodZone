import React from 'react'
import {Link} from 'react-router-dom'
const RecipeItem = ({item}) => {
   
  return (
    <div className='flex flex-col w-80 overflow-hidden p-5 bg-white-600  shadow-lg g-5 border-2 rounded-md border-white'>
      <div className=' flex h-40 justify-center items-center overflow-hidden rounded-xl'>
        <img src={item.image_url} alt="image" className='block w-full' />
      </div>
      <div>
        <span className='text-sm text-teal-700 mb-2 font-medium'>published_by: {item.publisher}</span>
        <h2 className='font-bold text-2xl truncate  text-black'>{item.title}</h2>
        <Link to={`recipe-item/${item.id}`}
        className='text-sm p-3 mt-2 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white'>Recipe Details</Link>
      </div>
    </div>
  )
}

export default RecipeItem
