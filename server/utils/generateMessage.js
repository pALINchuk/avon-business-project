const generateMessage = (data) =>{
    return `Hey, it seems like we have a new client!\nCheck it out. We've just welcomed ${data.name} ${data.surname} to our client list and added to customers database. ${data.name}'s email is ${data.email}, and their phone number is ${data.phone}. They're all set to join our exciting journey! Cheers to our new client!`
}


module.exports = {generateMessage}