import axios from 'axios'
import React, { useEffect } from 'react'

const SeeAllUsers = () => {
    const [users, setUsers] = React.useState([])
    useEffect(() => {
        axios.get("http://116.75.62.44:8000/auth").then((response) => {
            setUsers(response.data)
        })
    }, [])
    let handleDelete= (id)=>{
        console.log(id);
        axios.delete(`http://116.75.62.44:8000/deleteuser/${id}`).then(()=>{
            axios.get("http://116.75.62.44:8000/auth").then((response) => {
                setUsers(response.data)
            }).catch((err)=>{console.log(err);
            })
        }).catch((err)=>{console.log(err);
        })
        
    }
    return (
        <div>
            <h1>All users</h1>
            <div className='flex flex-wrap justify-around gap-3'>
                {
                    users.length > 0 && users.map((user, i) => {
                        return (
                            <div key={i} className='w-[20%] h-[20vh] border-2'>
                                <h1>username : {user.username}</h1>
                                <button onClick={() => { handleDelete(user.userId)}} className='px-3 bg-red-500 rounded-md'>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SeeAllUsers



