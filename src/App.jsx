import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
      <h3>Here are some of my Skills!</h3>
      <ul>
        <h3>Languages</h3>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>

      <ol>
        <h3>Libraries</h3>
        <li>React</li>
        <li>PostgreSQL</li>
        <li>Node</li>
        <li>Bootstrap</li>
      </ol>
    

  
      <h3>Hardest Bug So Far</h3>
      <p>
        My hardest bug I ever came across was this infinite loop I couldn't
        escape.
      </p>
      <p>I came up with a totally sick solution though by doing ...</p>

    <h2>Contact Me</h2>
    </div>
    

       
  )
}

export default App
