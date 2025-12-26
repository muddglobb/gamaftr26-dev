import {B1,B3,B2,B5,H7} from './elements/typography'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    
  return (
    
    <div className='bg-glacier-500 w-full flex flex-col pl-6 pr-6 sm:px-10 md:px-[96px] py-[3%]'>
        <div className='BAGIANATAS md:flex flex-row justify-between'>
            <div className='BAGIANKIRI flex flex-col px-10 py-10'>
                <Image
                src="/icons/Kemarigama.png"
                alt="logo"
                width={55}
                height={40}
                className=''
                />

                
                <H7 className=" sm: font-bold text-white">KEMARIGAMA</H7>

                <H7 className=" sm: shrink-0 font-bold text-white leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit</H7>

                  
                
            </div>

            <div className='BAGIANKANAN flex flex-row gap-[95px]'>
                <div className='shrink- 0 BAGIANKANAN1 sm:font-bold text-white relative flex flex-col space-y-[12px]'>
                    <Link href="#">Utama</Link>
                    <Link href="#">Tentang Kami</Link>
                    <Link href="#">Lini Masa</Link>
                    <Link href="#">Tiket</Link>
                </div>

                <div className='BAGIANKANAN2 flex flex-col md:items-end'>
                    <B1 className="font-bold text-white text-left md:text-right">Hubungi kami melalui</B1>
                    <B1 className="font-bold text-white text-left md:text-right whitespace-nowrap">media sosial KEMARIGAMA</B1>

                    <div className='ICONS flex flex-row gap-[16px] mt-[12px] justify-start md:justify-end '>
                        <div className='shrink-0 bg-glacier-700 border-[1px] border-glacier-700 p-[10px] rounded-xl  outline outline-[1px] outline-glacier-800'>
                        <Link href="https://www.instagram.com/gamaftr/" id="instagram">
                        <Image 
                            src="/icons/instagram.svg" 
                            alt="instagram icon" 
                            width= {20}
                            height={20} 
                            className=''
                        />
                        </Link>
                        </div>
                        <div className='shrink-0 bg-glacier-700 border-[1px] border-glacier-700 p-[10px] rounded-xl  outline outline-[1px] outline-glacier-800'>
                        <Link href="https://www.youtube.com/@GadjahMadaFliestoRiau" id="youtube">
                        <Image 
                            src="/icons/youtube.svg" 
                            alt="youtube icon" 
                            width={20} 
                            height={20} 
                            className=''
                        />
                        </Link>
                        </div>
                        <div className='shrink-0 bg-glacier-700 border-[1px] border-glacier-700 p-[10px] rounded-xl  outline outline-[1px] outline-glacier-800'>
                        <Link href="https://www.tiktok.com/@gamaftr" id="tiktok">
                        <Image 
                            src="/icons/tiktok.svg" 
                            alt="tiktok icon" 
                            width={20} 
                            height={20} 
                            className=''
                        />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-[1px] bg-white my-[15px]"/>

        
        <div className="BAGIANBAWAH flex flex-col items-center text-center w-full">
        <B1 className="text-white font-bold">GAMAFTR 2025 - All Rights Reserved</B1>
        <B5 className="text-white leading-relaxed">In Collaboration with Rafael Mahardika</B5>
        </div>

    </div>
  )
}

export default Footer
