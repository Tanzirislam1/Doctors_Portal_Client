import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        /* when we are try to search the query by email we can get all the information of users its not safe so anyone can get this information so we are send the token backend useing by headers authorization to secure the user and we are get the token in backend by req.headers.authorization. */
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    /* check response status => response status check korte multiline e kaj korte gale amader res.json() k return korte hbe na hole err dibe */
                    if (res.status === 401 || res.status === 403) {
                        /* when we get 401 403 status unauthorized user / forbidden access then we are signout the user form the website and remove then token form localstorage and send the user in login page and navigate the user in home route  */
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/home');
                    }
                    console.log('res', res);
                    return res.json();
                })
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div className='w-full'>
            <h2>My Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-96 mx-auto">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>treatment</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;