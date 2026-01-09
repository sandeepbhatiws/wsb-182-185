import React, { useState } from "react";

export default function AddColor() {

    let [errors, setErrors] = useState([]);


    let ErrorHandler = (event) => {
        
        let fieldName = event.target.name;


        if (event.target.value === "") {

            if (!errors.includes(fieldName)) {
                setErrors([...errors, fieldName]);
            }
        } else {

            let updated = errors.filter((v) => v !== fieldName);
            setErrors(updated);
        }
    };

    return (
        <>
            <section className="w-full">

                {/* Breadcrumb */}
                <nav
                    className="flex border-b bg-white px-6 py-3 shadow-sm"
                    aria-label="Breadcrumb"
                >
                    <ol className="inline-flex items-center space-x-2 text-gray-600">
                        <li>
                            <a href="#" className="text-md font-medium hover:text-gray-800">
                                Home
                            </a>
                        </li>
                        <li>/</li>

                        <li>
                            <a href="#" className="text-md font-medium hover:text-gray-800">
                                Color
                            </a>
                        </li>
                        <li>/</li>

                        <li aria-current="page">
                            <span className="text-md font-semibold text-gray-900">
                                Add Color
                            </span>
                        </li>
                    </ol>
                </nav>

                {/* BODY */}
                <div className="w-full min-h-[680px] px-5 bg-gray-100 py-10">
                    <div className="mx-auto ">

                        <h3 className="text-[24px] font-semibold bg-gray-200 py-3 px-5  rounded-t-lg border border-gray-300 text-gray-800">
                            Add New Color
                        </h3>

                        <form className="border border-t-0 bg-white p-6 rounded-b-lg shadow-sm">

                            {/* Color Name */}
                            <div className="mb-6">
                                <label className="block mb-2 text-md font-medium text-gray-700">
                                    Color Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="off"
                                    onKeyUp={ErrorHandler}
                                    className="text-[17px] border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full py-2.5 px-3"
                                    placeholder="Enter color name (e.g., Red)"
                                />

                                {errors.includes("name") && (
                                    <p className="text-red-600 text-sm mt-1">
                                        Name is required
                                    </p>
                                )}
                            </div>

                            {/* Color Code */}
                            <div className="mb-6">
                                <label className="block mb-2 text-md font-medium text-gray-700">
                                    Color Code
                                </label>

                                <input
                                    type="text"
                                    name="code"
                                    autoComplete="off"
                                    onKeyUp={ErrorHandler}
                                    className="text-[17px] border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full py-2.5 px-3"
                                    placeholder="Hex code (e.g., #FF5733)"
                                />

                                {errors.includes("code") && (
                                    <p className="text-red-600 text-sm mt-1">
                                        Color code is required
                                    </p>
                                )}
                            </div>

                            {/* Order (NO error needed) */}
                            <div className="mb-6">
                                <label className="block mb-2 text-md font-medium text-gray-700">
                                    Order
                                </label>

                                <input
                                    type="number"
                                    name="order"
                                    min={1}
                                    autoComplete="off"
                                    className="text-[17px] border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full py-2.5 px-3"
                                    placeholder="Enter order number"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-3 cursor-pointer text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
