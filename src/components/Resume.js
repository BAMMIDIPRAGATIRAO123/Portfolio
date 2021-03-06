import React , { Component } from 'react';
import pdf from './CERTIFICATES BAMMIDI PRAGATI RAO.pdf';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
         <div className="row hackathons">
            <div className="three columns header-col">
               <h1><span>Hackathons</span></h1>
               
            </div>

            <div className="nine columns main-col">
              <h3>Here are some of the hackathons i was part of ...</h3>
              {
                resumeData.hackathons && resumeData.hackathons.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <li><p>{item.name}</p></li>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>
         <hr/>

        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Certificates</span></h1>
            </div>

            <div className="nine columns main-col">
              <h3>Here are some of my Certificates...</h3>
              <button className="my-pdf" onClick={() => window.open(pdf)} target="_blank">
                Certificates
              </button>
            </div> 
         </div>


          <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

                <p>
                {resumeData.skillsDescription}
                </p>

                <div className="bars">

                  <ul className="skills">
                      {
                        resumeData.skills && resumeData.skills.map((item) => {
                          return(
                            <li>
                            <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                            </span><em>{item.skillname}</em>
                            </li>
                          )
                        })
                      }

                  </ul>

                </div>

   		    	</div>

          </div>
          <hr/>
          <div className="row projects">
            <div className="three columns header-col">
               <h1><span>Projects</span></h1>
            </div>

            <div className="nine columns main-col">
              <h3>Visit Project-Gallery for project demo videos...</h3>
              <h4 className="my-projects">
                <a href="https://visual-gallery.herokuapp.com/"> CLICK HERE!!!</a>
              </h4>
            </div> 
         </div>
         

      </section>
    );
  }
}