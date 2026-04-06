import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";

import "./App.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

const unavailable = {
	"Mon": [
		hours.slice(1,3),
		hours.slice(8)
	],
	"Tue": hours.slice(4),
	"Wed": hours.slice(4),
	"Thu": hours.slice(1,5)
}

function isAvailable(day, time) {
  const dayUnavailable = unavailable[day];

  if (!dayUnavailable) return true;

  if (Array.isArray(dayUnavailable[0])) {
    return !dayUnavailable.some(block => block.includes(time));
  }

  return !dayUnavailable.includes(time);
}

class App extends Component {
	componentDidMount() {
    	const themeSwitch = document.getElementById('theme-switch');

    	const enableLightmode = () => {
    		document.body.classList.add('lightmode');
    		localStorage.setItem('lightmode', 'active');
    	};

    	const disableLightmode = () => {
    		document.body.classList.remove('lightmode');
    		localStorage.setItem('lightmode', null);
    	};

    	if (localStorage.getItem('lightmode') === "active") {
    		enableLightmode();
	    }

    	if (themeSwitch) {
    		themeSwitch.addEventListener("click", () => {
				localStorage.getItem('lightmode') !== "active" ? enableLightmode() : disableLightmode();
    		});
		}
	}
	render() {
		return (
			<HashRouter>
			<body className="App">

				<nav>
					<div className="headerparent">
						<div className="headerdiv1">
							<img src="images/headshot.jpg" className="profilepicture"></img>
						</div>
						<div className="headerdiv2">
							<p>Raiden Hickman</p>
						</div>
						<div className="headerdiv3">
							<p><a href="mailto:Rafdl.com">Raiden.Hickman@gmail.com</a></p>
						</div>
						<div className="headerdiv4">
							<p><a href="tel:+61478287743">+61 478 287 743</a></p>
						</div>
					</div>
					<button id="theme-switch">
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
						<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
					</button>
				</nav>



				 <div className="bodyparent">
					<div className="aboutme"> 
							I'm a third year Computer Science undergraduate at Griffith University. 
							I'm looking for internships, casual positions, or part time positions that I can use to kickstart my career.
							This webpage is here to demonstrate everything I have to offer.
					</div>


					<div className="calendar">
						<div className="legend">
							<div className="box available"></div>: Available <div className="box unavailable"></div>: Unavailable
						</div>
						<table className="calendar-table">
 						    <thead>
        						<tr>
						          <th></th>
						          {days.map((day) => (
            						<th key={day}>{day}</th>
						          ))}
       							</tr>
					      	</thead>
      						<tbody>
						        {hours.map((time) => (
    						    	<tr key={time}>
					            		<td>{time}</td>
						    	        {days.map((day) => (
              								<td
						    	    	        key={day}
						        	    	    className={isAvailable(day, time) ? "available" : "unavailable"}
								            ></td>
							            ))}
							        </tr>
        						))}
						    </tbody>
					    </table>
					</div>
					<div className="qualifications">
						<div className="buttons">
							<button className="button" onClick={() => window.location.href='https://github.com/raidenhickman/'}><span>GitHub</span></button>
							<button className="button" onClick={() => window.location.href='https://www.linkedin.com/in/raiden-hickman-804b572a6/'}><span>LinkedIn</span></button>
						</div>
						
						<div className="scrollablestaticdiv">
							<ul>
								<h2>Skills & Qualifications</h2>
								<li>
									<h2>React & React Native</h2>
									<p>This website was created by hand in React to replace an older pure HTML version. I also have experience in React Native for creating mobile apps.</p>
								</li>
								<li>
									<h2>Rust</h2>
									<p>I've complete Google's <i>Comprehensive Rust</i> intensive course, which is intended for knowledgable programmers to develop a good understanding of the core principles of Rust.</p>
								</li>
								<li>
									<h2>Other Programming Languages</h2>
									<p>Through my education, I've learnt Python (Particularly for Machine Learning and home automation, but including the creation and use of APIs), C++ and C, Java, and JavaScript.</p>
								</li>
								<li>
									<h2>Certificates</h2>
									<p>I possess a Certificate 3 in Information and Digital Media (ICT30120) including electives relating to Cybersecurity, IT support, Hardware Maintenance, basic Systems Administrator skills, and programming related tasks. I also possess a Certificate 2 in Engineering Pathways (MEM20413)</p>
								</li>
								<li>
									<h2>Work Experience</h2>
									<h3>RHC Solicitors</h3>
									<h4>Aug 2022 - Apr 2023, Feb 2023 - Jan 2025</h4>
									<p>Scanning & digitising sensitive documents, data entry & marketing, and administration duties inlcuding client interaction.</p>
									<h3>RAW Marketing</h3>
									<h4>Aug 2025 - Oct 2025</h4>
									<p>Cold-call marketing direct to potential clients. Included understanding a variety of software and the relevant needs of each client.</p>
								</li>
								<li>
									<h2>What's Next?</h2>
									<p>Other than completing my degree, I have some interesting projects lined up.</p>
									<ul>
										<li>
											<h3>MindmAPP</h3>
											<p>A notes app that syncs notes with other people in your group that allows anyone in the group to organise their notes however they need.</p>
											<p>I began the creation of this with Kotlin in Android Studio and am currently in the process of remaking it with React Native.</p>
										</li>
										<li>
											<h3>DataCamp Certificates</h3>
											<p>I'm working through the following certifications on DataCamp:</p>
											<p>- AWS Cloud Practitioner</p>
											<p>- Associate Data Engineer Career Track</p>
											<p>By working through these a few hours a day, I'll soon have certifiable experience in the applicable fields.</p>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div> 





				<footer>
					<div className="wave">
						<svg viewBox = "0 0 1440 100" width="100%" height="1em" preserveAspectRatio="none">
							<path
							d="M0,50 C360,150 1080,-50 1440,50 L1440, 50 L1440,100 L0,100 Z" fill="var(--secondary-color)"
							/>
						</svg>
					</div>
				</footer>





			</body>


			</HashRouter>
		);
	}
}
export default App;