import Link from 'next/link';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/style.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { login, logout } from '@/app/Redux Toolkit/userSlice';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const isLogin = useSelector((getState) => {
        return getState.user_login.isLogin;
    })

    const cartItems = useSelector((getState) => {
        return getState.cart.cartItems;
    })

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((result) => {
                setCategories(result.data.data);
            })
            .catch(() => {
                toast.error('Something went wrong !!')
            })
    }, []);

    // Make Exucutable Function
    var dispatch = useDispatch();

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 sticky top-0 z-20 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* Logo */}
                    <Link href={`/`}>
                        <div className="flex items-center gap-2">
                            <img
                                src="https://flowbite.com/images/logo.svg"
                                className="h-8"
                                alt="logo"
                            />
                            <span className="text-xl font-semibold dark:text-white">
                                Flowbite
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">
                        <li className="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer">
                            Home
                        </li>
                        <Link href={`/products`}>
                            <li className="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer">
                                Products
                            </li>
                        </Link>
                        {
                            categories.map((v,i) => {
                                return (
                                    i < 5 
                                    ?
                                    <Link href={`/products/${v.slug}`}>
                                        <li className="hover:text-blue-600 dark:hover:text-blue-500 cursor-pointer">
                                            {v.name}
                                        </li>
                                    </Link>
                                    :
                                    ''
                                    
                                )
                            })
                        }
                    </ul>

                    {/* Cart + Mobile Icon */}
                    <div className="flex items-center gap-3">

                        {/* Cart Button */}
                        <Link href={'/cart'}>
                            <button className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
                                View Cart
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                                    {cartItems.length}
                                </span>
                            </button>
                        </Link>

                        {
                            isLogin
                                ?
                                <button onClick={() => dispatch(logout())} className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
                                    Logout
                                </button>
                                :
                                <>
                                    <button onClick={() => dispatch(login())} className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
                                        Login
                                    </button>

                                    <button className="relative bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition">
                                        Register
                                    </button>
                                </>
                        }

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            {mobileOpen ? (
                                <svg
                                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-col gap-2 p-4 text-gray-700 dark:text-gray-300 font-medium">
                            <li className="py-2 hover:text-blue-600 dark:hover:text-blue-500">Home</li>
                            <li className="py-2 hover:text-blue-600 dark:hover:text-blue-500">Products</li>
                            <li className="py-2 hover:text-blue-600 dark:hover:text-blue-500">Services</li>
                            <li className="py-2 hover:text-blue-600 dark:hover:text-blue-500">Contact</li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}
