const User = require('./models/user.model');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const passConfig = ()=>{
    passport.use(
        new localStrategy((username, password, done)=>{
            User.findOne({"username": username})
            .then((user)=>{
                if(user == null) return done(null, false);
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(err) throw err
                    if(result === true){
                        return done(null, user);
                    }
                    else{
                        return done(null, false);
                    }
                })
            })
            .catch((err)=>{
                res.status(400).json('Error: ' + err);
            })
        })
    )


passport.serializeUser((user, cb)=>{
    cb(null, user.id);
});

passport.deserializeUser((id, cb)=>{
    User.findOne({_id: id}, (err, user)=>{
        const userInformation = {
            username: user.username,
        };
        cb(err, userInformation);
    });
});
};

module.exports = passConfig;