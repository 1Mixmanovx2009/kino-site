import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoIcon from "../assets/images/logo-icon.svg"
import Ru from "../assets/images/RU.svg"
import { FiTablet } from "react-icons/fi";
import { RiTv2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { RiFileListLine } from "react-icons/ri";
const Header = () => {
  return (
    <header className='container p-[22px] flex items-center justify-between mb-[16px] max-sm:flex-col max-sm:items-start '>
      <Link to={"/"}>
        <img className='max-sm:inline-block' src={LogoIcon} alt="Logo Img" width={112} height={36} />
      </Link>
      <ul className='flex items-center gap-[30px] ml-[120px] max-sm:mt-[-45px] max-sm:mb-[20px]'>
        <NavLink to={"/"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <RiTv2Line className='text-[24px] '/>
          <span>Афиша</span>
        </NavLink>
        <NavLink to={"/sessions"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <FiTablet className='text-[24px] '/>
          <span>Сеансы</span>
        </NavLink>
        <NavLink to={"/tickets"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <RiFileListLine className='text-[24px] '/>
          <span>Жанры</span>
        </NavLink>
        <NavLink to={"/categories"} className='flex items-center flex-col gap-2 text-greyText active-link'>
          <IoSearch className='text-[24px] '/>
          <span>Поиск</span>
        </NavLink>
      </ul>
      <div className='flex items-center gap-[20px] max-sm:ml-[70px]'>
      <div className="relative inline-block">
        <select className="appearance-none bg-black text-white rounded-md py-2 pl-10 pr-8 cursor-pointer border border-gray-600">
          <option value="ru">RU </option>
          <option value="uz">UZ </option>
          <option value="en">EN </option>
        </select>
        <div className="absolute top-[24px] left-3 transform -translate-y-1/2">
          <span className="inline-block w-5 h-5 rounded-full overflow-hidden">
            <img src={Ru} alt="RU" width={20} height={20}/>
          </span>
        </div>
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <button className='bg-redText text-white w-[150px] py-[9px] rounded-xl'>
      Войти
      </button>
      </div>
    </header>
  )
}

export default Header