
import useClass from '../../../../hooks/useClass';

const PopularInstructor = () => {
    const [classes] = useClass()
    console.log("class", classes);

    return (
        <>
            <h2>Popular Instructor</h2>

            <div className='grid grid-cols-3 gap-3'>

            </div>
        </>
    );
};

export default PopularInstructor;