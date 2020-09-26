import React from "react";
import "./photos.css"

const photosArray = ["https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/star-wars-episode-1-the-phantom-menace-i47371.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/vintage-retro-poster-star-wars-episode-ii-geek-n-rock.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61ZDSUH2iiL._AC_SY879_.jpg",
    "https://imgc.allpostersimages.com/img/print/posters/star-wars-episode-iv-new-hope-classic-movie-poster_a-G-9385455-0.jpg?w=632&h=950",
    "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/star-wars-episode-v-the-empire-strikes-back-i90219.jpg",
"https://images-na.ssl-images-amazon.com/images/I/61-hofd7dsL._AC_SY741_.jpg",
];

const Photos = () => {
    return (
        <div className="photo-wrapper">
            {photosArray.map((photo) => <img src={photo} className="photo-item" alt="star wars poster" />)}
        </div>
    )
}

export default Photos;