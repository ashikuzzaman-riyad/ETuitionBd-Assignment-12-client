import React from 'react';


import { useAuth } from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../shared/Loading';
import ForbiddenPage from '../shared/ForbiddenPage';



const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'admin') {
        return <ForbiddenPage></ForbiddenPage>
    }

    return children;
};

export default AdminRoute;