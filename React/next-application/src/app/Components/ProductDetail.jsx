'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function ProductDetail() {

    const params = useParams();
    const [productDetails, setProductDetails] = useState('');
    const [singleImage, setSingleImage] = useState('');
    const [multipleImages, setMultipleImages] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/productdetails.php?id=${params.id}`)
            .then((result) => {
                setProductDetails(result.data.product)
                setSingleImage(result.data.product.multiple_images[0])
                setMultipleImages(result.data.product.multiple_images)
            })
            .catch(() => {
                toast.error('Something went wrong !!');
            })
    }, [params])

    const changeImage = (image) => {
        setSingleImage(image)
    }


    return (
        <div className="w-full bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-[1300px] mx-auto md:flex gap-10">

                {/* ---------- LEFT SIDE ---------- */}
                <div className="md:basis-1/2 w-full">

                    {/* Main Image */}
                    <div className="w-full border rounded-xl p-4 bg-white dark:bg-gray-800 shadow-sm flex justify-center">
                        <img
                            src={singleImage}
                            className="rounded-lg w-[350px] md:w-[430px]"
                            alt="product"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex justify-center gap-3 mt-4">


                        {
                            multipleImages.map((image, key) => {
                                return (
                                    <div key={key}
                                        className="w-[70px] h-[70px] border rounded-lg overflow-hidden cursor-pointer hover:opacity-80 bg-white dark:bg-gray-800 shadow-sm"
                                    >
                                        <img onMouseOver={() => changeImage(image) }
                                            src={image}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-8 border-b pb-6">
                        <button className="w-[48%] border border-blue-600 text-blue-600 py-3 rounded-md font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                            Add to Cart
                        </button>

                        <button className="w-[48%] bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                            Buy Now
                        </button>
                    </div>

                </div>

                {/* ---------- RIGHT SIDE ---------- */}
                <div className="md:basis-1/2 w-full space-y-6">

                    {/* Title + Price */}
                    <div className="border rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm">

                        <h2 className="text-[24px] font-semibold text-gray-900 dark:text-gray-100">
                            Dummy Product Name
                        </h2>

                        {/* Price Section */}
                        <div className="flex items-center gap-4 mt-3">
                            <span className="text-[32px] font-bold text-gray-900 dark:text-white">
                                ₹499
                            </span>

                            <span className="line-through text-gray-400 text-[15px]">
                                ₹899
                            </span>

                            <span className="text-green-600 font-semibold text-[18px]">
                                40% off
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="px-3 flex items-center w-fit text-white text-[14px] py-1 rounded-xl mt-4 bg-green-600">
                            ⭐ 4.5
                        </div>

                        {/* Delivery Badge */}
                        <p className="bg-gray-100 dark:bg-gray-700 w-fit mt-4 px-3 py-1 rounded-full text-[12px] font-semibold text-gray-600 dark:text-gray-300">
                            Free Delivery
                        </p>

                    </div>

                    {/* Product Details */}
                    <div className="border rounded-xl p-5 bg-white dark:bg-gray-800 shadow-sm">
                        <h3 className="text-[20px] font-semibold mb-3 text-gray-900 dark:text-gray-100">
                            Product Details
                        </h3>

                        <div className="text-gray-700 dark:text-gray-300 leading-7 text-[15px]">
                            <p>Name: Dummy Product Name</p>
                            <p>Brand: Dummy Brand</p>
                            <p>Warranty: 1 Year</p>
                            <p>Shipping: Free Delivery</p>
                            <p>Stock Status: In Stock</p>
                            <p>Return Policy: 7 Days Return</p>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
