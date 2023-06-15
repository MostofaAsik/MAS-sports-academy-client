import React, { useEffect, useState } from 'react';

const AllInstructor = () => {
    const [instructor, setInstructor] = useState(null)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/users/instructor`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructor(data)
            })
    }, [])

    return (
        <div className='grid grid-cols-3 gap-3 bg-lime-300'>
            {
                instructor?.map(item => <div key={item._id} className="card w-80 bg-base-100 mt-3 mb-2 shadow-xl">
                    <figure><img src={item.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{item.name}</h2>
                        <p>{item.email}</p>

                    </div>
                </div>)
            }

        </div>
    );
};

export default AllInstructor;