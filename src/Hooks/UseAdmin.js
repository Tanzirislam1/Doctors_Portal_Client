import { useEffect, useState } from "react";

const UseAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        /* not signin user this user was our state user */
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user]);
    
    return [admin, adminLoading];
}

export default UseAdmin;