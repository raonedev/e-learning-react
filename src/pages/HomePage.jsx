import React from 'react'
import VideoCardList from '../componenet/VideoCardList'

const HomePage = () => {
    return (
        <>
            <div> Operating system</div>
            <VideoCardList jsonFile="os.json"/>
            <br/>

            <div> DBMS</div>
            <VideoCardList jsonFile="dbms.json"/>
            <br/>

            <div> Java</div>
            <VideoCardList jsonFile="java.json"/>
            <br/>

            <div> Microprocessors and Interfacing</div>
            <VideoCardList jsonFile="mp.json"/>
            <br/>

            <div> Software Enginering</div>
            <VideoCardList jsonFile="se.json"/>
            <br/>
            
        </>
    )
}

export default HomePage