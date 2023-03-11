import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    /* noramlly when we are useing useQuery and load users we are get a error cause we are not setting up the  initial value/ default value [], '' normally we are set the value when we are decleare the state thats why we get error can not reading propertis of length so solution is we can use isLoading form useQuery and set condition when users are loading then we can see the loading spiner */
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='w-full'>
            <h2 className='text-2xl'>all users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-96 mx-auto">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;