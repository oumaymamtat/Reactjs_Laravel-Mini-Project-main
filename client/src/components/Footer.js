import React from 'react';
export default function Footer() {
return (
<div>
 <hr className="footer"/>
 <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-lg-5 ">
          <h3>IT course</h3>
          <p>IT course operates an e-Learning website that offers courses and certifications focused on
            university-level courses via its online platform. The company  has a model of partnering with 
            universities and professors.
          </p>
        </div>
         <div className="col-md-1 col-lg-1"></div>
         <div className="col-md-6 col-lg-6">
           <h3 >Contact us</h3>
           <div className="row contact">
              <div className="col-md-8 col-lg-8" >
               <ul>
                <li><span className="icon ion-android-pin" /><span className="text">Faculty Of Sciences, Monastir, Tunisia</span></li>
                <li><span className="icon ion-ios-telephone" /><span className="text">+216 73 154 210</span></li>
                <li><span className="icon ion-android-mail" /><span className="text">fsm@u-monastir.tn</span></li>
              </ul>
              </div>
             <div className="col-md-4 col-lg-4">
             <ul>
              <li><a href="https://fr-fr.facebook.com/FSMonastir.tn/" target='_blank' rel="noopener noreferrer"  className="fa fa-facebook p-2 fa-lg">&nbsp;</a><span className="text">Facebook</span></li>
              <li><a href="https://twitter.com/?lang=fr" target='_blank' rel="noopener noreferrer" className="fa fa-twitter p-2 fa-lg">&nbsp;</a><span className="text">Twitter</span></li>
              <li><a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer" className="fa fa-linkedin p-2 fa-lg">&nbsp;</a><span className="text">Linkedin</span></li>
             </ul>
             </div>
          </div>  
        </div>
      </div>
    </div>
 </footer>   
</div>
)
}