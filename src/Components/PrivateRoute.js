import React from 'react'

const PrivateRoute = ({children}) => {
    const isAuth=false

  return (
    <div>{isAuth?children:null}</div>
  )
}

export default PrivateRoute