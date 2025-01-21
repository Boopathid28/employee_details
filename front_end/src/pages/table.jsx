import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Table() {

    const [employeedata, setEmployeedata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/employee_details")
            .then(
                res => {
                    console.log(res.data.data, "res")
                    setEmployeedata(res.data.data)
                }
            ).catch(err => {
                console.log(err, "err")
            })
    }, [])

    return (
        <div className='container mx-auto'>

            <div className='w-[80%] mx-auto'>
                <div className='flex justify-between py-3'>
                    <h1 className='text-[28px] font-[600]'>Employee Details</h1>
                    <button className='border rounded-lg outline-none h-8 px-3 my-auto text-[#fff] font-[500] bg-[green] hover:bg-[#008000d7]'>Add +</button>
                </div>
                <table className='w-full border'>
                    <thead className='bg-[grey] text-white'>
                        <tr>
                            <th className='p-2 border'>SNo</th>
                            <th className='p-2 border'>Name</th>
                            <th className='p-2 border'>Age</th>
                            <th className='p-2 border'>Education</th>
                            <th className='p-2 border'>Graduate Year</th>
                            <th className='p-2 border'>Experience</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            employeedata && employeedata.length > 0 ? employeedata.map((item, index) => {
                               return ( <>
                                    <tr key={index} className={index % 2 !== 0 ? "hover:bg-[gray]" : ""}>
                                        <td className='p-2 border'>{index + 1}</td>
                                        <td className='p-2 border'>{item.name}</td>
                                        <td className='p-2 border'>{item.age}</td>
                                        <td className='p-2 border'>{item.education}</td>
                                        <td className='p-2 border'>{item.graduate_year}</td>
                                        <td className='p-2 border'>{item.experience}</td>
                                    </tr>
                                </>)
                            }
                            ) : <tr><td colSpan={6}>No Data</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table