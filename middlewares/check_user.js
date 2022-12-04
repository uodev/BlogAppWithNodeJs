
export const requiredAuth = (req,res,next) => {
    const auth = req.cookies.jwt
    if(auth) {
        if(req.url === '/user-login' || req.url === '/user-register') {
            res.redirect('/admin/blogs')
        }else {
            next()
        }
    }else {
        if(req.url === '/user-login' || req.url === '/user-register') {
            next()
        }else {
            res.redirect('/admin/user-login')
        }
    }
}