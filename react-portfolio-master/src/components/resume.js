import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Nirmalraj Joseph</h2>
            <h4 style={{color: 'grey'}}>frontend developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Highly motivated and creative software developer with with experience in frontend development and Experience in working with web development technologies and agile development methods for 2years ,Good programming skills in HTML 5, CSS3, JavaScript ,Reactjs ,Angularjs, and other new technologies like cloud services (AWS ) dockers along with MySQL and SQL Server databases .
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>c/o,frederique theosophe, oddvar,solbergs vei,,48,, oslo, norway 0970</p>
            <h5>Phone</h5>
            <p>(+46)735681430</p>
            <h5>Email</h5>
            <p>nirmalraj.joseph86@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2004}
              endYear={2008}
              schoolName="Pondicherry University"
             
               />

               <Education
                 startYear={2009}
                 endYear={2017}
                 schoolName="Linkoping University"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="Fogwise AB (sweden)"
              jobDescription=" VoIP Provider Statistics ( FogWise AB)norrköping Technologies: C#, HTML5, CSS3, JavaScript, JSON, AJAX, SQLserver(database) Project goals: Aggregate and store statistics for efficient database queries. Responsibilities: Developing web applications, testing and launching and maintaining the web application. Developing supporting tools needed for the company internal use. Automatically repopulate statistics in intervals for Dashboard/monitoring use. Develop technical feasibility solutions for new functional designs and suggested options for performance improvement of technical objects.
              "
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Cybercom groups AB (sweden)"
                jobDescription="Project Involved: KPI Toll (Ericsson) Linkoping Technologies : ReactJS/Duck /saga /Redux ,Feathers(backend), Responsibilities: Developing web applications both frontend/backend in ReactJS and other java script frameworks. Developing KPI tools for Ericsson(Linkoping)needed for the company internal use. Connected -Trash Bin(cybercom Linkoping) Technologies : ReactJS/Formik/ ,FeatherJS/KnexJS(backend),Dockers, AWS(cloud services), Responsibilities: Developing Connected trash bin web/cloud based project for cybercom(Linkoping) Creating UX design for Connected trash bin project. Designed strategic plan for component development practices to support future projects."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={80}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                    <Skills
                      skill="ReactJS"
                      progress={75}
                      />
                    <Skills
                      skill="AngularJS"
                      progress={75}
                      />
                  <Skills
                      skill="NodeJS"
                      progress={75}
                      />
                  
                  <Skills
                      skill=".net"
                      progress={80}
                      />
                  <Skills
                      skill="c#"
                      progress={80}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
