import React from 'react';
import Image from 'next/image';

const RestaurantsItem = ({ restaurants }) => {
  return (
    <ul>
      {
        // Render each entry of the restaurant
        restaurants.map((restaurant) => (
          <li key={restaurant.id} className="row">
            <div className='col-sm-12 col-md-3'> <Image
              src = {restaurant.imageUrl}
              width={100}
              height={100}
              alt="Picture of the author"
            /></div>
            <div className='col-sm-12 col-md-9 d-flex align-items-center'><b>Name: </b> {restaurant.name} <b> | Cuisine Type:</b>{restaurant.cuisine}</div>
          </li>
        ))
      }
    </ul>
  )
}

export default RestaurantsItem;