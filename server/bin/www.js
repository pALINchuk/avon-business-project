const {app} = require('../app')
const PORT = process.env.PORT || 8080


app.listen(PORT, async()=>{
    console.log(`server is listening on ${PORT}...`)
})