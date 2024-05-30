import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from './../assets/data/tours'
import { COl } from 'reactstrap'

const FeaturedTourList = () => {
  return <>
  {
    tourData?.map(tour=>(
        <COl lg='3' classname='mb-4'><TourCard/></COl>
    ))
  }
  </>
}

export default FeaturedTourList
