import React, { useState, useEffect } from "react";
import '../components/ProductList.css'
import Pagination from "./Pagination";
import Category from "./Category";
import Search from "./Search";
function ProductList() {

    let [menu, setMenu] = useState([]);
    let [categories, setCategories] = useState([]);
    let [currPage, setCurrPage] = useState(1);
    let [items, setItems] = useState(4);
    let [loading, setLoading] = useState(true);

    let indexLast = currPage * items ;
    let indexFirst = indexLast - items;
    let showDish = menu.slice(indexFirst, indexLast)

    async function allProducts() {
        const API_URL = "https://fakestoreapi.com/products"
        let response = await fetch(API_URL)
        let data = await response.json()
        console.log(data)
        setMenu(data)
        setLoading(false)

    }

    async function productCategories() {
        const API_URL = "https://fakestoreapi.com/products/categories"
        let response = await fetch(API_URL)
        let categories = await response.json()
        setCategories(categories)
        setLoading(false)

    }
    useEffect(() => {
        allProducts();
        productCategories();
    }, [])



    return (
        <div className="product">{
            showDish.map((details) => {
                return (
                    
                    <div className="productList">
                        <div className="imgBox"><img src={details.image} alt="" /></div>
                        <div className="title">{details.title}</div>
                        <div className="price">{details.price}</div>
                        <div className="rating">{details.rating.rate}</div>
                    </div>
                    
                )
            })
        }
        {!loading ? <Pagination menu = {menu} 
                    items = {items}
                    currPage = {currPage}
                    setCurrPage = {setCurrPage}/> : <h1>loading</h1>} 
        {!loading ?<Category categories = {categories} menu = {menu}/>: <h1>loading</h1>}
        {!loading ? <Search menu={menu}/>: null}
</div>
    )}

export default ProductList;