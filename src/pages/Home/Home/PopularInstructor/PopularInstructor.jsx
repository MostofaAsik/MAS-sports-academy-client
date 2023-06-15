import React, { useEffect, useState } from 'react';

const PopularInstructor = () => {

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
        <div className=''>
            <h2 className='text-center font-bold mt-2 text-3xl '>Popular Instructor</h2>
            <div className='grid grid-cols-3 gap-3 bg-gradient-to-r from-[#871010] to-[#4e2c13]'>
                {
                    instructor?.slice(0, 6).map(item => <div key={item._id} className="card w-80 bg-base-100 mt-3 mb-2 shadow-xl">
                        <figure><img src={item.photo} alt="Shoes" /></figure>

                    </div>)
                }

            </div>

        </div>
    );
};

export default PopularInstructor;