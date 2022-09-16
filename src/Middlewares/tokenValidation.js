import db from "../database/db.js";



export async function verifyToken (req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "");
      if (!token) {
      return res.sendStatus(401);
      }
  
    const session = await db.collection("sessions").findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }
  
      const user = await db.collection("users").findOne({ 
          _id: session.user 
      });

      console.log(user, 'user aqui')
      if(!user){
        return res.sendStatus(404)
      }
      delete user.password
  
      res.locals.user = user;
  
    next();
  }