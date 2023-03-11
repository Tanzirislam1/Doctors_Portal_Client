import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    /* set admin role */
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                /* check the response */
                if (res.status === 403) {
                    /* we are set the toast when you are user try to set the admin */
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                // we are setup a condition how we can find the real admin cause at first we are set the user as admin but after setup admin condition now we are not admin finally we set the condition find the real admin 
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully make an admin`);
                }
            })
    }
    return (
        <div>
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
            </tr>
        </div>
    );
};

export default UserRow;