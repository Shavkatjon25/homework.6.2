function Uch(a){
    return(
        <div className="fot1">
            <div><img src={a.img} alt="" /></div>
            <div className="ft">
                <h2>{a.h2}</h2>
                <h3>{a.h3}</h3>
                <p>{a.p}</p>
            </div>
        </div>
    )
}

function Foot(){
    return(
        <div className="fot">
            <Uch img="./Bitmap (2).png" h2="01" h3="Reviving Retro PCs" p="What happens when old PCs are given modern upgrades?"></Uch>
            <Uch img="./Bitmap (1).png" h2="02" h3="Top 10 Laptops of 2022" p="Our best picks for various needs and budgets."></Uch>
            <Uch img="./Bitmap.jpg" h2="03" h3="The Growth of Gaming" p="How the pandemic has sparked fresh opportunities."></Uch>
        </div>
    )
}


export default Foot;