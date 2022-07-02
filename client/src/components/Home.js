import React from 'react';

export default function Home() {
return (
<div>
<section className="en-tete overlay" data-stellar-background-ratio="0.5">
 <div className="container">
  <div className="row align-items-center justify-content-center en-tete-inner">
    <div className="col-md-8">
     <div className="mb-5 search-bar">
         <h2 className="heading text-center">Find Online Courses That Suits You</h2>
         <form className="d-flex justify-content-around">
             <div className="textfield-search">
               <input type="text" className="form-control" placeholder="course you look for..."/>
             </div>
          <input type="submit" className="search-submit btn btn-primary" Value="Search" />  
        </form>
      </div>
    </div>
   </div>
 </div>
</section>

<section className="site-section">
 <div className="container">
  <div className="row">
   <div className="col-md-6">
    <div className="section-text">
     <div className="heading"><h2>Welcome to IT course</h2></div>
     <div className="text mt-5">
      <p>IT course is committed to increasing access to education, improving student-learning 
         outcomes, and holding constant or reducing instructional costs by 
         effectively utilizing technology in course delivery redesigns. </p>
     </div>
    </div>
   </div>
   <div className="col-md-6"><img src="images/welcome.png" alt="welcome" className="img-fluid"/></div>
  </div>
 </div>
</section>
        
<section className="site-section">
 <div className="container">
  <div className="row">
   <div className="col-lg-6"><img src="images/about.jpg" alt="about" className="img-fluid"/></div>
   <div className="col-lg-5 ml-auto">
    <div className="section-text">
     <div className="heading"><h2>About IT course</h2></div>
     <div className="text mt-5">
      <p>IT course fosters the pedagogic integration of technology into the design of teaching and learning
      processes through collaborative efforts with faculty and other instructional technology personnel.</p>
     </div>
    </div>
   </div>
  </div>
 </div>
</section>
</div>
)
}