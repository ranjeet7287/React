export function filterData(SearchText,restaurants){
    return restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(SearchText.toLowerCase()));
}