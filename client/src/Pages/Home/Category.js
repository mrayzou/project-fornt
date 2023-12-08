import React from 'react'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import End from '../../Components/Footer/End'
import ProductSlider from '../../Components/Caroussel/ProductSlider'
import Cards from '../../Components/Cards/Cards'
 
 const Category = () => {
  return (
    <div>
      <ProductSlider/>
      <Cards/>
      <CategoryCard/>
<End/>

    </div>
  )
}

export default Category