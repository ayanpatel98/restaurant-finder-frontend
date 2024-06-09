import { restaurants } from '@/data/restaurants-list';
import RestaurantsItem from '@/app/components/restaurants-item';
import { redirect } from 'next/navigation';

// Fetch restaurant data if the city and state are valid
const fetchCityStateRestaurants = async (city, state) => {
    if( restaurants && restaurants[state] && restaurants[state][city]) return restaurants[state][city];
    return [];
}

// Capitalize the first letter
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Define metadata for this page for displaying restaurants
export const generateMetadata = async ({ params }) => {
    const { city, state } = params;
    return {
        title: `Top Restaurants in ${city}, ${state} | Paprika`,
        description: `Discover the best restaurants in ${city}, ${state}. Catering to all dietary preferences including vegan, vegetarian, and gluten-free options.`,
        keywords: `restaurants, ${city}, ${state}, vegan, vegetarian, gluten-free`,
    }
}

// export default async function CityStateRestaurants({ params }) {
const CityStateRestaurants = async ({ params }) => {
    const { city, state } = params;
    const cityStateRestaurants = await fetchCityStateRestaurants(city, state);

    return (
        // Render the output if there are restaurants data else go to 404 Not found page
        (cityStateRestaurants && cityStateRestaurants.length>0)
        ?
        <div>
            <h1>Restaurants in {capitalizeFirstLetter(city)}, {String(state).toUpperCase()}</h1>
            <RestaurantsItem restaurants={cityStateRestaurants} />
        </div>
        :
        redirect('/404.js')
    );
}

export default CityStateRestaurants;