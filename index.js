import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <div className="name">
        <h2>ILANGOVAN CHOCKALINGAM</h2>
    </div>
    <br />
    <table cellSpacing="25px" className="myself">
        <tr>
            <td className="profile" width="50%" align="center">
                <img src="image/profile.jpg" alt="profile photo" style="width: 100%;" />
            </td>
            <td with="50%" style="padding:5px;">
                <div>
                    <h3>
                        Hi Guys!
                    </h3>
                    <div>
                        <div>
                            Welcome to my portfolio!!!,I have been working as a structural engineer since 2018 to till date.
                        </div>
                        <div>
                            I love travel,Am always prefer to travel somewhere to know and learn cultures around me.
                        </div>
                        <div>
                            Am cricketer,Batting allrounder.I have been played for my district since 2013 to till date and lead a side as a 
                        vice captain couple of years.
                        Also i played for my college 4 years and lead as a captain twice a time for jornal level tournamnets and won a 2016 tournament.
                        And i attend and represents my district for TNPL selection on the year of 2017.
                        </div>
                        <div>
                            I have choosen structural field as my first step for my carrier,Initailly am started my carrier as a BIM software trainer at trichy from 2018 to 2019.Presently am working 
                        as a Junior Structural Engineer in DGS Technical Services PVT LTD.,Bangalore.
                        Now am looking forward of myself and am learing Fullstack Developing in Crampte Chennai.
                        </div>
                        <br />
                        <table border="0px" width="100%">
                            <tr>
                                <td width="50%">
                                    Name
                                </td>
                                <td width="50%">
                                    Ilangovan Chockalingam
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Experience
                                </td>
                                <td>
                                    4 Years
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Country
                                </td>
                                <td>
                                    India
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Location
                                </td>
                                <td>
                                    Bangalore
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    E-Mail
                                </td>
                                <td>
                                    ilangovanchockalingam1996@gamil.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone
                                </td>
                                <td>
                                    +91-9788477253
                                </td>
                            </tr>
                        </table>
                        <br />
                        <br />
                        <table width="100%" align="center">
                            <tr align="center">
                                <td>
                                    <input type="button" value="Download Resume" />
                                </td>
                                <td>
                                    <input type="button" value="Contact Me" />
                                </td>
                            </tr>
                        </table>  
                    </div>
                </div>
            </td>
        </tr>
    </table>
    <br />
    <br />
    <div className="whatido">
        <h2>
           What I Do
        </h2> 
        <table width="100%" style="border-style: solid; border-color: black; background-color: white; border-radius: 5px;" border="2px">
            <tr>
                <td width="33%">
                    <strong>Structural Engineer</strong>
                </td>
                <td width="33%">
                    <strong>BIM Software Trainer</strong>
                </td>
                <td width="33%">
                    <strong>cricketer</strong>
                </td>
            </tr>
            <tr>
            <td >
                Tekla v21.0 v21.1 2017 to 2019i<br />
                Cadd v2008 to 2015<br />
                Rivet v 1.0
            </td>
            <td>
                    Tekla<br />
                    Cadd<br />
                    Rivet<br />
                    SP3d<br />
                    3D max<br />
                    Sketes<br />
            </td>
            <td>
                PDKT district player<br />
                Trichy eagle club player<br />
                SEC college captain
            </td>
        </tr>
    </table>    
    </div>
    <br />
    <table width="100%" cellSpacing="10px">
        <tr>
            <td className="edu" align="left">
               <h2>Education</h2>
            </td>
            <td className="edu" align="left">
                <h2>Experience</h2>
            </td>
        </tr>
        <tr>
            <td className="edu">
                B.E<br />
                YEAR<br />
                Description goes here...
            </td>
            <td className="edu">
                Project 1<br />
                DATE<br />
                Description goes here...
            </td>
        </tr>
        <tr>
            <td className="edu">
                12<br />
                YEAR<br />
                Description goes here...
            </td>
            <td className="edu"> 
                Project 2<br />
                DATE<br />
                Description goes here...
            </td>
        </tr>
        <tr>
            <td className="edu">
                10th<br />
                YEAR<br />
                Description goes here...
            </td>
            <td className="edu">
                Project 3<br />
                DATE<br />
                Description goes here...
            </td>
        </tr>
    </table>
    <br />
    <div className="works">
        <h2>
            Works
        </h2>
    <table width="100%" align="center">
        <tr>
            <td width="33%" align="center" className="image">
                <img src="image/image-01.jpg" alt="image-01" style="width: 100%;" />
            </td>
            <td width="33%" align="center" className="image">
                <img src="image/image-02.jpg" alt="image-02" style="width: 100%;" />
            </td>
            <td width="33%" align="center" className="image">
                <img src="image/image-03.jpg" alt="image-03" style="width: 100%;" />
            </td>
        </tr>
        <tr>
            <td className="image">
                <img src="image/image-04.jpg" alt="image-04" style="width: 100%;" />
            </td>
            <td className="image">
                <img src="image/image-05.jpg" alt="image-05" style="width: 100%;" />
            </td>
            <td className="image">
                <img src="image/image-06.jpg" alt="image-06" style="width: 100%;" />
            </td>
        </tr>
    </table>
    </div>
    <div className="footer">
        <div align="center">
            <i className="fa-brands fa-facebook"></i> 
            <i className="fa-brands fa-github"></i> 
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
        </div>
        <div align="center">
            Copyright&#169;2022.AllRightReserved
        </div>
    </div>
  <div/>
  < />
)
