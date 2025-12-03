"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ProductCard from "./Common/ProductCard";
import { useParams } from "next/navigation";

export default function Productlisting() {

    const params = useParams();

    let [filterCategories, setFilterCategories] = useState('')

    

    const [openCategory, setOpenCategory] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);
    const [openRating, setOpenRating] = useState(false);
    const [openBrand, setOpenBrand] = useState(false);
    const [openDiscount, setOpenDiscount] = useState(false);
    let [openFilterBar, setOpenFilterBar] = useState(false)
    const [getProducts, setGetProducts] = useState([]);
    let [sorting, setSorting] = useState('')
    let [priceFrom, setPriceFrom] = useState('')
    let [priceTo, setPriceTo] = useState('')

    useEffect(() => {
        if(params.slug){
            axios.get('https://wscubetech.co/ecommerce-api/products.php', {
                params: {
                    limit: 16,
                    sorting: sorting,
                    price_from: priceFrom,
                    price_to: priceTo,
                    categories : params.slug[0]
                }
            })
                .then((result) => {
                    setGetProducts(result.data.data)
                })
                .catch(() => {
                    toast.error('Something went wrong !!');
                });
        } else {
            axios.get('https://wscubetech.co/ecommerce-api/products.php', {
                params: {
                    limit: 16,
                    sorting: sorting,
                    price_from: priceFrom,
                    price_to: priceTo,
                    categories : filterCategories
                }
            })
                .then((result) => {
                    setGetProducts(result.data.data)
                })
                .catch(() => {
                    toast.error('Something went wrong !!');
                });
        }
        
    }, [priceFrom, priceTo, filterCategories, params])

    const filterPrice = (from, to) => {
        setPriceFrom(from)
        setPriceTo(to)
    }

    useEffect(() => {
        if(params.slug){
            setFilterCategories(params.slug[0]);
        }
    },[params])
    console.log(params);

    return (
        <div className="md:flex bg-gray-50 dark:bg-gray-900">
            <div className={`
                fixed top-0 h-screen w-64 bg-white dark:bg-gray-800
                border-l border-gray-200 dark:border-gray-700 p-5 shadow-lg
                transition-all duration-300 z-40 md:z-0

                md:sticky md:top-20 md:right-0 md:block
                ${openFilterBar ? "right-0" : "-right-full md:right-0"}
            `}>

                {/* ---------- HEADER ---------- */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                        Filters
                    </h2>

                    {/* Close button only on mobile */}
                    <button
                        onClick={() => setOpenFilterBar(false)}
                        className="md:hidden text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* ---------- FILTER LIST ---------- */}
                <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">

                    {/* CATEGORY */}
                    <li>
                        <button
                            onClick={() => setOpenCategory(!openCategory)}
                            className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Category
                            <span>{openCategory ? "−" : "+"}</span>
                        </button>
                        <div className={`${openCategory ? "block" : "hidden"} ml-3 mt-2 space-y-2`}>
                            <label className="flex gap-2"><input type="checkbox" /> Electronics</label>
                            <label className="flex gap-2"><input type="checkbox" /> Fashion</label>
                            <label className="flex gap-2"><input type="checkbox" /> Grocery</label>
                            <label className="flex gap-2"><input type="checkbox" /> Home</label>
                        </div>
                    </li>

                    {/* BRANDS */}
                    <li>
                        <button
                            onClick={() => setOpenBrand(!openBrand)}
                            className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Brands
                            <span>{openBrand ? "−" : "+"}</span>
                        </button>
                        <div className={`${openBrand ? "block" : "hidden"} ml-3 mt-2 space-y-2`}>
                            <label className="flex gap-2"><input type="checkbox" /> Samsung</label>
                            <label className="flex gap-2"><input type="checkbox" /> Apple</label>
                            <label className="flex gap-2"><input type="checkbox" /> Sony</label>
                            <label className="flex gap-2"><input type="checkbox" /> Puma</label>
                        </div>
                    </li>

                    {/* PRICE */}
                    <li>
                        <button
                            onClick={() => setOpenPrice(!openPrice)}
                            className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Price Range
                            <span>{openPrice ? "−" : "+"}</span>
                        </button>
                        <div className={`${openPrice ? "block" : "hidden"} ml-3 mt-2 space-y-2`}>
                            <label className="flex gap-2" onClick={() => filterPrice(0, 250)}><input type="radio" name="price" /> ₹0 - ₹250</label>
                            <label className="flex gap-2" onClick={() => filterPrice(250, 500)}><input type="radio" name="price" /> ₹250 - ₹500</label>
                            <label className="flex gap-2" onClick={() => filterPrice(500, 1000)}><input type="radio" name="price" /> ₹500 - ₹1000</label>
                            <label className="flex gap-2" onClick={() => filterPrice(1000, '')}><input type="radio" name="price" /> ₹1000+</label>
                        </div>
                    </li>

                    {/* RATING */}
                    <li>
                        <button
                            onClick={() => setOpenRating(!openRating)}
                            className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Rating
                            <span>{openRating ? "−" : "+"}</span>
                        </button>
                        <div className={`${openRating ? "block" : "hidden"} ml-3 mt-2 space-y-2`}>
                            <label className="flex gap-2"><input type="checkbox" /> 4★ & above</label>
                            <label className="flex gap-2"><input type="checkbox" /> 3★ & above</label>
                            <label className="flex gap-2"><input type="checkbox" /> 2★ & above</label>
                            <label className="flex gap-2"><input type="checkbox" /> 1★ & above</label>
                        </div>
                    </li>

                    {/* DISCOUNT */}
                    <li>
                        <button
                            onClick={() => setOpenDiscount(!openDiscount)}
                            className="w-full flex justify-between items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            Discount
                            <span>{openDiscount ? "−" : "+"}</span>
                        </button>
                        <div className={`${openDiscount ? "block" : "hidden"} ml-3 mt-2 space-y-2`}>
                            <label className="flex gap-2"><input type="checkbox" /> 10% & above</label>
                            <label className="flex gap-2"><input type="checkbox" /> 20% & above</label>
                            <label className="flex gap-2"><input type="checkbox" /> 30% & above</label>
                        </div>
                    </li>

                </ul>
            </div>

            <main className="flex-1 p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Products
                    </h1>

                    <div className="flex items-center gap-3">

                        {/* ---------- FILTER ICON ---------- */}
                        <button onClick={() => setOpenFilterBar(true)} className="flex md:hidden items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5.172a1 1 0 00-.293-.707L3.293 6.707A1 1 0 013 6V4z" />
                            </svg>
                        </button>

                        {/* ---------- SORTING DROPDOWN ---------- */}
                        <div className="relative group">

                            {/* Button */}
                            <button
                                className="inline-flex items-center justify-center 
                                    bg-blue-600 text-white 
                                    hover:bg-blue-700 
                                    focus:ring-4 focus:ring-blue-300 
                                    shadow-sm font-medium 
                                    rounded-md text-sm px-4 py-2 
                                    transition"
                            >
                                Sorting
                                <svg
                                    className="w-4 h-4 ml-2 transition-transform group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19 9-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown */}
                            <div
                                className="absolute right-0 mt-2 hidden group-hover:block
                                   bg-white dark:bg-gray-800 
                                   border border-gray-200 dark:border-gray-700 
                                   shadow-lg rounded-md w-60 z-20 overflow-hidden"
                            >
                                <ul className="text-sm text-gray-700 dark:text-gray-200">
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Ascending</button></li>
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Descending</button></li>
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Price Low to High</button></li>
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Price High to Low</button></li>
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Discounted Price Low to High</button></li>
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Discounted Price High to Low</button></li>
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Rating Low to High</button></li>
                                    <li><button className="w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Rating High to Low</button></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-5">
                    {
                        getProducts.map((value, index) => {
                            return (
                                <ProductCard key={index} data={value} />
                            )
                        })
                    }

                </div>
            </main>


        </div>
    );
}



