import './intro.scss'

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/vector1-min.png" alt="men" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Kanyshai Sharapova</h1>
                    <h3> <span>Web developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img  src="assets/down.png" alt="down string" />
                    {/* style={{marginLeft:"40%",animation:"arrowBlink 2s infinite"}} */}
                </a>
            </div>
        </div>
    )
}
