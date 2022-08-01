import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Partner = () => {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return <div className='p-5'>
    {(isDesktopOrLaptop || !isPortrait || isBigScreen || !isTabletOrMobile) && 
    <div className='grid grid-cols-4 px-5 '>
        <div className='inline-block flex items-center justify-center'>
            <h1 className='text-7xl p-3 shadow-black drop-shadow-lg'>01</h1>
            <p className='justify-center flex'>producing number 1 quality work</p>
        </div>
        <div className='inline-block flex items-center justify-center'>
            <h1 className='text-7xl p-3 shadow-black drop-shadow-lg'>8+</h1>
            <p>States with Our Projects</p>
        </div>
        <div className='inline-block flex items-center justify-center'>
            <h1 className='text-7xl p-3 shadow-black drop-shadow-lg'>10</h1>
            <p>10 years of experience</p>
        </div>
        <div className='inline-block flex items-center justify-center'>
            <h1 className='text-7xl p-3 shadow-black drop-shadow-lg'>15</h1>
            <p>15 lakh benefiieries throughh our project</p>
        </div>
    </div>
    }
  </div>
}

export default Partner;