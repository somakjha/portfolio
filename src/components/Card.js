import '../styles/stylesComp/Card.scss'
function Card(){
    return(
        <div className="card-container">
            <div className="card">
                <div className='img-container'>
                    <img className='img-img' src='https://stefantopalovicdev.vercel.app/static/media/car-rental-full.c58b37da333d73238fdd.webp'/>
                </div>
                <div className='card-text'>
                    <h3>My Project</h3>
                    <p>I made this project using HTML,SCSS and React.
                       I am going to deploy this on Vercel.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;