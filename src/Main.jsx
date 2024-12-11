import React from "react";
import Header from "./Header";
import Heroslider from "./Heroslider";
import HomeService from "./HomeService"
import ShopByCategory from "./ShopByCategory";
const Main = () => {
    return (
        <>
            <Header />
            <Heroslider/>
            <HomeService/>
            <ShopByCategory/>
        </>
    )
}
export default Main;