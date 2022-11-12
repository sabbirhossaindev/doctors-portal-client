import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <div>
            <h3 className='font-bold text-center text-xl text-secondary'>Available Appointments on {format(selectedDate, 'pp')}</h3>
        </div>
    );
};

export default AvailableAppointment;