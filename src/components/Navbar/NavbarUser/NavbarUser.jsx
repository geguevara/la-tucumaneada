import React from 'react'
import {FaUserCircle} from "react-icons/fa"

import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { LoginNavbar } from './NavbarUser.styles'
import { toggleHiddenMenu } from '../../../redux/user/userSlice'
import Submit from '../../UI/Submit/Submit'

const NavbarUser = () => {

  const {currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <LoginNavbar>
      <Submit
      onClick={()=>{
        currentUser?
        dispatch(toggleHiddenMenu()) :
        navigate('/login')} }
      >

        <FaUserCircle/>
            {
            currentUser 
            ? `${currentUser.userName}`
            : 'log in'
            }
      </Submit>
         
    </LoginNavbar>


  )
}

export default NavbarUser