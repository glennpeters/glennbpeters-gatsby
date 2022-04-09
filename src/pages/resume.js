import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../css/resume.css'

const Resume = () => (
  <Layout>
    <SEO title="Glenn Peters Resume" />
    <div id="resume">
		<div id="innerWrapper container">

			<div id="my-info">
				<h1>Glenn Peters</h1>

				<div>
					<span className="address">
						Portland, OR
					</span>
					<a href="tel:503-753-4919">503 753-4919</a>
					<div>
						<a href="mailto:work@glennbpeters.com">work@glennbpeters.com</a>
					</div>
				</div>
			</div>

			<section id="technologies">

				<h2>Technologies</h2>

				<ul>
					<li>
						<strong>Languages and libraries</strong>
						HTML5, CSS3 (Responsive Design, Media Queries), 
						LESS, SASS, JavaScript 
						(including jQuery, React, Vue, Angular, Knockout, Greensock, 
						Handlebars, etc.), 
						SQL, PHP, Perl
					</li>
					{/* <li>
						<strong>Platforms</strong>
						Macintosh, Windows, Unix / Linux
					</li> */}
					<li>
						<strong>Tools and Protocols</strong>
						VS Code, Visual Studio, 
						Jira/Atlassian Suite, Snowflake, 
						mySQL, SQL Server, 
						SQL Developer, Oracle, IIS, Apache, Photoshop,
						Tableau, Git, Visual SourceSafe, CVS, Subversion
					</li>
				</ul>
			</section>

			<section id="workExperience">

				<h2>Work Experience</h2>

				<div className="job">
					<div className="info">
						<div className="company">
							Artech
						</div>
						<div className="position">
							<div className="title">Developer (contract)</div>
							<div className="dates">January 2020 - April 2022</div>
						</div>
					</div>

					<ul>
						<li>Implementation, debug, and analysis of content, custom code and components on intel.com with 
							improved accessibility, responsiveness, and decreased page load (Adobe Experience Manager, 
							HTML5, CSS3, JavaScript, Aria accessibility)</li>
						<li>
							Implementing and troubleshooting custom code for A/B testing on intel.com
							(Adobe Target, HTML5, CSS3, JavaScript, jQuery)
						</li>
						<li>
							Intel.com standards advocacy and documentation
						</li>
						<li>
							Prominent projects:
							<ul>
								<li>New intel.com home page template, 2020—2021 </li>
								<li>New Contact Support page, 2021 (Notable for keyboard support)</li>
								<li>New Download Center download pages, 2021 (notable for accessible support, including modal, the most used pages on the site)</li>
								<li>New alternate home heroes, 2021—2022</li>
							</ul>
						</li>
					</ul>
				</div>

				<div className="job">
					<div className="info">
						<div className="company">
							PCD Group
						</div>
						<div className="position">
							<div className="title">Developer (contract)</div>
							<div className="dates">April 2019 - June 2019</div>
						</div>
					</div>

					<ul>
						<li>
							Development of Citibank Gold microsite, responsive design implementation and 
							integration with a focus on 503 compliance. (JavaScript, SVG, jQuery, CSS3, SASS, Perl)
						</li>
					</ul>
				</div>

				<div className="job">
					<div className="info">
						<div className="company">
							ARM Insight
						</div>
						<div className="position">
							<div className="title">Senior UI Developer</div>
							<div className="dates">April 2017 - February 2019</div>
						</div>
					</div>

					<ul>
						<li>Maintenance and new features for a micro-rewards management system, including adding 
							Google Analytics tracking (JavaScript: KnockoutJS, .Net, SQL Server) </li>
						<li>Development of SecurLock Analytix website (JavaScript: VueJS, Vue Material, .Net, SQL Server)</li>
						<li>Development of Match Validation website (JavaScript: VueJS, Vue Material, .Net, SQL Server)</li>
					</ul>
				</div>

				<div className="job">
					<div className="info">
						<div className="company">
							DSV
						</div>
						<div className="position">
							<div className="title">Senior Software Engineer</div>
							<div className="dates">August 2015 - December 2016</div>
						</div>
					</div>

					<ul>
						<li>Maintenance of 1View freight management application -- bug fixes and new features (HTML, CSS, Javascript,
							jQuery, JavaScriptMVC, StealJS, Ruby, Eclipse IDE, RTC, Node.js)</li>
						<li>Development of new feature: Job Costing reports (DOM manipulation, AJAX calls, asynchronous promises)</li>
						<li>Researched ReactJS as potential new technology to use  for development, developed small test applications</li>
					</ul>

					<p className="note">(UTi was purchased by DSV January 2016, department was eliminated December 2016.)</p>
				</div>

				<div className="job">
					<div className="info">
						<div className="company">
							IGNW
						</div>
						<div className="position">
							<div className="role">Ricochet Partners (contract)</div>
							<div className="title">Web Developer</div>
							<div className="dates">January 2015 - April 2015</div>
						</div>
					</div>

					<ul>
						<li>Developed Bridge (JavaScript, SCORM 1.2) between Storyline Articulate (SCORM Driver) and the Intel Learning Network LMS</li>
						<li>Development of custom websites: Responsive page creation, Hubspot integration, customized jQuery plugins  (Expression Engine, Hubspot, HTML5, CSS3, Responsive Design, Media Queries, JavaScript, jQuery)</li>
						<li>Created and updated Hubspot landing pages and template (Hubspot, HTML5, CSS3 (Responsive Design, Media Queries), JavaScript, jQuery)</li>
					</ul>
				</div>

				<div className="job">
					<div className="info">
						<div className="company">
							Razorfish
						</div>
						<div className="position">
							<div className="role">Contract (direct)</div>
							<div className="title">Senior Presentation Layer Engineer </div>
							<div className="dates">October 2014 ~ June 2015</div>
						</div>
					</div>

					<ul>
						<li>Added chromeless hotspot functionality to Youtube player in advertisement (JavaScript, CSS, HTML)</li>
						<li>Updated advertisement with new desktop/mobile layout and animated banner content (JavaScript, HTML5, CSS3, Responsive Design, Media Queries)</li>
						<li>Updated advertisement with new desktop/mobile section including new animation and behaviors
							(JavaScript, jQuery, Greensock, Handlebars, HTML5, CSS3 (Responsive Design, Media Queries), SASS, Git, Grunt, Node.js)</li>
						<li>Updated advertisement site with new section including new animation and behaviors, both desktop/mobile, adding tracking, pushing site live
							(Compass, JavaScript, jQuery, Greensock, Handlebars, HTML5, CSS3 (Responsive Design, Media Queries))</li>
					</ul>
				</div>

				<div className="job">
					<div className="info">
						<div className="company">
							Vircon
						</div>
						<div className="position">
							<div className="role">Harlo Interactive (contract)</div>
							<div className="title">Web Developer</div>
							<div className="dates">July 2014 - August 2014</div>
						</div>
					</div>

					<ul>
						<li>Updated Malarkey Roofing commercial website
							to complex responsive design.
							(JavaScript, jQuery, HTML5, CSS3 (Responsive Design, Media Queries), SASS, Gulp, Git, Node.js, Laravel templating)</li>
						<li>Including responsive integration of news carousel</li>
						<li>Development of "shingle selector" responsive application</li>
					</ul>

					<div className="info">
						<div className="position">
							<div className="role">PCD Group (contract)</div>
							<div className="title">Software Engineer</div>
							<div className="dates">August 2013 - July 2014</div>
						</div>
					</div>

					<ul>
						<li>Responsible for updating content and adding features to security-focused websites.
						(JavaScript, jQuery, HTML5, CSS3 (Responsive Design, Media Queries), Perl, Mojolicious, Template Toolkit, SASS, SQL,
						CoffeeScript, SVN)</li>

						<li>Major re-build  of content management system.
						(Frontend.  Using JavaScript, jQuery, HTML5, CSS3 – Responsive, Photoshop, Perl, Mojolicious, Template Toolkit,
						SASS, SQL, Handlebars, SVN)</li>
					</ul>
				</div>

				<div className="job">
					<div className="info">
						<div className="company">
							Yesmail
						</div>
						<div className="position">
							<div className="title">Web Developer</div>
							<div className="dates">April 2013 - August 2013</div><br />
							<div className="title">Contractor via Teksystems</div>
							<div className="dates">September 2012 - January 2013</div>
						</div>
						<div className="address">
							309 SW Sixth Avenue, Suite 700<br />
							Portland, OR  97204
						</div>
					</div>

					<ul>
						<li>Created and modified e-mail messages in a high-pressure,
						fast-paced environment using custom server side coding and HTML
						coded with very rigorous compliance standards. (JavaScript, HTML5, CSS3 – Responsive, Photoshop)</li>
						<li>Developed process improvement tools (JavaScript, jQuery, HTML5, CSS3)</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Floating Dock Comics
						</div>
						<div className="position">
							<div className="title">Direct contract</div>
							<div className="dates">2012</div>
						</div>
						<div className="desc hidden">
							Additional short term contract work, involving SCORM, PHP, JavaScript, jQuery, HTML, CSS, etc.
						</div>
					</div>

					<ul>
						<li>Developed online media reader, using jQuery/JavaScript with object oriented JavaScript, and AJAX-based DOM insertion (using JSON).</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Sparta eBusiness
						</div>
						<div className="position">
							<div className="title">Contractor</div>
							<div className="dates">Spring 2012</div>
						</div>
						<div className="address">
							10300 SW Greenburg Rd, Suite 180<br />
							Portland, OR 97223
						</div>
					</div>

					<ul>
						<li>Developed interactions for update to major charity website (JavaScript, jQuery, mobile)</li>
						<li>jQuery front-end work, including form validation, custom jQuery plugin managing infinite slider/scroller (with mobile controls), YouTube video management.</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Clarity Innovations
						</div>
						<div className="position">
							<div className="title">Contractor</div>
							<div className="dates">February 2011 - September 2011</div>
						</div>
						<div className="address">
							1001 SE Water Avenue, Suite 250<br />
							Portland, OR 97214
						</div>
					</div>

					<ul>
						<li>Developed new courseware interactions and abstracted infrastructure (Drupal, HTML, CSS, JavaScript, PHP, VNC/RDP, and jQuery)</li>
						<li>Created "caricature" model to allow users to select and save a customized avatar (JavaScript, jQuery, Drupal)</li>
						<li>Modified desktop application with C#, .Net</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Capstone Technology
						</div>
						<div className="position">
							<div className="title">Programmer Analyst</div>
							<div className="dates">January 2010 - September 2010</div>
						</div>
						<div className="address">
							416 Northeast Dallas Street<br />
							Camas, WA 98607-2153
						</div>
					</div>

					<ul>
						<li>Working with team to develop new version of Learning Management software, using HTML, CSS, C#, ASP.NET, JavaScript, Telerik, and jQuery libraries.</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							OCP
						</div>
						<div className="position">
							<div className="title">Contractor via Teksystems</div>
							<div className="dates">June 2008 - Nov 2008</div>
						</div>
						<div className="address">
							5536 Hassalo<br />
							Portland, OR 97213
						</div>
					</div>

					<ul>
						<li>Re-engineering sites using Drupal (OOP PHP5), HTML, CSS, JavaScript, jQuery, AJAX,
						JSON, and MySQL</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Via Training, LLC
						</div>
						<div className="position">
							<div className="title">Senior Software Engineer</div>
							<div className="dates">April 2006 - Dec 2007</div><br />
							<div className="title">Software Engineer</div>
							<div className="dates">July 2003 - April 2006</div>
						</div>
						<div className="address">
							1620 SW Taylor<br />
							Portland, OR 97205
						</div>
					</div>

					<ul>
						<li>Developed complex Flash to Docent Outliner
						for Harley-Davidson Sportster course, others
						(Docent Outliner, HTML, JavaScript)</li>
						<li>Converted courses to AICC, SCORM and Docent Outliner
						for Motorola phones (Docent Outliner, JavaScript)</li>
						<li>Developed secure tool for viewing customer sales data
						for Hewlett-Packard, stored in database, to be sent
						daily through e-mail, also built admin and support tools.
						(PHP, MySQL, Perl, VNC/RDP)</li>
						<li>Development of Docent LMS customization for proposal
						(Docent JavaScript)</li>
						<li>Technical consultation on proposals</li>
						<li>Documentation on internal standards, including migration
						to SCORM</li>
						<li>Primary support for Plone-based intranet</li>
						<li>Updated and debugged Microsoft sales content (Visual Studio)</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							CoreMedia Training Solutions
						</div>
						<div className="position">
							<div className="title">Software Engineer</div>
							<div className="dates">November 2001 - July 2003</div>
						</div>
					</div>

					<ul>
						<li>Created web based training SCORM courses
						(ASP, HTML, CSS, JavaScript/DHTML, SQL Server)</li>
						<li>Helped write administrative and e-mail application (PHP Fusebox)</li>
						<li>Expert SCORM panelist at ASTD Cascadia e-Learning Standards presentation</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Oracle
						</div>
						<div className="position">
							<div className="title">Senior Consultant</div>
							<div className="dates">July 2000 - January 2001</div>
						</div>
					</div>

					<ul>
						<li>Designed UI and documentated template interface for
						Oracle's Content Platform Accelerator (HTML, CSS, JSP,
						Oracle DB, Tomcat)</li>
						<li>Created a series of web page demos for Oracle's Customer
						Loyalty program (JavaScript)</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							CMD
						</div>
						<div className="position">
							<div className="title">Senior Consultant</div>
							<div className="dates">July 2000 - January 2001</div>
						</div>
					</div>

					<ul>
						<li>Created two new versions of 
						Creative Media corporate website 
						(Cold Fusion, SQL Server, HTML, DHTML/JavaScript, CSS)</li>
						<li>Technical director for a product launch for Parke-Davis
						involving live broadcast to a total of 5,000 participants (Cold
						Fusion, HTML, JavaScript, SQL Server, RealServer,
						Netpodium)</li>
						<li>Recreated Paxton/Patterson website, et al 
						(Cold Fusion, HTML, JavaScript)</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Ledge Multimedia
						</div>
						<div className="position">
							<div className="title">Senior Webmaster</div>
							<div className="dates">February 1997 - November 1998</div>
						</div>
					</div>

					<ul>
						<li>Created US Olympic Committee and
						IHS websites (HTML, JavaScript,
						Blitz, Oracle DB)</li>
						<li>Reworked MusicMatch
						website (HTML, Perl, Bash shell scripting)</li>
						<li>Supervised other webmasters in creation of websites for
						clients as company shifted to work for hire model.</li>
						<li>Designed and supervised creation of Intranet. (HTML,
						Photoshop)</li>
					</ul>
				</div>

				<div className="job extended">
					<div className="info">
						<div className="company">
							Creative Multimedia
						</div>
						<div className="position">
							<div className="title">Graphics Production, Webmaster</div>
							<div className="dates">December 1995 - February 1997</div>
						</div>
					</div>

					<ul>
						<li>Coordinated development, coded HTML, and defined CGI
						interaction for Health and Movie franchise
						web sites for Creative Multimedia, (corporate site and
						intranet), including clients and partners, notably the award
						winning Dr. Ruth Online,
						The Family Doctor,
						The Health Explorer, and
						MovieMatch. (HTML, JavaScript, Perl, bash shell scripting)</li>
						<li>Introduced and explained the Internet and web development
						method to team and company.</li>
						<li>Contributing member of UI and database committees.  Chaired
						Online group meetings.</li>
						<li>Helped develop Blitz, an extensible, template based tool
						which allowed webmasters to quickly write CGI incorporating
						HTML design</li>
						<li>Spoke at the Oregon Multimedia Education Group Conference,
						1997</li>
						<li>Guest speaker at PSU web development classes, 1997</li>
						<li>Managed Macintosh hardware and scanning room.</li>
					</ul>
				</div>
			</section>

			<section id="note">
				<h2>Previous Experience Upon Request – including Oracle, CMD, and Via Training. </h2>
			</section>

			<section id="personal">
				<h2>Other Projects</h2>

				<div className="job">
					<div className="info">
						<div className="company">
							Portland Go Club
						</div>
					</div>
					<ul>
						<li>
							Designed and created (and hosted) 
							{' '}
							<a href="https://oregongo.org/" target="_blank" rel="noopener noreferrer">oregongo.org</a> for
							local Go community (Angular, Bootstrap, HTML, CSS, PHP)
						</li>
					</ul>
				</div>
			</section>

			<section id="education">
				<h2>Education</h2>

				<ul>
					<strong className="mobile-block">Hampshire College</strong> {' '}
					1989-1991
					
					<p>Concentration in Computer Communications</p>
				</ul>
			</section>

		</div>
	</div>

  </Layout>
)

export default Resume
