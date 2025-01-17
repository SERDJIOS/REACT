import { useEffect, useState } from 'react'

export default function UserStatus({ userId }) {
  const [userStatus, setUserStatus] = useState('неизвестно');

  const fetchStatus = async () => {
    const res = await fetch(`https://api.example.com/users/${userId}`);
    const data = await res.json();
    setUserStatus(data.status);
  }

  useEffect(() => {
    fetchStatus();
  }) // будет вызов на КАЖДЫЙ ререндер

  useEffect(() => {
    fetchStatus();
  }, []); // выполнится только 1 раз при первом рендере

  useEffect(() => {
    fetchStatus();
  }, [userId]) // выполнится при изменении userId

  return (
    <div>
      Статус пользователя {userId}: {userStatus}
    </div>
  )
}