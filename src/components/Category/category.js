import React from 'react';
import "./category.scss";
import laptop from "./../../images/laptop.svg";
import motion from "./../../images/motion.svg";
import back from "./../../images/logo.svg";
import bag from "./../../images/back.svg";
import menu from "./../../images/menu.svg";

const Category = () => {
    return (
        <section id="category">
            <div className="container">
                <div className="category">
                    <div className="group">
                        <div className="category--front">
                            <img src={laptop} alt="img"/>
                            <h2 className="text-white ">Front-End <br/> Developer</h2>
                        </div>
                        <div className="category--photo">
                            <img src={back} alt="img" width={90}/>
                            <h2 className="text-white ">Logo</h2>
                        </div>
                        <div className="category--photo">
                            <img src={motion} alt="img"/>
                            <h2 className="text-white ">Motion</h2>
                        </div>
                    </div>
                    <div className="category--block">
                        <div className="category--block__photo">
                            <img src={bag} alt="img" width={70}/>
                            <h2 className="text-white ">Design</h2>
                        </div>
                        <div className="category--block__photo">
                            <img src={menu} alt="img" width={60}/>
                            <h2 className="text-white ">Bloger</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;