import React, { useContext } from "react";
import { postUserData } from "../../api/apicalls";
import './LoginPage.css';
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { userContext } from "../../App";

function LoginPage(){
    const { uctx } = useContext(userContext);
    const [ user, setUser ] = uctx;

    const submitHandler = async (e) => {
        e.preventDefault()
        let email = document.getElementById("mail").value
        let number = document.getElementById("phNumber").value

        await postUserData({email, number})
        setUser({email, number})
    }

    return(
        <>
        <div className="login">
            <div className="loginHead">
        	    <div className="logo1 logoleft">
                    <img src='/Assets/jmrLogo2.png' alt='jmrlogo'></img>
                </div>
        	    <div className="logo2 logoright"><img  src='/Assets/Chatter2.png' alt='chatterlogo'></img></div>
            </div>
            <div className="formContainer">
                <motion.div className="loginTitle"
                    initial={{x:'-100vw'}}
                    animate={{x:0}}
                    transition={{type:'just',duration:1.5}}
                >
                    <span className="span1"> INTRODUCING</span><br></br> <span className="span2">CHATTER</span><br></br>
                    <span className="span3">YOUR PERSONALIZED FINANCIAL CHATBOT</span><br></br>
                    <span className="span4">TRY IT NOW !</span>
                </motion.div>
                <form className="loginForm" onSubmit={submitHandler}>
                    <div className="loginForm2">
                        <span>POWERED BY</span>

                        <div className="poweredBy">
                            <img src='/Assets/dialogFlow.png' alt='poweredBy'></img>
                        </div>
                    </div>
                    <div className="loginForm1">
                        <div>
                            <div className="email formDiv1">
                                <lable htmlFor='mail' >E-Mail *<br></br> </lable>
                                <input type='text' id='mail' required pattern='.+@gmail.com' className="LogInput"></input>
                            </div>
                            <div className="passWord formDiv1">
                                <lable htmlFor='phNumber' >Mobile No. *<br></br></lable>
                                <input type='text' id='phNumber' required className="LogInput"></input>
                            </div>
                            <div className="button formDiv2">
                                <input type="submit" className="formBtn" value='Sign in'></input>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
        <Footer/>
        </>
    );
}

export default LoginPage;