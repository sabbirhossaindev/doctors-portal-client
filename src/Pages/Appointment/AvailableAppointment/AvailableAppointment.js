// import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions')
            const data = await res.json()
            return data
        }
    })

    return (
        <div className='my-16'>
            <h3 className='font-bold text-center text-xl text-secondary'>Available Appointments on Date    :- {format(selectedDate, 'PP')}</h3>

            <h3 className='font-bold text-center text-xl text-secondary'> viewer Time On  :- {format(selectedDate, 'pp')}</h3>
            
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;