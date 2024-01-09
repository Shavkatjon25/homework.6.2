function Img(){
    return <div className="img"><img src="./W..svg" alt="" /></div>
}


function Navbar(){
    return(
        <div className="navbar">
            <a href="">Home</a>
            <a href="">New</a>
            <a href="">Popular</a>
            <a href="">Treding</a>
            <a href="">Categories</a>
        </div>
    )
}


function Hed(){
    return(
        <div className="hed">
            <Img/>
            <Navbar/>
        </div>
    )
}

export default Hed;
