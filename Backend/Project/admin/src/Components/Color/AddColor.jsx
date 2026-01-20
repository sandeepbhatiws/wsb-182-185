import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

export default function AddColor() {
    let [errors, setErrors] = useState([]);
    let [updateId, setUpdateId] = useState('');
    let [colorDetails, setColorDetails] = useState('');

    let params = useParams();

    useEffect(() => {
        if (params.id != undefined && params.id != '') {
            setUpdateId(params.id);

            axios.post(`${ import.meta.env.VITE_COLOR_URL }/details/${params.id}`)
                .then((result) => {
                    if (result.data._status == true) {
                        setColorDetails(result.data._data);
                    } else {
                        setColorDetails('');
                    }
                })
                .catch(() => {
                    iziToast.error({
                        title: 'Error',
                        message: 'Something went wrong !',
                        position: 'topRight',
                    });
                })
        }
    }, [params]);

    const navigate = useNavigate();

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

    let formhandler = (event) => {
        event.preventDefault();

        let form = event.target;
        let fields = form.querySelectorAll('input')

        let newErrors = [];

        fields.forEach((field) => {
            if (!field.value.trim()) {
                newErrors.push(field.name);
            }
        });

        newErrors = [...new Set(newErrors)];
        setErrors(newErrors);

        if (newErrors.length === 0) {

            if (updateId == '') {
                axios.post(`${ import.meta.env.VITE_COLOR_URL }/create`, {
                    name: event.target.name.value,
                    code: event.target.code.value,
                    order: event.target.order.value
                })
                    .then((result) => {
                        if (result.data._status == true) {
                            event.target.reset()
                            iziToast.success({
                                title: 'Success',
                                message: result.data._message,
                                position: 'topRight',
                            });
                            navigate('/color/view');
                        } else {
                            iziToast.error({
                                title: 'Error',
                                message: result.data._message,
                                position: 'topRight',
                            });
                        }
                    })
                    .catch(() => {
                        iziToast.error({
                            title: 'Error',
                            message: 'Something went wrong !',
                            position: 'topRight',
                        });
                    })
            } else {
                axios.put(`${ import.meta.env.VITE_COLOR_URL }/update/${updateId}`, {
                    name: event.target.name.value,
                    code: event.target.code.value,
                    order: event.target.order.value
                })
                    .then((result) => {
                        if (result.data._status == true) {
                            event.target.reset()
                            iziToast.success({
                                title: 'Success',
                                message: result.data._message,
                                position: 'topRight',
                            });
                            navigate('/color/view');
                        } else {
                            iziToast.error({
                                title: 'Error',
                                message: result.data._message,
                                position: 'topRight',
                            });
                        }
                    })
                    .catch(() => {
                        iziToast.error({
                            title: 'Error',
                            message: 'Something went wrong !',
                            position: 'topRight',
                        });
                    })
            }
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
                            <Link to={`/dashboard`} className="text-md font-medium hover:text-gray-800">
                            Home
                            </Link>
                        </li>
                        <li>/</li>
            
                        <li>
                            <Link to={`/color/view`} className="text-md font-medium hover:text-gray-800">
                            Colors
                            </Link>
                        </li>
                        <li>/</li>
            
                        <li aria-current="page">
                            <span className="text-md font-semibold text-gray-900">
                            {updateId ? 'Update Color' : 'Add Color'}
                            </span>
                        </li>
                    </ol>
                </nav>

                {/* BODY */}
                <div className="w-full min-h-[680px] px-5 bg-gray-100 py-10">
                    <div className="mx-auto ">

                        <h3 className="text-[24px] font-semibold bg-gray-200 py-3 px-5  rounded-t-lg border border-gray-300 text-gray-800">
                            {updateId ? 'Update Color' : 'Add Color'}
                        </h3>

                        <form onSubmit={formhandler} className="border border-t-0 bg-white p-6 rounded-b-lg shadow-sm">

                            {/* Color Name */}
                            <div className="mb-6">
                                <label className="block mb-2 text-md font-medium text-gray-700">
                                    Color Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={colorDetails.name}
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
                                    defaultValue={colorDetails.code}
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
                                    defaultValue={colorDetails.order}
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
                                {updateId ? 'Update' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
