function PixelBay(){

    return(
        <div>
            <h2>Pixabay</h2>
            <input type="text" placeholder="serch for all images on Pixabay"></input>
            <button onClick={search()}>Search</button>
        </div>

    )
}

export default PixelBay;