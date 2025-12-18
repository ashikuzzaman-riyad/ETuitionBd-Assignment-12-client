import React from 'react';
import { useAuth } from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import ForbiddenPage from '../shared/ForbiddenPage';
import Loading from '../shared/Loading';

const TutorRoute = ({ children }) => {
     const { loading } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== 'tutor') {
        return <ForbiddenPage></ForbiddenPage>
    }

    return children;
};

export default TutorRoute;