import './Appa.css';


let name = "pritam";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
      <div className="container">
        <h2>Hello {name} welcome to website</h2>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex soluta odio voluptatum cupiditate saepe maiores hic totam eaque molestias laboriosam
          . Amet molestiae placeat vero quas quibusdam sint deleniti ipsa fugit?</p>
      </div>

    </>
  );
}

export default App;
