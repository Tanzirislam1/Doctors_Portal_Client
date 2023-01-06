import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handlebooking = event => {
        event.preventDefault();

        const slot = event.target.slot.value;
        console.log(_id, slot, name);

        // to close the modal
        setTreatment(null);
    }

    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handlebooking} className='grid grid-cols-1 gap-5 justify-center mt-6'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs mx-auto" />

                        <select name='slot' className="select select-bordered w-full max-w-xs mx-auto">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs mx-auto" />

                        <input type="text" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs mx-auto" />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs mx-auto" />

                        <input type="submit" placeholder="Type here" className="input w-full max-w-xs btn btn-secondary mx-auto" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;