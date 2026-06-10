import app from "./app.js";
import env from "@packages/config";


app.listen(env.PORT, (error)=> {
  if(!error){
    console.log("App is running at Port", env.PORT);
  }
})
