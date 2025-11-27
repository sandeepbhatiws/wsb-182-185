import React, { useState } from 'react'

export default function Filtersidebar({ openFilterBar, setOpenFilterBar }) {
    const [openCategory, setOpenCategory] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);
    const [openRating, setOpenRating] = useState(false);
    const [openBrand, setOpenBrand] = useState(false);
    const [openDiscount, setOpenDiscount] = useState(false);

    return (
        <>
            {/* Sidebar container */}
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
                            <label className="flex gap-2"><input type="checkbox" /> ₹10 - ₹250</label>
                            <label className="flex gap-2"><input type="checkbox" /> ₹250 - ₹500</label>
                            <label className="flex gap-2"><input type="checkbox" /> ₹500 - ₹1000</label>
                            <label className="flex gap-2"><input type="checkbox" /> ₹1000+</label>
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
        </>
    )
}
