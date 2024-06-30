import React, { useRef, useEffect, useState } from 'react';
import './projects.css'
import { ProjectCards } from '../../components/projectCards/projectCards';
import info from '../../assets/info.png'
import TrailerComponent from '../../components/trailer/trailer';
import video from '../../assets/video2.mp4'
import logan from '../../assets/logan.jpg'
import logan1 from '../../assets/logan1.jpg'
import logan2 from '../../assets/logan2.jpg'
import logan3 from '../../assets/logan3.jpg'
import logan4 from '../../assets/logan4.jpg'
import logan5 from '../../assets/logan5.jpg'
import logan6 from '../../assets/logan6.jpg'
import linkedin from '../../assets/linkedin.png'
import gitHub from '../../assets/github.png'
import resPdf from '../../assets/Resume.pdf'
import resPic from '../../assets/resPic.png'
import vacanze from '../../assets/Dark-preview.png'
import benPic from '../../assets/benImg.jpg'
import TB from '../../assets/tbRedesign.webp'

import { Button } from '../../components/buttons/button';

function Projects() {
  // let bgVideo = require('../../assets/bgvideo.mp4').default;
  let home = useRef<HTMLDivElement>(null);
  let skills = useRef<HTMLDivElement>(null);
  let work = useRef<HTMLDivElement>(null);
  let projects = useRef<HTMLDivElement>(null);

  let homeBtn = useRef<HTMLButtonElement>(null);
  let workBtn = useRef<HTMLButtonElement>(null);
  let projBtn = useRef<HTMLButtonElement>(null);
  let skillBtn = useRef<HTMLButtonElement>(null);
  let aboutBtn = useRef<HTMLButtonElement>(null);
  let testBtn = useRef<HTMLButtonElement>(null);
  let resBtn = useRef<HTMLButtonElement>(null);
  let aboutS = useRef<HTMLDivElement>(null);
  let resS = useRef<HTMLDivElement>(null);
  let testS = useRef<HTMLDivElement>(null);
  let scroolToSect = useRef<HTMLDivElement>(null);

  let test1 = useRef<HTMLDivElement>(null);
  let test2 = useRef<HTMLDivElement>(null);
  let test3 = useRef<HTMLDivElement>(null);
  let test4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(test1.current?.classList.contains('pos1')){
        test1.current.classList.remove('pos1')
        test1.current.classList.add('pos2')
        test2.current?.classList.remove('pos2')
        test2.current?.classList.add('pos3')
        test3.current?.classList.remove('pos3')
        test3.current?.classList.add('pos4')
        test4.current?.classList.remove('pos4')
        test4.current?.classList.add('pos1')
      } else if(test1.current?.classList.contains('pos2')){
        test1.current.classList.remove('pos2')
        test1.current.classList.add('pos3')
        test2.current?.classList.remove('pos3')
        test2.current?.classList.add('pos4')
        test3.current?.classList.remove('pos4')
        test3.current?.classList.add('pos1')
        test4.current?.classList.remove('pos1')
        test4.current?.classList.add('pos2')
      } else if(test1.current?.classList.contains('pos3')){
        test1.current.classList.remove('pos3')
        test1.current.classList.add('pos4')
        test2.current?.classList.remove('pos4')
        test2.current?.classList.add('pos1')
        test3.current?.classList.remove('pos1')
        test3.current?.classList.add('pos2')
        test4.current?.classList.remove('pos2')
        test4.current?.classList.add('pos3')
      } else if(test1.current?.classList.contains('pos4')){
        test1.current.classList.remove('pos4')
        test1.current.classList.add('pos1')
        test2.current?.classList.remove('pos1')
        test2.current?.classList.add('pos2')
        test3.current?.classList.remove('pos2')
        test3.current?.classList.add('pos3')
        test4.current?.classList.remove('pos3')
        test4.current?.classList.add('pos4')
      }
    }, 5000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const [navClick, setNavClick] = useState(false)

  const changeSection = (section:string) => {
    switch(section){
      case 'home':
        skillBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        resBtn.current?.classList.remove('primaryBtn')
        workBtn.current?.classList.remove('primaryBtn')
        homeBtn.current?.classList.remove('secondaryBtn')
        homeBtn.current?.classList.add('primaryBtn')
        testBtn.current?.classList.remove('primaryBtn')

        // if (home.current && navClick == true) {
        //   scrollToSection('home')
        // }
        break;
      case 'work':
        homeBtn.current?.classList.remove('primaryBtn')
        skillBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        resBtn.current?.classList.remove('primaryBtn')
        workBtn.current?.classList.add('primaryBtn')
        testBtn.current?.classList.remove('primaryBtn')

        // if (work.current && navClick == true) {
        //   scrollToSection('work')
        // }
        break;
      case 'skill':
        homeBtn.current?.classList.remove('primaryBtn')
        workBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        skillBtn.current?.classList.remove('secondaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        resBtn.current?.classList.remove('primaryBtn')
        skillBtn.current?.classList.add('primaryBtn')
        testBtn.current?.classList.remove('primaryBtn')

        // if (skills.current && navClick == true) {
        //   scrollToSection('skill')
        // }
        break;
      case 'project':
        homeBtn.current?.classList.remove('primaryBtn')
        workBtn.current?.classList.remove('primaryBtn')
        skillBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('secondaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        resBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.add('primaryBtn')
        testBtn.current?.classList.remove('primaryBtn')

        // if (projects.current && navClick == true) {
        //   scrollToSection('project')
        // }
        break;
      case 'about':
        homeBtn.current?.classList.remove('primaryBtn')
        workBtn.current?.classList.remove('primaryBtn')
        skillBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        aboutBtn.current?.classList.remove('secondaryBtn')
        aboutBtn.current?.classList.add('primaryBtn')
        resBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        testBtn.current?.classList.remove('primaryBtn')
        break;
      case 'test':
        homeBtn.current?.classList.remove('primaryBtn')
        workBtn.current?.classList.remove('primaryBtn')
        skillBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        resBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        testBtn.current?.classList.add('primaryBtn')
        testBtn.current?.classList.remove('secondaryBtn')
        break;
      case 'res':
        homeBtn.current?.classList.remove('primaryBtn')
        workBtn.current?.classList.remove('primaryBtn')
        skillBtn.current?.classList.remove('primaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        aboutBtn.current?.classList.remove('primaryBtn')
        resBtn.current?.classList.add('primaryBtn')
        resBtn.current?.classList.remove('secondaryBtn')
        projBtn.current?.classList.remove('primaryBtn')
        testBtn.current?.classList.remove('primaryBtn')

        // if (resS.current) {
        //   scrollToSection('res')
        // }
        break;
    }
    // setTimeout(() => setNavClick(false), 1000);
  }

  const scrollToSection = (sect: any) => {

    switch(sect.current.id){
      case 'home':
        if (home.current) {
        home.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
        setNavClick(false)
        }
        break;
      case 'workContain':
        if (work.current) {
        work.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
        setNavClick(false)
        }
        break;
      case 'proj':
        if (projects.current) {
        projects.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
        setNavClick(false)
        }
        break;
      case 'skill':
        if (skills.current) {
        skills.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
        setNavClick(false)
        }
        break;
      case 'about':
        if (aboutS.current) {
        aboutS.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
        setNavClick(false)
        }
        break;
      case 'test':
        if (testS.current) {
          testS.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
          setNavClick(false)
          }
          break;
      case 'res':
        if (resS.current) {
        resS.current?.scrollIntoView({ behavior: 'smooth' });
        setNavClick(false)
        }
        break;
    }
  }
  
  
  // const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const trailerRef = useRef<HTMLDivElement | null>(null);
  const handleMouseOver = () => {
    trailerRef?.current?.classList.add('trailerInBtn')
  }
  const handleMouseOut = () => {
    trailerRef?.current?.classList.remove('trailerInBtn')
  }


  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        switch(entry.target.id){
          case 'workContain':
            changeSection('work');
            break;
          case 'res':
            changeSection('res');
            break;
          case 'about':
            changeSection('about');
            break;
          case 'test':
            changeSection('test');
            break;
          case 'skill':
            changeSection('skill');
            break;
          case 'proj':
            changeSection('project');
            break;
          case 'home':
            changeSection('home');
            break;
        }
        
      }
    });
  };
  
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1 // Adjust threshold for more frequent intersection detection
  };
  
  useEffect(() => {
    if(navClick != true){
      const observer = new IntersectionObserver(callback, options);
      if (work.current) {
        observer.observe(work.current);
      }
      // setNavClick(false)
      // Cleanup observer on component unmount
      return () => {
        if (work.current) {
          observer.unobserve(work.current);
        }
      };
    }
  }, [work, options]);

  useEffect(() => {
    if(navClick != true){
      const observer = new IntersectionObserver(callback, options);
      if (home.current) {
        observer.observe(home.current);
      }
      // setNavClick(false)
      return () => {
        if (home.current) {
          observer.unobserve(home.current);
        }
      };
    }
  }, [home, options]);
  useEffect(() => {
    if(navClick != true){
      const observer = new IntersectionObserver(callback, options);
      if (skills.current) {
        observer.observe(skills.current);
      }
      setNavClick(false)
      return () => {
        if (skills.current) {
          observer.unobserve(skills.current);
        }
      };
    }
  }, [skills, options]);

  useEffect(() => {
    if(navClick != true){
      const observer = new IntersectionObserver(callback, options);
      if (projects.current) {
        observer.observe(projects.current);
      }
      // setNavClick(false)
      return () => {
        if (projects.current) {
          observer.unobserve(projects.current);
        }
      };
    }
  }, [projects, options]); 

  useEffect(() => {
    if(navClick != true){
      const observer = new IntersectionObserver(callback, options);
      if (aboutS.current) {
        observer.observe(aboutS.current);
      }
      // setNavClick(false)
      return () => {
        if (aboutS.current) {
          observer.unobserve(aboutS.current);
        }
      };
    }
  }, [aboutS, options]);
  useEffect(() => {
    if(navClick != true){
      const observer = new IntersectionObserver(callback, options);
      if (testS.current) {
        observer.observe(testS.current);
      }
      // setNavClick(false)
      return () => {
        if (testS.current) {
          observer.unobserve(testS.current);
        }
      };
    }
  }, [testS, options]);
  useEffect(() => {
    if(navClick != true){
      const observer = new IntersectionObserver(callback, options);
      if (resS.current) {
        observer.observe(resS.current);
      }
      // setNavClick(false)
      return () => {
        if (resS.current) {
          observer.unobserve(resS.current);
        }
      };
    }
  }, [resS, options]);


  return (
    <div className='projPageWrap'>
      <div className='backgroundd'>
        <video muted loop id="myVideo"src={video} 
        // width={640} 
        // height={360} 
        autoPlay
        controls={false}
        style={{ display: 'block' }}
        />
      </div>
      <section id='home' ref={home} className='hero'>
        <div className='onTop'>
      <h2>Hi, I'm <span>Logan</span>.</h2>
      <h3>I'm a Full-Stack Developer based in Utah, <br/>welcome to my portfolio!</h3> 
      <button onClick={() => {
          setNavClick(true)
          scrollToSection(work)
          // changeSection('work')
        }} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='btnStyles primaryBtn'>See My Work</button>
      </div>
      </section>
      <section ref={scroolToSect} id='work' className='btnHolder'>
      <button ref={homeBtn} onClick={() =>{
          // setNavClick(true) 
          scrollToSection(home)
          // changeSection('home')
        }} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='btnStyles secondaryBtn onTop'>Home</button>
      <button ref={workBtn} onClick={() => {
          // setNavClick(true) 
          scrollToSection(work)
          // changeSection('work')
        }} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='btnStyles primaryBtn onTop'>Work Experience</button>
      <button ref={projBtn} 
      onClick={() => {
        scrollToSection(projects)
      }} 
      onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='btnStyles secondaryBtn onTop' >Projects</button>
      <button ref={skillBtn} onClick={() => {
          scrollToSection(skills)
        }} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='btnStyles secondaryBtn onTop' >Skills</button>
      <button ref={aboutBtn} onClick={() => {
          scrollToSection(aboutS)
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='btnStyles secondaryBtn onTop' >About Me</button>
      <button  ref={resBtn} onClick={() => {
          scrollToSection(resS)
        }} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className='btnStyles secondaryBtn onTop' >Resume & Contact Info</button>
      </section>
      
      <article id='workContain' className=' onTop' ref={work}>
        <section className='experience onTop'>
          <div className='order2'>
          <img src={vacanze}  alt='img'/>
          </div>
          <div className='order1'>
            <h2>Vacanze</h2>
            <h3>Founder</h3>
            <h4>January 2023 - Current</h4>
            <article>As the founder of Vacanze, I have been responsible for the development and implementation of all aspects of the business. My day-to-day responsibilities include designing and developing the web application using technologies such as React, Node.js, and MongoDB, as well as connecting the applicaiton with third-party integrations, such as GoogleMaps API and Stripe Payments, to provide additional functionality. I also manage the hosting and deployment of the application using heroku. In addition to my technical responsibilities, I am responsible for managing the business operations of the company, including customer acquisition and retention, marketing and advertising, and financial management.<br/>
            <a href='https://www.vacanzeguides.com/'>Check out Vacanze HERE</a>
            </article>
          </div>
        </section>
        <section className='experience onTop wave1'>
        <div>
            <h2>TubeBuddy</h2>
            <h3 className='blackText'>Front-End Developer</h3>
            <h4 className='blackText'>January 2023 - Current</h4>
            <article>As a Front-End Developer, I am responsible for creating quality UX/UI interfaces using HTML, CSS, and JavaScript along with Wordpress and Shopify. I integrate our site with various API endpoints, from our own database and backend, to with ChatGPT and other 3rd party integrations. I build tests to track conversions on our website to optimize web traffic and increase revenue. I collaborate design and marketing teams, as well as back-end developers, to build pages and components from figma files, connect webpages to our backend, and to optimize SEO performance.<br/>
            <a className='redText' href='https://www.tubebuddy.com/'>Check out TubeBuddy HERE</a>
            </article>
          </div>
          <div>
          <img src={TB} alt='img'/>
          </div>
        </section>
        <section className='experience onTop'>
          <div  className='order2'>
          <img src={benPic}  alt='img'/>
          </div>
          <div className='order1'>
            <h2>BENlabs</h2>
            <h3>Front-End Developer</h3>
            <h4>January 2023 - Current</h4>
            <article>Worked as a designer and WordPress devloper.  Created landing pages, redesigned nav bar, performed A/B tests to track converstions, and optimized web & SEO performance.<br/>
            <a href='https://www.benlabs.com/'>Check out BEnlabs HERE</a>
            </article>
          </div>
        </section>

      </article>
      
      <article id='proj' className='onTop' ref={projects}>
      <section className='cardsContainer'>
      <ProjectCards company='TubeBuddy' position='Front-end Developer' description='Built "AI Agents" interactive AI chatbot for YouTubers' graphic='ai' details='Build "AI Agents" for TubeBuddy, these agents are all separate chat bots with specific rolls on your "AI Team".  You supply the agents with your YouTube channel and they do the rest.  From generating video ideas, to the title and description of the video, and much more.<a href="https://www.tubebuddy.com/ai/agents/"> Check it out yourself HERE</a>' />
      <ProjectCards company='TubeBuddy' position='Front-end Developer' description='Fully redesigned and implemented new TubeBuddy website' graphic='tbRedesign' details='Redesigned and implemented an entire new site for TubeBuddy.  I worked with marketers, designers, and back-end developers to reshape our brand and functionality.  We increased users and revenue year over year by close to 20% each.' />
      <ProjectCards company='BENlabs' position='Front-end Developer' description='Implemented new designs, landing pages, and nav bar on BENlabs website' graphic='benRedesign' details='Implemented new designs, landing pages, and nav bar on BENlabs website' />
      <ProjectCards company='Vacanze' position='Founder' description='Integrated Vacanze with Stripe as the payment stack' graphic='stripe' details='Build entire Vacanze payment stack with Stripe.  Stipe has built in subscription models that work in most cases, I could not use those in my specific case.  i built a new subscription model from scratch.  Using webhooks, users are billed monthly or yearly based on the reccuring subscription that they choose.  If a user does not pay, then their subscription is cancelled.  Or they can cancel themselves.' />
      <ProjectCards company='Vacanze' position='Founder' description='Built fully customizable GoogleMaps integration' graphic='googleMap' details='Built a custom Google Maps integration for Vacanze.  Users are able to create custom locations on their app that they build with Vacanze. The locations that are marked can be anything from parks, to churches, to restaurants.  Each has its own type of map marker as well to destinguish between the types.  This is mostly done through geo-coding addresses or by choosing the latittude and longitude of the location you want to mark.' />
      <ProjectCards company='Vacanze' position='Founder' description='Made Vacanze into a dynamic downloadable PWA website' graphic='guideFull' details='Made Vacanze into a dymanic pwa application so that Airbnb hosts can share the guide to their property with guests staying there on vacation.  Guests can then view the guide in their mobile browser, or download the guide to their homescreen.  The host can customize the app icon, color, and name to match the brand and identity of their home.' />
      <ProjectCards company='TubeBuddy' position='Front-end Developer' description='Performed SEO audits and improved website performace/Google Lighthouse scores' graphic='score' details='Performed SEO audits to maximize our organic traffic, focus on keywords, and improve site quality.  I also improved our website performace by simplifiying our DOM, implementing best practices, and removing unused javascript and css files that were being loaded onto every page of the website even when they were not being used.' />
      <ProjectCards company='Vacanze' position='Founder' description='Designed & built entire product' graphic='vacanzeBeach' details='Build & designed full product.  From database design/management, to Backend and Frontend design/management.  <a href="https://www.vacanzeguides.com/user/63d9d428f366de6c77a3f86c/guide/6429d1e99590aabaa72cadae" target="_blank">Check out an example HERE</a>' />
      </section>
      </article>
      <article id='skill' className='onTop skillsContain' ref={skills}>
        <div id='skillContain' className='skillwrap onTop'>
          <article className='react skillcard'>
            <div>
              <p>React is my bread and butter, I've created many projects with React and wrote the entire frontend of Vacanze with it.</p>
            </div>
          </article>
          <article className='redux skillcard onTop'>
            <div>
              <p>Redux is what I have used in all my React projects for state management.</p>
            </div>
          </article>
          <article className='gql skillcard onTop'>
            <div>
              <p>Used graphQL extensively on projects and on live businesses/applications</p>
            </div>
          </article>
          <article className='apollo skillcard onTop'>
            <div>
              <p>Used Apollo with graphQl extensively on projects and on live businesses/applications</p>
            </div>
          </article>
          <article className='css skillcard onTop'>
            <div>
              <p>I use CSS and multiple CSS frameworks like Tailwind, Bootstrap, and Bulma</p>
            </div>
          </article>
          <article className='js skillcard onTop'>
            <div>
              <p>Javascript is my most used language. I am highly profficient with it.</p>
            </div>
          </article>
          <article className='jwt skillcard onTop'>
            <div>
              <p>I've used JSON Web Tokens to verify if user's are logged in.</p>
            </div>
          </article>
          <article className='mongo skillcard onTop'>
            <div>
              <p>Mongo is my go to Database, used on multiple projects and on Vacanze.</p>
            </div>
          </article>
          <article className='mongoose skillcard onTop'>
            <div>
              <p>I've used Mongoose on multiple projects and done complex CRUD operations.</p>
            </div>
          </article>
          <article className='node skillcard onTop'>
            <div>
              <p>Node.JS is my go to backend framework, I have built many projects and a business using Node.</p>
            </div>
          </article>
          <article className='pwa skillcard onTop'>
            <div>
              <p>I've created PWAs that have custom icons, titles, & colors based on database info and which page a user is downloading.</p>
            </div>
          </article>
          <article className='seqelize skillcard onTop '>
            <div>
              <p>Used on multiple projects.</p>
            </div>
          </article>
          <article className='stripe skillcard onTop'>
            <div>
              <p>I've created stripe integrations from start to finish, from shopping carts, to fully application integrations using webhooks.</p>
            </div>
          </article>
          <article className='gql skillcard onTop'>
            <div>
              <p>Used graphQL extensively on projects and on live businesses/applications</p>
            </div>
          </article>
          <article className='github skillcard onTop'>
            <div>
              <p>Profficient with Git & Github.</p>
            </div>
          </article>
          <article className='express skillcard onTop'>
            <div>
              <p>I have used express on many applications to create a REST API along with Node.js</p>
            </div>
          </article>
          <article className='rest skillcard onTop'>
            <div>
              <p>Made multiple projects using rest APIs.</p>
            </div>
          </article>
          <article className='mysql skillcard onTop'>
            <div>
              <p>Used on multiple projects.</p>
            </div>
          </article>
        </div>
      </article>
      <section id='about' ref={aboutS} className='onTop'>
        <div className='loganWrap'>
          <img className='logan l1' src={logan} alt='imgs'/>
          <img className='logan l2' src={logan1} alt='imgs'/>
          <img className='logan l3' src={logan2} alt='imgs'/>
          <img className='logan l4' src={logan3} alt='imgs'/>
          <img className='logan l5' src={logan4} alt='imgs'/>
          <img className='logan l6' src={logan5} alt='imgs'/>
          <img className='logan l7' src={logan6} alt='imgs'/>
        </div>
          <div><p>
            I Graduated from Weber State University with an associates degree in Management Information Systems and have a coding certificate from the University of Utah Coding Bootcamp. <br/><br/>I Love rock climbing, skiing, fly fishing, playing hockey, and of course, software development!
          </p></div>
      </section>
      <section  id='test' ref={testS} className='onTop hide'>
      <div>
            <article className='test pos1' ref={test1}>
              <img src={linkedin} alt='imgs'/>
              <p>Quote goes here Quote goes here</p>
              <h5>Name</h5>
              <h6>work relation</h6>
            </article>
            <article className='test pos2' ref={test2}>
              <img src={linkedin} alt='imgs'/>
              <p>Quote goes here Quote goes here</p>
              <h5>Name</h5>
              <h6>work relation</h6>
            </article>
            <article className='test pos3' ref={test3}>
              <img src={linkedin} alt='imgs'/>
              <p>Quote goes here Quote goes here</p>
              <h5>Name</h5>
              <h6>work relation</h6>
            </article>
            <article className='test pos4' ref={test4}>
              <img src={linkedin} alt='imgs'/>
              <p>Quote goes here Quote goes here</p>
              <h5>Name</h5>
              <h6>work relation</h6>
            </article>
          </div>
          </section>
      <section id='res' ref={resS} className='onTop'>
        <div className='resImgContain'>
        <img onClick={() => window.open(resPdf, '_blank', 'noopener,noreferrer')} className='resPdf' src={resPic} alt='imgs'/>
          </div>
        <div className='resImgContain'>
          <div className='m-t-auto'>
          <a href='https://www.linkedin.com/in/logan-parke/' target='_blank'><img className='resImgs' src={linkedin} alt='imgs'/></a>
          <a href='https://github.com/loganparke' target='_blank'><img className='resImgs' src={gitHub} alt='imgs'/></a>
          </div>
          <div className='m-b-auto'>
            <p>Email: LoganParke14@outlook.com</p>
            <p>Phone: (801)668-8690</p>
          </div>
        </div>
      </section>
      <TrailerComponent ref={trailerRef} />
    </div>
  )
}

export default Projects;