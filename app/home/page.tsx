'use client'
import { useEffect } from "react"
import Banner from "./Banner"
import CollectionList from "./HomeCollection"
import Hometext from "./HomeText"
import Videos from "./Videos"
import Producttab from './product-tab'



const Home = () =>{
    return (
        <>
        <Banner />
        <Producttab />
        <Hometext />
        <CollectionList />  
        <Videos />
        </>
    )
}

export default Home