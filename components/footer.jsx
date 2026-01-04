import {B1,B3,B2,B5,H7, H6} from './elements/typography'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    
  return (
    
    <div className='bg-glacier-500 w-full flex flex-col px-4 sm:px-6 md:px-10 lg:px-[96px] py-8 md:py-12'>
        <div className='BAGIANATAS flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4'>
            <div className='BAGIANKIRI flex flex-col gap-2 px-4 sm:px-6 md:px-10'>
                <Image
                src="/icons/Kemarigama.png"
                alt="logo"
                width={55}
                height={40}
                className='mb-2'
                />
                
                <H7 className="font-bold text-white">KEMARIGAMA</H7>

                <p className="font-bold text-white leading-relaxed text-sm sm:text-base">Keluarga Mahasiswa Riau Gadjah Mada</p>
                
            </div>

            <div className='BAGIANKANAN flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[95px] px-4 sm:px-6 md:px-0'>
                <div className='BAGIANKANAN1 font-bold text-white flex flex-col space-y-3'>
                    <Link href="#" className="hover:text-glacier-200 transition-colors">Utama</Link>
                    <Link href="#" className="hover:text-glacier-200 transition-colors">Tentang Kami</Link>
                    <Link href="#" className="hover:text-glacier-200 transition-colors">Lini Masa</Link>
                    <Link href="#" className="hover:text-glacier-200 transition-colors">Tiket</Link>
                </div>

                <div className='BAGIANKANAN2 flex flex-col lg:items-end'>
                    <B1 className="font-bold text-white text-left lg:text-right">Hubungi kami melalui</B1>
                    <B1 className="font-bold text-white text-left lg:text-right">media sosial KEMARIGAMA</B1>

                    <div className='ICONS flex flex-row gap-4 mt-4 justify-start lg:justify-end'>
                        <div className='shrink-0 bg-glacier-700 border-[1px] border-glacier-700 p-2 sm:p-[10px] rounded-xl outline outline-[1px] outline-glacier-800 hover:bg-glacier-600 transition-colors'>
                        <Link href="https://www.instagram.com/gamaftr/" id="instagram">
                        <Image 
                            src="/icons/instagram.svg" 
                            alt="instagram icon" 
                            width={20}
                            height={20} 
                            className=''
                        />
                        </Link>
                        </div>
                        <div className='shrink-0 bg-glacier-700 border-[1px] border-glacier-700 p-2 sm:p-[10px] rounded-xl outline outline-[1px] outline-glacier-800 hover:bg-glacier-600 transition-colors'>
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
                        <div className='shrink-0 bg-glacier-700 border-[1px] border-glacier-700 p-2 sm:p-[10px] rounded-xl outline outline-[1px] outline-glacier-800 hover:bg-glacier-600 transition-colors'>
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

        <div className="w-full h-[1px] bg-white my-6 md:my-8"/>

        
        <div className="BAGIANBAWAH flex flex-col items-center text-center w-full gap-1">
        <B1 className="text-white font-bold">GAMAFTR 2026 - All Rights Reserved</B1>
        <B2 className="text-white leading-relaxed">In Collaboration with Rafael Mahardika</B2>
        </div>

    </div>
  )
}

export default Footer
