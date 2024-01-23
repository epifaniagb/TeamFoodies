import { fetchData } from "./utils";

export const region = async () => {
  const eachRegion = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

  const mainRegion = ['American', 'Spanish', 'Mexican', 'Chinese', 'Italian', 'Jamaican', 'British', 'French', 'Portuguese', 'Greek' ]
  const filteredRegions = eachRegion.meals.filter((regions => mainRegion.includes(regions.strArea)))

  console.log(filteredRegions)

  const listOfRegions = document.querySelector('.dropdown-menu')
  filteredRegions.forEach(region => {
    const li = document.createElement('li')
    const a = document.createElement('a')

    a.href='#'
    a.textContent = region.strArea
    li.append(a)
    listOfRegions.append(li)
  })
};

export const selectedRegion = async(area) => {
  const oneRegion = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
  
  console.log(oneRegion)
}