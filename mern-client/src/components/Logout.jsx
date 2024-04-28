import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'

const Logout = () => {

    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout().then(() => {
            console.log('Logged out')
            alert('Logged out')
            window.location.href = '/'

        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded'onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout