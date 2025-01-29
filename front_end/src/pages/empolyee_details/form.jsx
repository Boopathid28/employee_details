import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { postAxios } from '../../services/axios_service';
import toast, { Toaster } from 'react-hot-toast';
import { employeeDetailsEndPoint } from '../../constants/api_endpoints';

const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  age: yup.number().transform((value, originalValue) => {
    if (originalValue === "" || originalValue === null) return undefined;
    return value;
  })
    .integer("Age must be an integer")
    .positive("Age must be a positive number")
    .required("Age is required").integer("age must be an integer").positive("age must be a positive number").required("age is required"),
  education: yup.string().required("education is required"),
  experience: yup.number().transform((value, originalValue) => {
    if (originalValue === "" || originalValue === null) return undefined;
    return value
  }).integer("experience must be an integer").positive("experience must be a positive number").required("experience is required"),
  graduate_year: yup.number().transform((value, originalValue) => {
    if (originalValue === "" || originalValue === null) return undefined;
    return value
  }).integer("yog must be an integer").positive("yog must be a positive number").required("yog is required"),
});


function EmployeeForm({closeModal}) {

  const [formmode, setFrommode] = useState("create");
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const onsubmit = (data) => {
    createEmplyee(data);
  }

  const createEmplyee = async (body) => {
    var response = await postAxios({
      url: employeeDetailsEndPoint,
      body: body
    })

    if (response != null) {
      toast.success(response.message);
    }
    closeModal();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className='w-[100%] border rounded-md p-5'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-start'>
              <p>Name</p>
              <input {...register('name')} className='outline-none border w-full px-2 py-1 rounded my-1' type='text' placeholder='Name' />
              <p className='text-[red]'>{errors?.name?.message}</p>
            </div>
            <div className='text-start'>
              <p>Age</p>
              <input {...register('age')} className='outline-none border w-full px-2 py-1 rounded my-1' type='number' placeholder='Age' />
              <p className='text-[red]'>{errors?.age?.message}</p>
            </div>
            <div className='text-start'>
              <p>Education</p>
              <input {...register('education')} className='outline-none border w-full px-2 py-1 rounded my-1' type='text' placeholder='Education' />
              <p className='text-[red]'>{errors?.education?.message}</p>
            </div>
            <div className='text-start'>
              <p>Experience</p>
              <input {...register('experience')} className='outline-none border w-full px-2 py-1 rounded my-1' type='number' placeholder='Experience' />
              <p className='text-[red]'>{errors?.experience?.message}</p>
            </div>
            <div className='text-start'>
              <p>Year of graduate</p>
              <input {...register('graduate_year')} className='outline-none border w-full px-2 py-1 rounded my-1' type='number' placeholder='Year of graduate' />
              <p className='text-[red]'>{errors?.graduate_year?.message}</p>
            </div>
          </div>
          <button className='border rounded-lg outline-none h-8 px-6 my-auto text-[#fff] font-[500] bg-[green] hover:bg-[#008000d7] mt-2'>Create</button>
        </div>
      </form>
      <Toaster />
    </div>
  )
}

export default EmployeeForm