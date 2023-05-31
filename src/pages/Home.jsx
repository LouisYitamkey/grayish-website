import React from 'react'
import { HeroContentLeft } from '../components/Hero'
import { FeaturesCards } from '../components/Bestcompany'
import { FaqWithImage } from '../components/Faq'
import { FooterCentered } from '../components/Footer'
import { ContactUs } from '../components/Contactus'
import { CarouselCard } from '../components/Carousel'
import { HeaderResponsive } from '../components/Navbar'
import { Cooker } from '../components/Cooker'
import { Blender } from '../components/Blender'
import { Others } from '../components/Others'

const links = [
  { label: 'Home', link: '/' },
  { label: 'Products', link: '/about' },
  { label: 'About', link: '/blog' },
  { label: 'Contact Us', link: '/contact' },
];

const linksHeader = [
  { label: 'Home', link: '/' },
  { label: 'Products', link: '/about' },
  { label: 'About', link: '/blog' },
  { label: 'Contact Us', link: '/contact' },

];


const Home = () => {
  return (
    <>
    <div>
    <HeaderResponsive links={linksHeader} />
    </div>
     <HeroContentLeft />
     <div className=' py-6 md:py-24'>
     <FeaturesCards />
     </div>

     <div className='flex-row md:flex space-y-14 bg-slate-50  md:bg-slate-50  md:space-y-0 pb-24  md:space-x-16 md:px-48 pt-24 px-5   md:pt-20 justify-between'>
        <div>
        <Cooker/>
        </div>
        <div>
        <CarouselCard/>
        </div> 
      </div>

      <div className='flex-row md:flex space-y-14   bg-slate-50 md:bg-slate-50 md:space-y-0 md:pb-24 pb-24  md:space-x-16 md:px-48 md:pt-24 px-5  justify-between'>
       <div>
       <Blender/>
     </div>

      <div>
      <Others/>
     </div>

     </div>

      <div className=' pt-8 md:pt-24 bg-white'>
     <FaqWithImage/>
     </div>
      
    
     <div className='md:px-32 pt-8  md:pt-28'>
     <ContactUs />
     </div>

     <div className='md:px-32 md:pb-5 pb-5   '>
     <FooterCentered links={links} />
     </div>

     
    </>
   
  )
}

export default Home
