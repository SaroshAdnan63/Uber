const http=require("http");
const app=require('./app');
const PORT=process.env.PORT||3000
const server=http.createServer(app);
require("dotenv").config();
server.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})