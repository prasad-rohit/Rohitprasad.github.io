import {Link} from "react-router-dom";

function Home(){
    return (
        <div>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Rohit Prasad</title>
            <link rel="icon" href="https://img.icons8.com/bubbles/50/000000/r.png" type="image/x-icon"/>
            <div className="bg"/>
            <header>
                {/* <div class="mobile_nav"><lottie-player src="https://assets3.lottiefiles.com/packages/lf20_g41pgt4j.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop></lottie-player></div> */}
                <div className="nav">
                    <ul>
                        {/*<li><a href="#skills">skills</a></li>*/}
                        {/*<li><a href="#work">work</a></li>*/}
                        {/*<li><a href="#coding-profiles">profiles</a></li>*/}
                        {/*<li><a href="#contact">contact</a></li>*/}
                        <li><Link to={"/blog"}>Blog</Link></li>
                    </ul>
                </div>
            </header>
            <main id="t" className="scroll" data-scroll-content>
                <div className="top">
                    <div className="intro">
                        <h1>Hello<span>.</span></h1>
                        <h1>I am</h1>
                        <h1 style={{fontSize: '1.4em'}} className="me">Rohit Prasad</h1>
                    </div>
                    <div className="skill">
                        <img src="https://img.icons8.com/wired/200/000000/down-right-arrow.png"
                             style={{filter: 'invert(100%)'}} alt="Down arrow"/>
                        <ul>
                            <li>Web Developer</li>
                            <li>UI/UX Designer</li>
                            <li>Freelancer</li>
                        </ul>
                    </div>
                </div>
                <div className="circle">
                    <div className="today">🧑‍💻</div>
                    <div className="availability">
                        <svg className="half-circle" width="403px" height="403px" viewBox="0 0 403 403" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="btn-circle-wrap" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g id="btn-circle-wrapper" transform="translate(-237.000000, -465.000000)">
                                    <g id="btn-circle" transform="translate(166.000000, 466.000000)">
                                        <path
                                            d="M272.5,401 C383.233092,401 473,311.233092 473,200.5 C473,89.7669077 383.233092,0 272.5,0 C161.766908,0 72,89.7669077 72,200.5"
                                            id="Shape" stroke="#FFFFFF" opacity="0.331542969"
                                            transform="translate(272.500000, 200.500000) scale(-1, -1) translate(-272.500000, -200.500000) "
                                            strokeDasharray="944.9669189453125" style={{strokeDashoffset: '0px'}}/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="status">AVAILABLE FOR WORK</div>
                </div>
                <div className="details">
                    <p className="about">
                        I am a Full Stack Developer &amp; designer based in India. I have worked
                        on various front end as well as full stack projects mostly using
                        express on backend. I am interested and open to work on some interesting projects
                        I am also interested in Graphic Designing and cybersecurity.
                    </p>
                    {/* <button class="contact"><p>Contact</p></button> */}
                </div>
                <div className="skills" id="skills">
                    <h1 className="skill-head" id="skills">Things I'm good at <span>:</span></h1>
                    <div className="skill-section">
                        <div className="one">
                            <img src="https://img.icons8.com/color/240/000000/code.png" alt="Code"/>
                            <h2>Languages</h2>
                            <h5>Javascript</h5>
                            <h5>Python</h5>
                            <h5>Java</h5>
                        </div>
                        <div className="two">
                            <img src="https://img.icons8.com/color/240/000000/media-queries.png" alt="Media queries"/>
                            <h2>Frontend Dev</h2>
                            <h5>React</h5>
                            <h5>Next.js</h5>
                            <h5>CSS</h5>
                            <h5>Responsive Design</h5>
                        </div>
                        <div className="three">
                            <img src="https://img.icons8.com/color/240/000000/backend-development.png" alt="Code"/>
                            <h2>Backend Dev</h2>
                            <h5>Node.js</h5>
                            <h5>MySQL</h5>
                            <h5>MongoDB</h5>
                        </div>
                        <div className="four">
                            <img src="https://img.icons8.com/color/240/000000/docker-container" alt="Circle"/>
                            <h2>Tools</h2>
                            <h5>Docker</h5>
                            <h5>Git</h5>
                            <h5>Apache Kafka</h5>
                            <h5>Redis</h5>
                            {/* <h5>After effects</h5> */}
                        </div>
                    </div>
                </div>
                <div className="work">
                    <h2 className="work-title" id="work">My Works :</h2>
                    <div className="my-work">
                        <div className="first">
                            <a href="https://rohitprasadblog.netlify.app/"><img className="first-work"
                                                                                src="/img/work-one.png"
                                                                                alt="Blog Website"/></a>
                            <h4 className="work-name">Blog Website</h4>
                            <p className="work-desc">A single page blog website</p>
                        </div>
                        <div className="second">
                            <img className="second-work" src="/img/work-two.jpg" alt="Marketing Agency Website"/>
                            <h4 className="work-name">Marketing Agency Website</h4>
                            <p className="work-desc">A marketing site build using HTML,CSS &amp; JS</p>
                        </div>
                    </div>
                </div>
                <div id="coding-profiles">
                    <h2 className="coding-profiles">Coding Profiles : </h2>
                    <div className="profiles">
                        <div className="leetcode code">
                            <img src={"/img/leetcode.png"} alt={"Leetcode"}/>
                            <a href="https://leetcode.com/prasad_rohit/">Leetcode</a>
                        </div>
                        <div className="codechef code">
                            <img src="/img/codechef.png" alt="CodeChef"/>
                            <a href="https://www.codechef.com/users/rohitpd_96">CodeChef</a>
                        </div>
                        <div className="githubs code">
                            <img src="/img/github.jpg" alt="Github"/>
                            <a href="https://github.com/prasad-rohit">Github</a>
                        </div>
                        <div className="hackerrank code">
                            <img src="/img/hackerrank.png" alt="Leetcode"/>
                            <a href="https://www.hackerrank.com/rpchauhan4444">Hackerrank</a>
                        </div>
                    </div>
                </div>
                <div className="contact-me" id="contact">
                    <h2>
                        I'm always<br/>
                        interested<br/>
                        about cool<br/>
                        stuff.<br/>
                        Are you<br/>
                        minding a<br/>
                        project?<br/>
                    </h2>
                    <a href="rpchauhan4444@gmail.com"><h2 className="email">Let's talk.</h2></a>
                </div>
            </main>
            <footer>
                <div className="socials">
                    <h4 className="github"><a href="https://www.linkedin.com/in/rohitprasadchauhan/">Linkedin</a></h4>
                    <h4 className="mail"><a href="mailto:rpchauhan4444@gmail.com"> Email </a></h4>
                    <h4 className="tweet"><a href="https://twitter.com/Rohitpr33405270">Twitter</a></h4>
                    <h4 className="insta"><a href="https://www.instagram.com/rohitpr301/">Instagram</a></h4>
                </div>
            </footer>
        </div>
    )
}

export default Home
