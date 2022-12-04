import jwt from 'jsonwebtoken'

export const createToken =  (userId) => {
    return  jwt.sign({userId},process.env.SECRET_KEY, {expiresIn:60*60*24})
}
export const verifyToken = (token) => {
    return jwt.verify(token,process.env.SECRET_KEY)
}