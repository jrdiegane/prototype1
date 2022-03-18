import Contacts from "../contacts/Contacts";
import { Link, Routes , Route} from "react-router-dom";
import About from "../about/About";
import Choice from "../choice/Choice";
import Get from "../get/Get";
import How from "../how/How";
import Latest from "../latest/Latest";
import MyPackages from "../mypackage/MyPackages";
import MyServices from "../myservices/MyServices";
import MyTeam from "../myteam/MyTeam";
import Slide from "../slide/Slide";

import  "./navbar.css"
         export default function Navbar() {
             return (
                 <div className="top">
                     <div className="topLeft">
                         <h2>Nora Hovard</h2>
                         </div>
                         
                     <div className="topCenter">
                         <ul className="topList">
                             <li className="topListItem">
                                 <Link to="/About">About</Link>
                             </li>
                             <li className="topListItem">
                                 <Link to="/MyPackages">Portfolio</Link>
                                 </li>
                             <li className="topListItem">
                                 <Link to="/Pricing">Pricing</Link>
                                 </li>
                             <li className="topListItem">
                                 <Link to="/Reviews">Reviews</Link>
                                 </li>
                             <li className="topListItem">
                                 <Link to="/Latest">Press</Link>
                                 </li>
                             <li className="topListItem">
                                 <Link to="/Blog">Blog</Link>
                                 </li>
                             <li className="topListItem">
                                 <Link to="/Contacts">Contacts</Link>
                                 </li>
                             </ul>
                         </div>
                         
                     <div className="topRight">
                         <i class="fab fa-facebook-square"></i>
                         <i class="fab fa-twitter-square"></i>
                         <i class="fab fa-pinterest-square"></i>
                         <i class="fab fa-instagram-square"></i>
                         </div>
                         <div className="milieu">
                 <h1>Want to have incredible<br></br>
                    life memories?</h1>
                    <button type="submit">Request a Quote</button>
         </div>
         <Routes>
             <Route path="/about" element={<MyPackages />}></Route>
             <Route path="/Portfolio" element={<MyServices />}></Route>
             <Route path="/Pricing" element={<Choice />}></Route>
             <Route path="/Reviews" element={<MyTeam />}></Route>
             <Route path="/Press" element={<Get />}></Route>
             <Route path="/Blog" element={<How />}></Route>
             <Route path="/Contacts" element={<Contacts />}></Route>
             
         </Routes>
                     </div>
                     
                     )
             }