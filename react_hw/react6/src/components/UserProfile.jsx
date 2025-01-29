import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from './UserProfile.module.css';

export default function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get('https://randomuser.me/api/');
            setUser(response.data.results[0]);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!user) {
        return <div>Could not find user</div>;
    }

    return (
        <div className={styles.container}>
            <img
                src={user.picture.medium}
                alt="Profile"
                className={styles.profileImage}
            />
            <h2 className={styles.name}>
                {user.name.first} {user.name.last}
            </h2>
            <p className={styles.info}>Email: {user.email}</p>
            <p className={styles.info}>Phone: {user.phone}</p>
            <button className={styles.button} onClick={fetchUser}>
                Load new user
            </button>
        </div>
    );
}
