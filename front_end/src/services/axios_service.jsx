import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast';

export const postAxios = async ({url, body}) => {
    console.log("urlpath",url)
    try {
        let response = await axios.post(url, body);
        if (response.status === 202) {
            return response.data
        } else {
            return null;
        }
    } catch (error) {
        console.log("hii",error)
        toast.error(error.message);
    }
}