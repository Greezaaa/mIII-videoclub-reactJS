import './pelicula.css'

function Pelicula({ title, sinopsis, cartel, i }) {
    return (
        <div key={i} className="pelicula">
            <img loading="lazy" src={cartel} referrerPolicy='no-referrer' />
            <h2 >{title}</h2>
            <p>{sinopsis}</p>
        </div>
    )
}

export default Pelicula