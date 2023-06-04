import '../styles/stylesComp/Home.scss'
function Home(){
    return(

        <section className='hero'>
            <div className='container-home'>
                <div className='content'>
                    <div className='hero-main'>
                        <div className='hero-text'>
                            <h1>Hello! its me, I like Doing frontend stuff!</h1>
                            <img src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png" alt="waving_hand"/>
                            <p>Hi, I'm Somak. A passionate Front-end Developer based in India📍</p>
                        </div>
                        <div className='hero-img'></div>
                    </div>
                    <div className="skills">
                    <h2>Tech Stack</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Home;