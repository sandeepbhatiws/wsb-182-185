import React from 'react'
import ProductCard from '../Common/ProductCard'

export default function FilterProducts({ openFilterBar, setOpenFilterBar }) {
    return (
        <>
            <main className="flex-1 p-6 md:p-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Products
                    </h1>

                    <div className="flex items-center gap-3">

                        {/* ---------- FILTER ICON ---------- */}
                        <button onClick={()=>setOpenFilterBar(true)} className="flex md:hidden items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition">
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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </main>
        </>
    )
}
