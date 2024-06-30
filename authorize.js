function authorize(req,res,next){
    const{user} = req.query;
    if(user === 'john'){
        req.user = {name:'john', id:2};
        next();
    }else{
        res.status(401).send("Un-authorized to access t");
    }
}

module.exports = authorize;