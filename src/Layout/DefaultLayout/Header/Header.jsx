
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartShopping,
  faPhone,
  faRightFromBracket,
  faUser } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import styles from './header.module.scss'
import BackToTopButton from '../../BackToTopButton/BackToTopButton';
import { counterTotalProduct } from '~/reducer/totalProductSlice';
import logo from '~/assets/images/b5.png'
import Input from '~/Layout/DefaultLayout/Input/Input';
import Nav from '../Nav/nav';
import { getAPI } from '~/config/api';

const cx = classNames.bind(styles)

function Header() {
  const dispatch = useDispatch()
  const productInStore = useSelector(state=>state.counterProduct)
  const [fix,setFix] = useState(false)
  const [backToTop,setBackToTop] = useState(false)
  const token = localStorage.getItem('Token')
  const [data, setData] = useState({})

  const setFixed = useCallback(() => {
    if(window.scrollY > 100) {
      setBackToTop(true)
      setFix(true)
    }else {
      setFix(false)
      setBackToTop(false)
    }
  },[])
  const getData = async () =>{
      try{
    let res = await getAPI('/auth/get-loged-in-user')
    setData(res.data.user)
      }catch(err){
        console.log(err);
      }
  }
  useEffect(() => {
    getData()
    window.addEventListener('scroll',setFixed)
    /* eslint-disable react-hooks/exhaustive-deps */
    dispatch(counterTotalProduct())
  },[])
  const removeToken = () => {
    localStorage.removeItem('Token')
    localStorage.removeItem('email')
  }

  return (
    <header className={fix ? cx('header','fixed') : cx('header')}>
      <div className={cx('subnav')}>
        <div className={cx('phone')}>
          <FontAwesomeIcon className={cx('icon')} icon={faPhone}/>
          <span  className={cx('numb')}>0964.26.36.36</span>
        </div>
        <ul className={cx('info-user')}>
          {token ? (
            <>
              <li>
                <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
                <Link to="/profile" className={cx('text')}>{data.fullname}</Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon className={cx('icon')} icon={faRightFromBracket}/>
                  <span onClick={removeToken} className={cx('text')}>Đăng xuất</span>
                </Link>
              </li>
            </>)
            : (<li>
             <Link to="/login">
                <FontAwesomeIcon className={cx('icon')} icon={faUser}/>
                <span className={cx('text')}>Đăng Nhập</span>
             </Link>
          </li>)}
          <li >
              <Link to="/myStore" >
                <FontAwesomeIcon className={cx('icon')} icon={faCartShopping}/>
                <span className={cx('text')}>Giỏ hàng <span className={cx('quantity')}>({productInStore})</span></span>
              </Link>
          </li>
        </ul>
      </div>
      <div className={cx('nav-box')}>
         <div className={cx('logo')}>
            <Link to="/"><img src={logo} alt="" /></Link>
         </div>
         <Nav/>
         <Input/>
         {/* mobil */}
         <Tippy trigger='click' content={<Nav/>}>
           <div className={cx('menu-mobile')}>
                <FontAwesomeIcon icon={faBars} />
           </div>
         </Tippy>
      </div>
      <BackToTopButton view={backToTop}/>
    </header>

  )

 }

 export default (Header);