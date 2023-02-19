import '../style/About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About me</h2>
      <div>
        <div>
          <img src="https://github.com/FredericoTP/FredericoTP.github.io/blob/main/images/fred.jpeg?raw=true" alt="Fred" />
        </div>
        <div>
          <p>
            Meu nome é Frederico Tavares Pessoa e moro no interior de Minas Gerais, Brasil. Algumas de minhas paixões são programação, tecnologia, fotografia, astronomia e jogos. No momento estou migrando de área como estudante de Desenvolvimento Web Full Stack. Com o conhecimento que estou adquirindo, espero contribuir para tornar o futuro mais prático e contribuir positivamente na vida das pessoas.
          </p>
        </div>
      </div>
      <div>
        <div>
          <a href="blabla">Linkdin</a>
          <a href="blabla">Github</a>
        </div>
        <div className="about-stacks-container">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="html" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="javascript" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="jest" />
          <img src="https://testing-library.com/img/logo-large.png" alt="rtl" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="docker" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" />
        </div>
      </div>
    </div>
  )
}

export default About;