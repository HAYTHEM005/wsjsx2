
import './Style.css';
import NavComponent from './components/NavComponent';
import imageInSrc from './imageInSrc.jpg';
function App() {
  return (
    <div>
    <NavComponent/>
      <h1 id='tit'>Haythem checkpoint</h1>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titlered">Photo et video</h1>
          <br />
          <img className='tit4' src={imageInSrc}/>
          <br />
          <img className='tit4' src="/imageInPublic.jpg" />
        </div>
        <video className='tit5' width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      
      </div>
  
  );
}

export default App;
