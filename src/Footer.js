import React from 'react';
import './Footer.css';
import logo from './image2.jpg';
import exampleimage42 from './image42.jpg';
import exampleimage43 from './image43.jpg';

function Footer () {
  return (
    <footer className="footer">
      <div style={{display:'flex', flexDirection:'row', rowGap:'100px' }}>
      <div className="footer-content">
      <div style={{margin:'50px', marginLeft:'200px'}}>
      <img src={logo} alt="UnStop Logo" className="footer-logo"/>
        <p style={{marginBottom:'1px'}}>Built with love in India for the world</p>
        <p style={{marginTop:'5px', opacity: 0.5}}>...................................................................................................................</p>
        <h2 style={{marginBottom:'12px'}}>Stay Connected</h2>
        <p style={{marginTop:'12px'}} ><b>Sales Enquiries</b></p>
        <p>sales@unstop.com</p>
        <p>+91-9311777388 (Mon to Fri,9 AM to 6 PM)</p> 
        <p><b>Support Inquiries</b></p> 
        <p>support@unstop.com</p>
        <div style={{ display: 'flex', flexDirection: 'row'}}> 
       
        </div>
        <p style={{marginTop:'5px', opacity: 0.5}}>...................................................................................................................</p>
        <h2>Stay Updated</h2>
        <p style={{marginBottom:'1px', marginTop:'1px'}}><b>We'll send you Update on the latest</b></p>
        <p style={{marginBottom:'1px', marginTop:'1px'}}><b>opportunities to showcase your talent and get</b></p>
        <p style={{marginBottom:'1px', marginTop:'1px'}}><b>hired and rewarded regularly.</b></p>
        <button style={{textAlign: 'left', borderRadius:'10px', marginTop:'20px', width:'400px', height:'50px', fontSize:'15px'}}>Sign up for our newsletter</button>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <button style={{textAlign: 'Center',  borderRadius:'10px', marginTop:'20px', width:'185px', height:'50px', fontSize:'15px', marginRight:'30px', backgroundColor:'#333', color:'#ffffff'}}>Share Your Store Now</button>
          <button style={{textAlign: 'Center',  borderRadius:'10px', marginTop:'20px', width:'185px', height:'50px', fontSize:'15px', backgroundColor:'#333', color:'#ffffff',marginBottom:'10px'}}>Publish Opportunity</button>
        </div>
        <p style={{marginTop:'5px', opacity: 0.5}}>...................................................................................................................</p>
        <h2 >Download Unstop App</h2>
        <div style={{display:'flex', flexdirection:'row'}}>
        <img src={exampleimage42} alt="Example" style={{ width: '150px', height: '50px', marginRight:'50px'}} />
        <img src={exampleimage43} alt="Example" style={{ width: '150px', height: '50px', marginBottom:'10px'}} />
        </div>
        <p style={{marginTop:'5px', opacity: 0.5}}>...................................................................................................................</p>
        <p style={{marginBottom:'3px'}}><b>Best Veiwed in Latest Version of Edge, Mozilla,</b></p>
        <p style={{marginTop:'3px'}}><b>Chrome, Opera & Safari.V: 1.27.2025.16.19</b></p>
        <p style={{marginTop:'35px'}}><b>Copyright &copy; 2025 FLIVE Consulting Pvt Ltd - All right reserved.</b></p>
       </div>
       </div>
   <div style={{backgroundColor:'#333'}}>
    <div style={{display:'flex', flexdirection:'row'}}>
       <div style={{backgroundColor:'#333'}}>
        <div style={{ margin:'50px', marginRight:'50px'}}>
        <h2>Our Solutions</h2>
        <p style={{ opacity: 0.7 }}>Hiring</p>
        <p style={{ opacity: 0.7 }}>Engagement</p>
        <p style={{ opacity: 0.7 }}>Assessment</p>
        </div>
        <div style={{ margin:'50px'}}>
        <h2>Our Products</h2>
        <p style={{ opacity: 0.7 }}>Proctoring</p>
        <p style={{ opacity: 0.7 }}>Coding Interview Platform</p>
        </div>
        <div style={{ margin:'50px'}}>
        <h2>Mentorship</h2>
        <p style={{ opacity: 0.7 }}>Be a Mentor</p>
        <p style={{ opacity: 0.7 }}>Explore Mentor</p>
        <p style={{ opacity: 0.7 }}>Mentorship FAQs</p>
        <p style={{ opacity: 0.7 }}>mentorship Blogs</p>
        </div>
       </div>
       <div style={{backgroundColor:'#333'}}>
       <div style={{ margin:'50px', marginRight:'50px'}}>
        <h2>Participate</h2>
        <p style={{ opacity: 0.7 }}>Competitions & Challenges</p>
        <p style={{ opacity: 0.7 }}>Assessment</p>
        <p style={{ opacity: 0.7 }}>Hackathon</p>
        <p style={{ opacity: 0.7 }}>Workshops & Webinars</p>
        <p style={{ opacity: 0.7 }}>Conference</p>
        <p style={{ opacity: 0.7 }}>Cultural Events</p>
        <p style={{ opacity: 0.7 }}>College Festivals</p>
        </div>
        <div style={{ margin:'50px'}}>
        <h2>Apply</h2>
        <p style={{ opacity: 0.7 }}>Internships</p>
        <p style={{ opacity: 0.7 }}>Jobs</p>
        <p style={{ opacity: 0.7 }}>Scholorships</p>
        </div>
        </div> 
        
        <div style={{backgroundColor:'#333'}}>
        <div style={{ margin:'50px', marginRight:'300px'}}>
        <h2>Learn</h2>
        <p style={{ opacity: 0.7 }}>Courses</p>
        <p style={{ opacity: 0.7 }}>Articles</p>
        <p style={{ opacity: 0.7 }}>Workshops</p>
        </div>
        <div style={{ margin:'50px' }}>
        <h2>practice</h2>
        <p style={{ opacity: 0.7 }}>5 Days Interview prep</p>
        <p style={{ opacity: 0.7,  marginBottom:'1px'}}>Code & Ace Hiring</p>
        <p style={{ opacity: 0.7, marginTop:'1px' }}>Assessment</p>
        <p style={{ opacity: 0.7 ,  marginBottom:'1px'}}>100-Days of Coding</p>
        <p style={{ opacity: 0.7 , marginTop:'1px'}}> Sprint</p>
        </div>
        </div>
      
    </div>
     
    <div style={{display:'flex', flexDirection:'row'}}>
       <div  style={{backgroundColor:'#333', margin:'50px', marginRight:'50px'}}>
         <h2>Learn</h2>
          <p style={{ opacity: 0.7 }}>Unstop Talent Awards 2025</p>
          <p style={{ opacity: 0.7 }}>Unstop Talent Meet 2025</p>
          <p style={{ opacity: 0.7 }}>Unstop Talent Report 2024 </p>
          <p style={{ opacity: 0.7 }}>Education Loan EMI Calculator</p>
          <p style={{ opacity: 0.7 }}>Unstop Igniters Club</p>
          <p style={{ opacity: 0.7 }}>Online Quizzing Festival</p>
       </div>

       <div  style={{backgroundColor:'#333', margin:'50px'}}>
         <p style={{ opacity: 0.7 , gap:'20px'}}>About Us  |  Contact Us  |  Careeres <button  style={{backgroundColor:'#52fa52', borderRadius:'50px'}}>We're hiring</button></p>
         <p style={{ opacity: 0.7 }}>Life at Unstop | Clientele | Partner With Us</p>
         <p style={{ opacity: 0.7 }}>Partners | FAQs | Branding Guidelines</p>
         <p style={{ opacity: 0.7 }}>Testimonials | Unstop Rewards Program</p>
         <p style={{ opacity: 0.7 }}>Unstop on Shark Tank | Case Studies | Refer & Earn</p>
         <p style={{ opacity: 0.7 }}>Unstop Cmapus Ambassador Program</p>
         <p style={{ opacity: 0.7 }}>Terma & Conditions | Privacy Policy | Sitemap</p>
         <p style={{ opacity: 0.7 }}>Request a Feature</p>
       </div>
    </div>
   </div>
       </div>
     </footer>
  );
}



export default Footer;
