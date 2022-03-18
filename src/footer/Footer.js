import React from 'react';
import  "./footer.css";
function Footer() {
    return (
 <div className="main-footer">
     <div className="container">
         <div className="row">
             <div className="col-md-3 col-sm-6">
              <h4>Nora Havard</h4>
              <ul className="list-unstyled">
<li>Téléphone : +1 (234) 567 89 00</li>
<li>Viber : +1 (234) 567 89 10</li>

                 <li>Skype : norahovard</li>
                 <li>Courriel : nora@a.draftium.com

</li> 
                  </ul>   
             </div>
             <div className="col-md-2 col-sm-6">
             <ul className="list-unstyled">
<li>Sur</li>
<li>Tarification</li>

                 <li>presse</li>
                 <li>Contacts</li>

                  </ul>   
             </div>
             <div className="col-md-2 col-sm-6">
             <ul className="list-unstyled">
<li>Portefeuille</li>
<li>Commentaires</li>

                 <li>Blog</li>
                 
 
                  </ul>   
             </div>
             <div className="col-md-2 col-sm-6">
             <ul className="list-unstyled">
<p>Suivez moi</p>
<i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-pinterest-square"></i>
                <i class="fab fa-instagram-square"></i>

                 
                 
 
                  </ul>   
             </div>
             <div className="col-md-3 col-sm-6">
             <ul className="list-unstyled">
<li>Inscrivez-vous à ma liste de diffusion<br></br> pour recevoir des offres spéciales</li>
<input type="Email" value="Email" id="Email" placeholder="Email"></input>
<button type="button" class="btn btn-secondary btn-sm">Subscribe</button>
                 
 
                  </ul>   
             </div>
         </div>
         <div className="footer-bottom">
            <p className="text-xs-center">
            Réalisé avec <a href="https://draftium.com/">Draftium ©</a>

                </p> 
                <p class="text-end">Tous les droits sont réservés.
                </p>
  
             
             </div>
     </div>
 </div>
    );
    

    
}
export default Footer;