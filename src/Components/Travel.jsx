import Cards from "./Cards"

function Travel ({data,Remove}) {
    console.log(data)
    return(
        <>

        <h1 className="heading">Reach Your Destination With Mru's Travel Agency</h1>
        
        <div className="main">
        {
            data.map((items)=>{
                return(
                    <Cards key={items.id} {...items} Remove={Remove} />
                )
            })
        }
        </div>
        </>
    )
}

export default Travel