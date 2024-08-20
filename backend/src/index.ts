import app from "./app.js"
import { connectToDatabase } from "./db/connection.js"

//connections and listeners
connectToDatabase().then(() =>{app.listen(5000, () => console.log("Server Open & connected to database")
);
})
.catch((err) => console.log(err));
