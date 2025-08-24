import jwt from "jsonwebtoken";


async function userMiddleware(req,res,next){
    console.log("middleware called");
    // const txn = await req.body.message;
    // console.log("txn in middleware", txn);
    // const token =req.he req.cookies.userToken;
    const token = await req.cookies.userToken;
    console.log("TOKEN:", token);

    if(!token){
        return res.status(401).json({
            error: "Unauthorized access, please login again"
        });
    }

    const isTokenValid = jwt.verify(token,process.env.JWT_SECRET);
    if(!isTokenValid){
        return res.status(401).json({
            error: "Unauthorized access, please login again"
        });
    }
    req.userId = isTokenValid.ID;
    next();
}

export default userMiddleware;