import React from 'react'
import CartCard from './Cart/CartCard'

export default function Cart() {
    return (
        <div className="w-full bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-[1300px] p-3 mx-auto md:flex gap-10">

                {/* ---------- LEFT SIDE ---------- */}
                <div className="md:basis-2/3 w-full pb-3 space-y-6">

                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Your Cart</h1>

                    {/* Cart Item 1 */}

                    <CartCard />
                </div>

                {/* ---------- RIGHT SIDE: BILLING ---------- */}
                <div className="md:basis-1/3 w-full bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 h-max">
                    <ul className="text-gray-700 dark:text-gray-300 space-y-4 text-sm">
                        <li className="flex justify-between font-medium">
                            Subtotal <span>₹ 3997</span>
                        </li>
                        <li className="flex justify-between font-medium">
                            Shipping <span>₹ 0</span>
                        </li>
                        <li className="flex justify-between font-medium">
                            Tax <span>₹ 0</span>
                        </li>
                        <hr className="border-gray-300 dark:border-gray-600" />
                        <li className="flex justify-between font-bold text-gray-900 dark:text-white">
                            Total <span>₹ 3997</span>
                        </li>
                    </ul>

                    <div className="mt-6 space-y-3">
                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm transition">
                            Buy Now
                        </button>
                        <button className="w-full py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 rounded-lg transition">
                            Continue Shopping
                        </button>
                    </div>

                    <div className="mt-4 flex justify-center gap-4">
                        <img src="https://readymadeui.com/images/master.webp" className="w-10" />
                        <img src="https://readymadeui.com/images/visa.webp" className="w-10" />
                        <img src="https://readymadeui.com/images/american-express.webp" className="w-10" />
                    </div>
                </div>

            </div>
        </div>
    )
}
