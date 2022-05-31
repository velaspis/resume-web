import { useState } from "react";
import "./App.css";
function App() {
  return (
    <>
      <div className="container">
        <header id="intro">
          <img
            className="profile-pic"
            src="https://media-public.canva.com/MADQ41R96cQ/1/screen.jpg"
          />
          <h1>
            Velaguez
            <br />
            Szpiech
            <div>Grafic Designer</div>
          </h1>
        </header>
        <main>
          <div className="dark">
            <section aria-labelledby="about">
              <h2 id="about">About Me</h2>
              <p className="about-m">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </section>
            <section aria-labelledby="contact">
              <h2 id="contact">Contact Me</h2>
              <ul>
                <li>+123-456-7890</li>
                <li>hello@reallygreatsite.com</li>
                <li>www.reallygreatsite.com</li>
                <li>
                  123 Anywhere st., Any City, <br />
                  ST 12345
                </li>
              </ul>
            </section>
            <section aria-labelledby="education">
              <h2 id="education">Education</h2>
              <ul className="edu">
                <li className="ed">
                  <h3>2014-2016</h3>
                  <p>
                    Art university
                    <br />
                    23 Anywhere st., Any
                    <br />
                    City, ST 12345
                    <br />
                  </p>
                </li>
                <li className="ed">
                  <h3>2022-2021</h3>
                  <p>
                    Art university
                    <br />
                    23 Anywhere st., Any
                    <br />
                    City, ST 12345
                    <br />
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <div className="white">
            <section aria-labelledby="work-exp">
              <h2 id="work-exp">Work Experience</h2>
              <p>
                Salford & co. | 2019-2020
                <br />
                Senior Designer
              </p>
              <ul>
                <li>made more than 1000 Logo designs with big companies</li>
                <li>complete a lot of complicated work</li>
              </ul>
              <p>
                Salford & co. | 2021-2022
                <br />
                Senior Designer
              </p>
              <ul>
                <li>made more than 1000 Logo designs with big companies</li>
                <li>complete a lot of complicated work</li>
                <li>
                  made more than 1000 Logo designs with big companies,complete a
                  lot of complicated work
                </li>
              </ul>
            </section>
            <section aria-labelledby="expertise">
              <h2 id="expertise"> Expertise Skill</h2>
              <ul>
                <li>
                  Adobe Photoshop{" "}
                  <span style={{ "--percentage": "90%" }}></span>
                </li>
                <li>
                  Creativity <span style={{ "--percentage": "60%" }}></span>
                </li>
                <li>
                  Adobe ill <span style={{ "--percentage": "80%" }}></span>
                </li>
                <li>
                  After effects <span style={{ "--percentage": "50%" }}></span>
                </li>
                <li>
                  Adobe indecision{" "}
                  <span style={{ "--percentage": "50%" }}></span>
                </li>
              </ul>
            </section>
            <section aria-labelledby="lang">
              <h2 id="lang"> Language Skill</h2>
              <ul>
                <li>
                  eng <span style={{ "--percentage": "90%" }}></span>
                </li>
                <li>
                  chinese <span style={{ "--percentage": "20%" }}></span>
                </li>
                <li>
                  portugese <span style={{ "--percentage": "70%" }}></span>
                </li>
                <li>
                  french <span style={{ "--percentage": "50%" }}></span>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
