import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatedDate = format(date, 'PP');

    const handlebooking = event => {
        event.preventDefault();

        const slot = event.target.slot.value;
        // console.log(_id, slot, name);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.success){
                    toast(`appointment is set, ${formatedDate
                     } at ${slot}`)
                }
                else{
                    toast.error(`you already have an appointment ${data.booking?.date
                    } at ${data.booking.slot}`)
                }
                refetch();
                // to close the modal
                setTreatment(null);
            });
    }

    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handlebooking} className='grid grid-cols-1 gap-5 justify-center mt-6'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs mx-auto" />

                        <select name='slot' className="select select-bordered w-full max-w-xs mx-auto">
                            {
                                /* when our data has no unique id then we can set index peramter in key property */
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" disabled value={user?.displayName || ''} name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs mx-auto" />

                        <input type="text" disabled value={user?.email || ''} name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs mx-auto" />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs mx-auto" />

                        <input type="submit" placeholder="Type here" className="input w-full max-w-xs btn btn-secondary mx-auto" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;