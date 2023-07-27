export function filterData(SearchText,restaurants){
    return restaurants.filter((restaurant)=>restaurant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase()));
}