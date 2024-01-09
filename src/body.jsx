function Ing(){
    return(
        <div className="bodimg">
            <img src="./main.jpg" alt="" />
        </div>
    )
}
function MainH1(){
    return(
        <div className="thi">
            <h1>The Bright Future of Web 3.0?</h1>
        </div>
    )
}
function Mainp(){
    return(
        <div className="we">
            <div><p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p></div>
            <div ><button className="btn">READ MORE</button> </div>
        </div>
    )
}
function Hti(b){
    return(
        <div>
            <h2>{b.h2}</h2>
            <p>{b.p}</p>
        </div>
    )
}
function New(){
    return(
        <div className="new">
            <div><h1>New</h1></div>
            <div>
                <Hti h2="Hydrogen VS Electric Cars" p="Will hydrogen-fueled cars ever catch up to EVs?"/>
                <hr />
                <Hti  h2="The Downsides of AI Artistry" p="What are the possible adverse effects of on-demand AI image generation?"/>
                <hr />
                <Hti  h2="Is VC Funding Drying Up?" p="Private funding by VC firms is down 50% YOY. We take a look at what that means."/>
            </div>
        </div>
    )
}

function Body(){
    return(
        <div className="body">
            <div>
                <div>
                    {Ing()}
                </div>
                <div className="bodyp">
                    {MainH1()}
                    {Mainp()}
                </div>
            </div>
            <div>
                {New()}
            </div>
        </div>
    )
}

export default Body;