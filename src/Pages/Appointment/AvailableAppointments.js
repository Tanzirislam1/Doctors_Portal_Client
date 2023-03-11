import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json()))

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <h4 className='text-2xl text-primary text-center font-bold'><p>You picked {format(date, 'PP')}.</p></h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    services.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;