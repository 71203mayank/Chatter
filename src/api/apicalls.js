import axios from "axios";

const postUserData = async (user) => {
    console.log(user)

    await axios.post("https://jmr-hackathon.fendrelcabrera.repl.co/login", user)
}

const fetchData = async () => {
    let data = await axios.get("https://jmr-hackathon.fendrelcabrera.repl.co/frequest")
    //console.log(data.data)
    data = data.data

    if(data.type === "balance")
        return `You have ${data.balance} AED left in your account`
    else if(data.type === "dues")
        return `You have ${data.dues} AED left as dues`
    else
        return data.text    
    
}

export { postUserData, fetchData }