import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/apicalls";
import Footer from "../Footer/Footer";
import './PageOne.css';

function PageOne(){
    const [data, setData] = useState("")

    useEffect(() => {
        const interval = setInterval(async () => {
            let newData = await fetchData()
            if(newData !== "")
                setData(newData)
        }, 5000)

        return () => clearInterval(interval);
    }, [])

    return(
        <>
        <div className="PageOne">
            <div className="loginHead">
        	    <div className="logo1 logoleft">
                    <img src='/Assets/jmrLogo.png' alt='jmrlogo'></img>
                </div>
        	    <div className="logo2 logoright"><img src='/Assets/Chatter.png' alt='chatterlogo'></img></div>
            </div>
            <div className="dialogFlowContainer">
                <div className="dialogFlowContainer1">

                    <iframe
                        className="dilogFlow"
                        title="unique"    
                        allow="microphone;"
                        width="350"
                        height="500"
                        src="https://console.dialogflow.com/api-client/demo/embedded/b577b6e6-1f30-43d0-a59b-3882952faeec">

                    </iframe>
                    <div className="dialogFlowRight">

                        <div className="output">
                            <div className="outputHead">
                                Output Console
                            </div>
                            <div className="outputData">
                                {
                                    data
                                }
                            </div>
                        </div>
                        <div className="ganimate">
                            <div className="bar bar1" style={{backgroundColor:'#4285F4'}}></div>
                            <div className="bar bar2" style={{backgroundColor:'#DB4437'}}></div>
                            <div className="bar bar3" style={{backgroundColor:'#F4B400'}}></div>
                            <div className="bar bar4" style={{backgroundColor:'#0F9D58'}}></div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default PageOne;
