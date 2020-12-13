import router from "../router";

export const getJoin = (req, res) => {
    res.render("join");   
}

export const postJoin = (req,res) => {
    console.log(req.body);

    const {
        body : {name, email, password, password2}
    } = req;

    if(password !== password2) {
        res.status(400); // 400은 bad request를 의미함.
        res.render("join");
    } else {
        //To do : Register User
        //TO do : Log user in
        res.redirect(router.home);
    }

    // status code - > 400 / 500 / 404

    res.render("join");
}

export const getLogin = (req, res) => {
    res.render("login"); 
}

export const postLogin = (req,res) => {
    // console.log(req);
    res.redirect(router.home);
}

export const logout = (req, res) => {
    //TO do : Process Log out
    res.redirect(router.home);      
}

export const userDetail = (req, res) => {
    // console.log(req);
    res.render("userDetail");
}

export const editProfile    = (req, res) => {
    res.render("editProfile", {pageTitle : "editProfile", potato : "1234"} );
}

export const changePassword = (req, res) => res.render("changePassword");