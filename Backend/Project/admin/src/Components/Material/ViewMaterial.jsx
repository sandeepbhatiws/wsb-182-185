import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import iziToast from "izitoast";
import axios from 'axios';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

export default function ViewMaterial() {
  const [openFilter, setOpenFilter] = useState(false);
  const [materials, setMaterials] = useState([]);
  const [filterData, setFilterData] = useState({})
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);
  const [apiStatus, setApiStatus] = useState(false);

  const applyFilter = (e) => {
    e.preventDefault();
    setCurrentPage(1);

    let obj = {
      name: e.target.name.value,
    };

    setFilterData(obj);
  };

  useEffect(() => {
    axios.post(`${ import.meta.env.VITE_MATERIAL_URL }/view`, {
      name: filterData.name,
      page: currentPage
    })
      .then((result) => {
        if(result.data._status == true){
          setMaterials(result.data._data);
          settotalPages(result.data._paginate.total_pages)
        } else {
          setMaterials([]);
          settotalPages(0)
        }
        
      })
      .catch(() => {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong !',
          position: 'topRight',
        });
      })
  }, [filterData, currentPage, apiStatus])

  const [selectedRecord, setSelectedRecord] = useState([])

  const singleCheckSelect = (id) => {
    if (selectedRecord.includes(id)) {
      let finalData = selectedRecord.filter((v) => {
        if (v != id) {
          return v
        }
      })

      setSelectedRecord(finalData)
    } else {
      let finalData = [...selectedRecord, id]
      setSelectedRecord(finalData)
    }
  }

  const allCheckBoxSelect = () => {
    if(materials.length == selectedRecord.length){
      setSelectedRecord([]);
    } else {
      var values = [];

      materials.forEach((v) => {
        values.push(v._id);
      })

      setSelectedRecord([...values]);

    }
  }
  const changeStatus = () => {
    if (selectedRecord.length > 0) {
      axios.put(`${ import.meta.env.VITE_MATERIAL_URL }/change-status`, {
        ids: selectedRecord,
      })
        .then((result) => {
          if(result.data._status == true){
            iziToast.success({
              title: "Change Status",
              message: result.data._message,
              position: "topRight",
            });
            setSelectedRecord([]);
            setApiStatus(!apiStatus);
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
      iziToast.error({
        title: "No Selection",
        message: "Please select at least one material to change status.",
        position: "topRight",
      });
    }
  };

  const deleteRecords = () => {
    if (selectedRecord.length > 0) {
      iziToast.question({
        timeout: 20000,
        close: true,
        overlay: true,
        displayMode: "once",
        id: "delete-confirm",
        zindex: 999999,
        title: "Confirm Delete",
        message: "Are you sure you want to delete ?",
        position: "center",
        buttons: [
          [
            "<button><b>Yes</b></button>",
            function (instance, toast) {
              destroy();
              instance.hide({ transitionOut: "fadeOut" }, toast);
            },
            true,
          ],
          [
            "<button>No</button>",
            function (instance, toast) {
              instance.hide({ transitionOut: "fadeOut" }, toast);
            },
          ],
        ],
      });

    } else {
      iziToast.error({
        title: "Error",
        message: "Please select at least one material to delete.",
        position: "topRight",
      });
    }
  };

  const destroy = () => {
    axios.put(`${ import.meta.env.VITE_MATERIAL_URL }/delete`, {
      ids: selectedRecord,
    })
    .then((result) => {
      if(result.data._status == true){
        iziToast.success({
          title: "Delete",
          message: result.data._message,
          position: "topRight",
        });
        setSelectedRecord([]);
        setApiStatus(!apiStatus);
      }
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong !',
        position: 'topRight',
      });
    })
  };

  return (
    <>
      <section className="w-full">

        {/* ---------------- Breadcrumb ---------------- */}
        <nav className="flex border-b-2 bg-white py-3 px-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li><a className="text-md font-medium text-gray-700 hover:text-blue-600">Home</a></li>
            <li>/ <a className="text-md font-medium text-gray-700 hover:text-blue-600">Material</a></li>
            <li>/ <span className="text-md font-medium text-gray-500">View Material</span></li>
          </ol>
        </nav>

        {/* ---------------- FILTER BOX ---------------- */}

        <div
          className={`px-5 overflow-hidden transition-all duration-300 ease-out 
           ${openFilter ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
            `}
        >

          <form
            onSubmit={applyFilter}
            className="py-3 relative px-6 my-3 rounded-lg border w-full bg-white shadow-sm"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpenFilter(false)}
              className="absolute cursor-pointer right-4 top-4 text-[28px] text-gray-600 hover:text-black"
            >
              <MdOutlineClose />
            </button>


            <p className="font-bold py-2 text-[20px]">FILTER</p>

            {/* Input Fields */}
            <div className="flex items-center gap-6">
              <div className="mb-5">
                <label className="block mb-2 font-medium">Material Name</label>
                <input
                  type="text"
                  name="name"
                  autoComplete="off"


                  placeholder="Enter Material Name"
                  className="border-2 border-gray-300 shadow-sm w-full rounded-md px-2 py-1 text-[17px]"
                />
              </div>


            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="reset"
                onClick={() => setFilterData({})}
                className="text-white cursor-pointer bg-gray-500 hover:bg-gray-600 px-6 py-2.5 rounded-lg"
              >
                Clear
              </button>

              <button
                type="submit"
                className="text-white cursor-pointer bg-purple-700 hover:bg-purple-800 px-6 py-2.5 rounded-lg"
              >
                Apply
              </button>
            </div>
          </form>
        </div>



        {/* ---------------- MAIN CONTENT ---------------- */}
        <div className=" mx-auto px-5 py-5">

          {/* ---------------- Header ---------------- */}
          <div className="bg-slate-100 flex justify-between items-center py-3 px-4 rounded-t-md border border-slate-400">
            <div className="text-[26px] font-semibold">View Material</div>

            <div className="flex gap-3 items-center">

              {/* Filter Button */}
              <button
                onClick={() => setOpenFilter(!openFilter)}
                className="cursor-pointer flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm border"
              >
                <FaFilter /> Filter
              </button>

              <button onClick={deleteRecords} disabled={selectedRecord.length == 0} className="cursor-pointer disabled:bg-[grey] text-white disabled:cursor-not-allowed  bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 rounded-lg">
                Delete All
              </button>

              <button onClick={changeStatus} disabled={selectedRecord.length == 0} className="text-white disabled:bg-[grey] cursor-pointer disabled:cursor-not-allowed  bg-purple-700 hover:bg-purple-800 text-sm px-5 py-2.5 rounded-lg">
                Change Status
              </button>
            </div>
          </div>

          {/* ---------------- TABLE ---------------- */}
          <div className="border border-t-0 rounded-b-md border-slate-400">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-700">
                <thead className="text-sm uppercase bg-gray-50 border-b">
                  <tr>
                    <th className="px-2 w-[125px] py-3">
                      <input name="deleteCheck" id="purple-checkbox" type="checkbox"
                      checked={ selectedRecord.length == materials.length ? true : false }
                      onClick={ allCheckBoxSelect }
                        className="mr-2 w-4 h-4 cursor-pointer text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" value="" />    Select</th>
                    <th className="px-2   py-3">Name</th>
                    <th className="px-2 w-[100px]  py-3">Order</th>
                    <th className="px-2 w-[120px]  py-3">Status</th>
                    <th className="px-2 w-[120px]  py-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    materials.length > 0
                      ?
                      materials.map((v, i) => {
                        return (
                          <>
                            <tr className="bg-white border-b" key={i}>
                              <td className="px-2 py-4">
                                <input type="checkbox" onClick={() => singleCheckSelect(v._id)} checked={selectedRecord.includes(v._id)} className="w-4 h-4 cursor-pointer text-purple-600" />
                              </td>

                              <td className="px-2 py-4">{v.name}</td>
                              <td className="px-2 py-4">{v.order}</td>
                              {
                                v.status == 1
                                  ?
                                  <td className="px-2 py-4 text-green-600 font-bold">Active</td>
                                  :
                                  <td className="px-2 py-4 text-red-600 font-bold">Inactive</td>
                              }


                              <td className="px-2 py-4 ">
                                <Link to={`/material/update/${v._id}`}>
                                  <svg fill="gold" className="w-5 h-5" viewBox="0 0 512 512">
                                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7z"></path>
                                  </svg>
                                </Link>
                              </td>
                            </tr>
                          </>
                        )
                      })
                      :
                      <tr className="bg-white border-b">
                        <td className="px-2 py-4 text-center font-bold" colSpan={5}>No Record Found !</td>
                      </tr>
                  }

                </tbody>
              </table>
            </div>

            <div className='p-5'>
              <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>

        </div>
      </section >
    </>
  )
}
