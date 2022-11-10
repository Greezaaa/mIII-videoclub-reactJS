import Pelicula from '../pelicula/Pelicula'
import './videoclub.css'

function VideoClub({ obj }) {

    return (
        <div id='video_club'>
            {
                obj.peliculas.map((pelicula, i) => {
                    return (

                        <Pelicula key={i} title={pelicula.titulo} sinopsis={pelicula.sinopsis} cartel={pelicula.cartel} />
                    )
                })
            }
        </div >
    )
}

export default VideoClub

