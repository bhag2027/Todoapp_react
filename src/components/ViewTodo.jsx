import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewTodo = () => {
    const[data,changeData]=useState({"todos":[]})
    const fetchData=()=>{
      axios.get("https://dummyjson.com/todos").then(
        (response)=>{
          changeData(response.data)
        }
      ).catch().finally()
    }
    
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table table-bordered border-primary">
                                
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">USERID</th>
                                            <th scope="col">TODO</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.todos.map(
                                            (value,index)=>{
                                                return<tr>
                                            
                                                <td>{value.id}</td>
                                                <td>{value.userId}</td>
                                                <td>{value.todo}</td>
                                            </tr>
                                            }
                                        )}
                                        
                                    </tbody>
                                </table>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo