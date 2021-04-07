const jwt = require('jsonwebtoken')

const authorizeUser = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(400).send('No auth headers provided')
    const [bearer, token] = authHeader.split(' ')

    // console.log(token)
    if (!token) return res.status(401).send('Access denied')

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.status(403).send('Access denied')
        req.student = payload;
        next()
    })
}

module.exports = authorizeUser

// did we learn the easier way to authenticate? Ben said we will learn the easier way