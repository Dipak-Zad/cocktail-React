import React from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";


const MainLayout = () =>
{
    return  <>
                <div className="layout-container">
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </>
}

export default MainLayout;