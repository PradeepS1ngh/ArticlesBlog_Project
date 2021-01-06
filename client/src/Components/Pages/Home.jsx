import React from 'react'

import Profile from '../layouts/Profile'
import TagArea from '../layouts/TagArea'
import Articles from '../Articles/Articles'

function Home() {
    return (
        <div className='home'>
            <div className='tagArea'><TagArea /></div>
            <div className='articleArea'><Articles/></div>
            <div className='profileArea'><Profile /></div>
        </div>
    )
}

export default Home
