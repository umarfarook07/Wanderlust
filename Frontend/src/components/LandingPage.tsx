import LandingImage from '../assets/landingPage.png'
import SearchBox from './SearchBox'
import { memo } from 'react'
const LandingPage = memo(() => {
    return (
        <section className='relative'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/4 text-center'>
                <h1 className='text-3xl text-white font-semibold mb-4'>Enjoy Your Dream Vaction</h1>
                <h3 className='text-xl text-white'>Plan and book our perfect trip with expert advice, travel tips, destination information and  inspiration from us</h3>
            </div> 
            <div className='absolute top-[90%] left-1/2 transform -translate-x-1/2'>
                <SearchBox />
            </div>
            <img src={LandingImage} alt="LandingPage Image..." />
        </section>
    )
})

export default LandingPage