import React, { useState, useEffect } from 'react';
import './Main.css';
import Photo from '../../assets/image.jpg';
import Print from '../../assets/print.png';
import github from '../../assets/github.jpg';
import cars from '../../assets/cars.png';
import shopper from '../../assets/shopper.jpg';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { FcIdea } from 'react-icons/fc';
import { BiCode, BiCodeCurly } from 'react-icons/bi';
// import back_white from '../../assets/back_white.jpg'
// import back from '../../assets/back.jpg'

function Main({state:dark}) {
  const [loading,setloading] = useState(false);
  useEffect (()=>{
    const time= setTimeout(() => {
      setloading(true)
    }, 2000);
    return ()=>clearTimeout(time);
  },[]);
  

  useEffect(() => {
    const handleScroll = () => {
      const projects = document.querySelectorAll('.project');
      const triggerBottom = window.innerHeight / 1.2;

      projects.forEach(project => {
        const projectTop = project.getBoundingClientRect().top;
        const projectBottom = project.getBoundingClientRect().bottom;

        if (projectTop < triggerBottom && projectBottom > 0) {
          project.classList.add('visible');
        } else {
          project.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const Resume = "https://drive.google.com/file/d/1eAa6opMdLiuR-FicB8xViprJvQ1gz5Nr/view?usp=sharing";

  return (
    <div>

      {loading? 
      <div className="home_container" id='home'>
        <div className="home_info">
          <div className="info">
            <h1 className="title">
              <p style={{color: dark? 'white': '#112300'}} className="angle-bracket">{`< Hello, I'm`}</p>
              <h1 className="name">{'Mousam Bachhar />'}</h1>
            </h1>
            <h3 style={{color: dark? 'white': '#112300'}} className="description">
              Fullstack Developer | Frontend Developer | Problem Solver
            </h3>
          </div>
          <div className="btn">
            <a href={Resume} download style={{color: dark? 'white': '#112300'}} className="btn-contact">Download CV</a>
            <a style={{color: dark? 'white': '#112300'}} href="#contact" className="btn-contact">Contact Me</a>
          </div>
          </div>
          <div className="social_div_home">
              <BsTwitter style={{color: dark? 'white': '#112300'}} className="fa" onClick={()=>window.open("https://twitter.com/ryuk_0r")}/>
              <LiaLinkedin className="fa" style={{color: dark? 'white': '#112300'}} onClick={()=>window.open("https://www.linkedin.com/in/mousam-bachhar-379bb9258/")}/>
              <BsGithub className="fa" style={{color: dark? 'white': '#112300'}} onClick={()=>window.open("https://github.com/Ryuk0010")}/>

          </div>

      </div> :

      <div className="spinner-container">
            <div className="spinner"></div>
        </div>}

      {/* About Section */}
      <div className="about_container" id='about'>
        <div className="about_heading">
          <h1 style={{color : dark? '#F1EFE2':''}}>Know more about me</h1>
        </div>
        <div className="about_content">
          <div className="about_img">
            <div className="about_inner_img">
              <img src={Photo} alt="Mousam Bachhar" />
            </div>
          </div>
          <div className="about_me">
            <p style={{color : dark? '#F1EFE2':''}}>
            Hi there! I'm a passionate Information Technology student with a strong interest in programming, algorithms, and software development. 
            Currently, I'm exploring advanced topics in data structures and algorithms, aiming to deepen my knowledge and sharpen my problem-solving skills.
            I love creating projects that make a difference.
            <br></br> My recent work includes developing a blog website using Hono and Cloudflare for deployment, and leveraging React, Tailwind CSS, and TypeScript for a seamless user experience. Additionally, I’ve worked on smart home systems for fire and gas detection using Arduino, and a React-based car store application named Speed Infinite.
            <br></br>
            Beyond my technical skills, I am also enthusiastic about learning new technologies and applying them creatively. I’m actively contributing on GitHub and continuously working on improving my coding skills on platforms like LeetCode.
            In the future, I aspire to leverage my skills to build impactful solutions. When I’m not coding, you can find me exploring the latest trends in technology or enjoying a good anime.
            </p>
          </div>
          </div>
          <div className="skills">
            <div>
              <h3 style={{color : dark? '#F1EFE2':''}}>Skills:</h3>
              <p style={{color : dark? '#F1EFE2':''}}>
                <strong>Language:</strong> C++,Javascript <br/>
                <strong>Languages & Frameworks:</strong> React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Hono <br/>
                <strong>Tools & Technologies:</strong> Git, GitHub, Cloudflare, MySQL, PostgreSQL, Prisma, AWS <br/>
                <strong>Areas of Expertise:</strong> Frontend Development, Fullstack Development, Responsive Design, UI/UX
              </p>
            </div>

            <div>
              <h3 style={{color : dark? '#F1EFE2':''}}>Future Goals:</h3>
              <p style={{color : dark? '#F1EFE2':''}}>
              I am also enthusiastic about learning new technologies and applying them creatively. I’m actively contributing on GitHub and continuously working on improving my coding skills on platforms like LeetCode.
              In the future, I aspire to leverage my skills to build impactful solutions.
              </p>
            </div>
            <div>
              <h3 style={{color : dark? '#F1EFE2':''}}>Personal Interests:</h3>
              <p style={{color : dark? '#F1EFE2':''}}>
                When I’m not coding, I enjoy reading about the latest tech trends,  and gaming, watching anime. I also love to play Cricket!
              </p>

            </div>
            
          </div>
        </div>


      <div className="services_container" id="service">
        <div className="services_heading">
          <h1 style={{color : dark? '#F1EFE2':''}}>What I Can Do for You</h1>
          <p>Transform your ideas into reality with my expertise</p>
        </div>
        <div className="services_content">
          <div className="service_card">
            <BiCodeCurly />
            <h2 style={{color : dark? '#F1EFE2':''}}>Fullstack Development</h2>
            <p>
              I can build fully responsive and dynamic web applications, ensuring a seamless user experience from front to back.
            </p>
          </div>
          <div className="service_card">
            <BiCode />
            <h2 style={{color : dark? '#F1EFE2':''}}>Frontend Design</h2>
            <p>
              I specialize in creating visually appealing and user-friendly interfaces, tailored to your brand and audience.
            </p>
          </div>
          <div className="service_card">
            <FcIdea />
            <h2 style={{color : dark? '#F1EFE2':''}}>Problem Solving</h2>
            <p>
              With a strong foundation in Data Structures and Algorithms, I can tackle complex challenges and optimize your code for performance and scalability.
            </p>
          </div>
        </div>
        <div className="services_btn">
          <a href="#projects" style={{border: dark? '3px solid #F1EFE2':'',color: dark? '#F1EFE2':''}} className="btns">View My Projects</a>
        </div>
      </div>


        {/* Project Section */}
        <div className="project_container" id="projects">
          <div className="project_heading">
            <h1 style={{color: dark? '#F1EFE2':''}}>Check out my projects</h1>
          </div>
          <div className="projects">

            <div className="project">
              <div className="project_img">
                <img src={Print} alt="Print" />
              </div>
              <div className="project_description">
                <p>This Blogging App allows users to uplode blogs. User can signup and signin, authentication is also maintained here.
                  <br/>
                  Forntend - React, Tailwind. 
                  <br/>
                  Backend - Hono
                  <br/>
                  DataBase - Postgresql, prisma
                  <br/>
                  Hosting - Cloudflare
                  </p>
                <div className="project_btn">
                  <a href="https://print-ruddy.vercel.app/signup" target="_blank" rel="noopener noreferrer" className="btn-contact">Visit Here</a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project_img">
                <img src={cars} alt="Speed Unlimited" />
              </div>
              <div className="project_description">
                <p>A Car Rental App that lets users book cars according to their requirments. Implemented with React, CSS, and JavaScript.</p>
                <div className="project_btn">
                  <a href="https://github.com/Ryuk0010/Car-Rental" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project_img">
                <img src={shopper} alt="Shopper" />
              </div>
              <div className="project_description">
                <p>A online storel where customers can buy products according to their choice. Built using React, CSS, and JavaScript.</p>
                <div className="project_btn">
                  <a href="https://github.com/Ryuk0010/Shopper" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
                </div>
              </div>
            </div>

            <div className="project">
              <div className="project_img">
                <img src={github} alt="Github" />
              </div>
              <div className="project_description">
                <p>View my other Projects</p>
                <div className="project_btn">
                  <a href="https://github.com/Ryuk0010?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-contact">View on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default Main;
