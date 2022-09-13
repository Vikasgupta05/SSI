import React from "react";
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";



export const Student = () => {

    const [data , setData] = useState()

    useEffect(() => {
        Data()
    },[])

    const Data = () => {
        axios.get("https://studentddata.herokuapp.com/student").then(function(res){
            setData(res.data)
            console.log("avid" , res.data)
        })
    }



    return(

        <div>



            <div className="maindiv">
                <table className="table">
                        <thead>
                            <tr>
                                <th className="table">No</th>
                                <th  className="table">First name</th>
                                <th  className="table">Lastname</th>
                                <th  className="table">Email</th>
                                <th  className="table">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((el , i=0 ) => {
                                return (
                                    <tr>
                                        <td className="table">{i+1}</td>
                                        <td className="table">{el.First_name}</td>
                                        <td className="table">{el.Last_name}</td>
                                        <td className="table">{el.Email}</td>
                                        <td className="table">{el.Address}</td>
                                    </tr>
                                )
                                })
                            }
                        </tbody>
                </table>
            </div>

        </div>
    )
}