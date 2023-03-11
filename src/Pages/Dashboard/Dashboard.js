import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../Hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin]= UseAdmin(user);
    return (
        <div class="drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-3xl font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                {/* <label for="my-drawer" class="drawer-overlay"></label> */}
                <ul class="menu p-4 w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My History</Link></li>
                    {/* if admin is true then show the Link but if they are not admin then not showing the link but showing the users route we are control to showing the route in requireAdmin component  */}
                    {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;