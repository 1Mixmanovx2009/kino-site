import React from 'react'
import LogoIcon from "../assets/images/icon-logo.svg"
import GooglePlay from "../assets/images/googleplay.svg"
import AppStore from "../assets/images/appstore.svg"
import { Link } from 'react-router-dom'
import { RiShiningLine, RiFileList2Line  } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiPhone,FiYoutube  } from "react-icons/fi";
import { RiMovieLine, RiClapperboardLine, RiMovie2Line  } from "react-icons/ri";
import { BiBasketball } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className='container bg-[#111111] mb-[20px] rounded-xl'>
        <ul className='p-[30px] flex items-center justify-around max-sm:flex-wrap max-sm:gap-[20px]'>
          <li>
              <Link>
                <img src={LogoIcon} alt="Logo Icon" width={55} height={36} className='mb-[48px]'/>
              </Link>
              <Link>
                <img src={GooglePlay} alt="Logo Icon" width={150} height={44} className='mb-[8px]'/>
              </Link>
              <Link>
                <img src={AppStore} alt="Logo Icon" width={150} height={44} />
              </Link>
          </li>
          <li className='flex items-start flex-col gap-[15px]'>
            <strong className='text-white'>О нас</strong>
            <Link className='flex items-center gap-[8px]'>
              <RiFileList2Line className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>Публичная оферта</p>
            </Link>
            <Link className='flex items-center gap-[8px]'>
              <RiShiningLine className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>Реклама</p>
            </Link>
            <Link className='flex items-center gap-[8px]'>
              <FaRegQuestionCircle className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>F.A.Q</p>
            </Link>
            <Link className='flex items-center gap-[8px]'>
              <FiPhone className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>Контакты</p>
            </Link>
          </li>
          <li className='flex items-start flex-col gap-[15px]'>
            <strong className='text-white'>Категории</strong>
            <Link className='flex items-center gap-[8px]'>
              <RiMovieLine className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>Кино</p>
            </Link>
            <Link className='flex items-center gap-[8px]'>
              <RiClapperboardLine className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>Театр</p>
            </Link>
            <Link className='flex items-center gap-[8px]'>
              <RiMovie2Line className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>Концерты</p>
            </Link>
            <Link className='flex items-center gap-[8px]'>
              <BiBasketball className='text-redText'/>
              <p className='font-[500] text-[16px] leading-[20px] text-greyText hover:text-redText hover:underline duration-300'>Спорт</p>
            </Link>
          </li>
          <li className='flex items-start flex-col gap-[15px]'>
            <strong className='text-white'>Связаться с нами</strong>
            <Link className='flex items-center gap-[8px]'>
              <p className='font-[500] text-[16px] leading-[20px] text-redText'>+998 (95) 897-33-38</p>
            </Link>
            <strong className='text-white'>Социальные сети</strong>
            <div className='flex items-center gap-[20px]'>
              <Link className='flex items-center gap-[8px]'>
                <BsInstagram className='text-redText'/>
              </Link>
              <Link className='flex items-center gap-[8px]'>
                <TiSocialFacebookCircular className='text-redText text-[22px]'/>
              </Link>
              <Link className='flex items-center gap-[8px]'>
                <FiYoutube className='text-redText'/>
              </Link>
            </div>
          </li>
        </ul>
    </footer>
  )
}

export default Footer