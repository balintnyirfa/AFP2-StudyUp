import React, { useEffect, useState } from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
    }, [])
  return (
    <div>AuthDetails</div>
  )
}

export default AuthDetails