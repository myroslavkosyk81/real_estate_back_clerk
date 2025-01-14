import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
import { verifyToken } from '@clerk/backend'

export const verifyToken1 = async (req, res, next) => {
    // console.log(req.header('authorization'))
    const token = req.cookies.access_token;
    // console.log('token', token)
    // console.log(req)

    const clerktoken = req.header('authorization')
    const bearerToken = req.header('Authorization')?.replace('Bearer ', '')
    console.log(bearerToken)
    // console.log("Token ", clerktoken)
    if(!clerktoken) return next(errorHandler(401, 'Unauthorized222'));
    
 
    
      try {
        const verifiedToken = await verifyToken(bearerToken, {
          jwtKey: process.env.CLERK_JWT_KEY,
          authorizedParties: ['http://localhost:5173', 'api.example.com'], // Replace with your authorized parties
        })
        console.log('ok_________________________________________')
        // return Response.json({ verifiedToken })
        next();
        
      } catch (error) {
        console.log(error, 'no_____')
        return Response.json({ error: 'Token not verified.' }, { status: 401 })
      }

    // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //     if (err) return next(errorHandler(403, 'Illegal token'))
    //     req.user = user;
    //     next();
    // });
}