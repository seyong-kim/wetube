 //res.send => res.render // 첫번째는 Template 두번째는 전달할 객체.
export const home   = (req, res) => 
    res.render("home", { pageTitle : "Home", potato : "1234" } );  

export const search = (req, res) => {
    console.log(req.query.term); // http://localhost:4040/search?term=term&test=lalalala => { term: 'term', test: 'lalalala' }  
    const {query : { term : searchingBy }} = req; // const searchingBy = req.query.term; => ES6 이전의 방식 / Query를 사용하려면 form의 method가 get이어야함. ( URL에 정보를 추가해줌 )
    res.render("search", { pageTitle : "Search", searchingBy : searchingBy } ); 
};

export const upload = (req,res) => 
    res.render("upload", { pageTitle : "Upload" } );

export const videoDetail = (req,res) => 
    res.render("videoDetail", { pageTitle : "Video Detail" } );

export const editVideo = (req,res) => 
    res.render("editVideo", { pageTitle : "Edit Video" } );

export const deleteVideo = (req,res) => 
    res.render("deleteVideo", { pageTitle : "Delete Video" } );
