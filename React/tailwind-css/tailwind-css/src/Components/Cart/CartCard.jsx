import React from 'react'

export default function CartCard() {
    return (
        <div className="flex gap-4 bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-28 h-28 shrink-0">
                <img src="https://i.imgur.com/9YF7v7D.png" className="w-full h-full object-contain rounded-lg" />
            </div>

            <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Wireless Headphones</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Price: <span className="font-bold text-gray-900 dark:text-white">₹ 999</span>
                </p>

                <div className="mt-auto flex items-center gap-3">
                    <button className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">-</button>
                    <span className="font-bold text-gray-900 dark:text-white text-sm">1</span>
                    <button className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">+</button>
                </div>
            </div>

            {/* Delete button */}
            <div className="flex flex-col items-end ml-auto">
                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-red-500 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-gray-600 hover:fill-white" viewBox="0 0 24 24">
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Z" />
                    </svg>
                </button>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mt-auto">₹ 999</h3>
            </div>
        </div>
    )
}
