import './App.css' 


import card1 from './card1.png'
import card2 from './card2.png'
import card from './card.png'

import proj1 from './proj1.png' 

import p2 from './p2.jpg'
import p3 from './p3.jpg'


 

function App() {
  
  return (
    <>
     
<header className="header">
  <a href="#" className="logo">Julia</a>
  
  <nav className="navbar">
    <a href="#home" >Home</a>
    <a href="#about_me" >About </a>
    <a href="#skills" >Skills</a>
    <a href="#projects" >Projects</a>
  </nav>
</header>

<section className="home" id="home">
  <div className="home_section">
    <h3>Hello, my name is </h3>
    <h1> Julia</h1>
    <h3>I am a <span>Telecommunication student</span></h3>
    <p>Get to know me better and take a look at some of my projects. &#128187;</p>
  </div>
  <div className="profile_picture">
  <img src={p2} />
  </div>
</section>

<section className="about_me" id="about_me">
<div className="about_me_picture">
<img src={p3} />
</div>


<div className="about_me_section">
  <h2 className="head">About <span>Me</span></h2>
  <p>I am a creative and open-minded person with a passion for technology. Looking for oportunity to use my skills in practice. </p>
</div>
</section>

<section className="skills" id="skills">
<h2 className="head">What i am good <span>at</span></h2>
<div className="skills_section">
  
  <div className="skills_cards">
  <img src={card} />
  <h3>Coding</h3>
  <p>I am familiar with programming languages like JavaScript, TypeScript, Bash and C++</p>
  </div>
  
  <div className="skills_cards">
  <img src={card2} />
  <h3>UI Design</h3>
  <p>I am able to use tools like CSS or Figma to create user pleasing web interfaces. </p>
  </div>

  <div className="skills_cards">
  <img src={card1} />
  <h3>Linux and Scripting</h3>
  <p>I have an understanding of file handling, system administration and Bash scripting.</p>
  </div>

</div>
</section>

<section className="projects" id="projects">
  <h2 className="head">My<span>projects</span></h2>

  <div className="projects_section">

    <div className="projects_cards">
    <img src={proj1} />
    <div className="project_description">
    <h4>Snake</h4>
    <p>Uni project made in C++</p>
    <a href="https://github.com/julvaa/Snake" target="_blank" >See source code</a>
    </div>
    </div>

    <div className="projects_cards">
    <img src={proj1} />
    <div className="project_description">
    <h4>Pacman</h4>
    <p>Uni project made in C++</p>
    <a href="https://github.com/julvaa/Pacman" target="_blank" >See source code</a>
    </div>
    </div>

    <div className="projects_cards">
    <img src={proj1} />
    <div className="project_description">
    <h4>Saper</h4>
    <p>Uni project made in C++</p>
    <a href="https://github.com/julvaa/saper" target="_blank" >See source code</a>
    </div>
    </div>

    <div className="projects_cards">
    <img src={proj1} />
    <div className="project_description">
    <h4>Counter</h4>
    <p>JavaScript project</p>
    <a href="https://github.com/julvaa/Counter" target="_blank" >See source code</a>
    </div>
    </div>

    <div className="projects_cards">
    <img src={proj1} />
    <div className="project_description">
    <h4>Random number generator</h4>
    <p>JavaScript project</p>
    <a href="https://github.com/julvaa/Random_number_generator" target="_blank" >See source code</a>
    </div>
    </div>
    
  </div>
</section>


<footer className="footer">
  <div className="footer_text">
    <p>Copyright &copy; 2024 by @julvaa</p>
  </div>


</footer>
    </>
  )
}

export default App