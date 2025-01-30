import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import './App.css';
import exampleImage from './image1.jpg';
import exampleimage from './image3.jpg';
import exampleimage4 from './image4.jpg';
import exampleimage5 from './image5.jpg';
import exampleimage6 from './image6.jpg'; 
import exampleimage7 from './image7.jpg';
import exampleimage8 from './image8.jpg';
import exampleimage9 from './image9.jpg';
import exampleimage10 from './image10.jpg';
import exampleimage11 from './image11.jpg';
import exampleimage12 from './image12.jpg';
import exampleimage13 from './image13.jpg';
import exampleimage14 from './image14.jpg';
import exampleimage15 from './image15.jpg';
import exampleimage16 from './image16.jpg';
import exampleimage17 from './image17.jpg';
import exampleimage18 from './image18.jpg';
import exampleimage19 from './image19.jpg';
import exampleimage20 from './image20.jpg'; 
import exampleimage21 from './image21.jpg';
import exampleimage22 from './image22.jpg';
import exampleimage23 from './image23.jpg';
import exampleimage24 from './image24.jpg';
import exampleimage25 from './image25.jpg';
import exampleimage26 from './image26.jpg';
import exampleimage27 from './image27.jpg';
import exampleimage28 from './image28.jpg';
import exampleimage29 from './image29.jpg';
import exampleimage30 from './image30.jpg';
import exampleimage31 from './image31.jpg';
import exampleimage32 from './image32.jpg';
import exampleimage33 from './image33.jpg';
import exampleimage34 from './image34.jpg';
import exampleimage35 from './image35.jpg';
import exampleimage36 from './image36.jpg';
import exampleimage37 from './image37.jpg';
import exampleimage38 from './image38.jpg';
import exampleimage39 from './image39.jpg';
import exampleimage40 from './image40.jpg';
import exampleimage41 from './image41.jpg';
import exampleimage44 from './image44.jpg';
import exampleimage45 from './image45.jpg';
import exampleimage46 from './image46.jpg';
import exampleimage47 from './image47.jpg';
import exampledimond from './dimond.jpg';


function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App left-align">
      <Header />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'right', paddingRight: '100px', paddingTop: '50px' }}>
        <div style={{ alignItems: 'left', paddingRight: '350px', paddingTop: '10px', paddingLeft: '250px' }}>
          <p className="large-text" style={{ marginTop: '100px', marginBottom:'10px'}}><b>Unlock Your Career!</b></p>
          <p className="small-text" style={{marginTop:'1px'}}>Explore opportunities from across the globe to grow, showcase skills, gain CV points & get hired by your dream company.</p>
           <div>
           <button style={{ backgroundColor:'#E6E6FA', borderRadius:'50px', borderColor: '#E6E6FA', display: 'flex', flexDirection: 'row'}}><img src={exampledimond} alt="Example" style={imageStyle7} /><p>Just went Unstop pro!</p></button>
           </div>
        </div>
        <img src={exampleImage} alt="Example" style={imageStyle} />
      </div>
      <div>
        <h2 style={{ marginLeft: '250px' }}>Who's Using Unstop..?</h2>
      </div>
      <div className="boxes-container">
        <div style={{ paddingLeft: '200px' , paddingRight: '35px' }}>
          <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px'}}>
            <div className="box" style={{ paddingRight: '10px' }}>
              <strong>Students and Professionals</strong>
              <p>Unlock Your Potential: Compete,Build Resume,Grow and get Hired!</p>
            </div>
            <div>
              <img src={exampleimage} alt="Example" style={imageStyle1} />
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: '35px' , paddingRight: '35px' }}>
          <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px'}}>
            <div className="box">
              <strong>Company and Recruters</strong>
              <p>Discover RIght Talent: Hire,Engage and Brand Like Never Before!</p>
            </div>
            <img src={exampleimage4} alt="Example" style={imageStyle2} />
          </div>
        </div>
        <div style={{ paddingLeft: '35px' , paddingRight: '200px' }}>
          <div className="row" style={{ border: '1px solid black' , display: 'flex', flexDirection: 'row', alignItems: 'centre', paddingLeft: '10px', paddingRight: '10px' }}>
            <div className="box">
              <strong>Colleges</strong>
              <p>Bridge Academia and Industry: Empower STudents with Real-World Opportunities!</p>
            </div>
            <div className="image-container">
              <img src={exampleimage5} alt="Example" style={imageStyle3} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '50px' }}></div>

      <div style={{ backgroundColor: '#f0f0f0' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'right', paddingRight: '90px', paddingTop: '10px' }}>
          <div>
            <div>
              <p style={{ marginLeft: '50px' }}>Industries veterans</p>
            </div>
            <div>
              <p style={{ marginLeft: '50px'}}><strong>Trust us</strong></p>
            </div>
          </div>
          <div style={{display: 'flex', listStyleType: 'none', paddingRight: '20px', alignItems: 'center', gap: '40px', paddingLeft: '80px' }}>
            <img src={exampleimage6} alt="Example" style={imageStyle4} />
            <img src={exampleimage7} alt="Example" style={imageStyle4} /> 
            <img src={exampleimage8} alt="Example" style={imageStyle4} />
            <img src={exampleimage9} alt="Example" style={imageStyle4} />
            <img src={exampleimage10} alt="Example" style={imageStyle4} />
            <img src={exampleimage11} alt="Example" style={imageStyle4} />
            <img src={exampleimage12} alt="Example" style={imageStyle4} />
            <img src={exampleimage13} alt="Example" style={imageStyle4} />
          </div>
        </div>
      </div>

      <div style={{ padding: '50px' }}>
        <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
          <div className='carousal-dev'>
            <img src={exampleimage14} alt="Example" style={imageStyle5}/>
            <img src={exampleimage15} alt="Example" style={imageStyle5}/>
          </div>
          <div className='carousal-dev'>
            <img src={exampleimage16} alt="Example" style={imageStyle5}/>
            <img src={exampleimage17} alt="Example" style={imageStyle5}/>
          </div>
          <div className='carousal-dev'>
            <img src={exampleimage18} alt="Example" style={imageStyle5}/>
            <img src={exampleimage19} alt="Example" style={imageStyle5}/>
          </div>
          <div className='carousal-dev'>
            <img src={exampleimage20} alt="Example" style={imageStyle5}/>
            <img src={exampleimage21} alt="Example" style={imageStyle5}/>
          </div>
          <div className='carousal-dev' >
            <img src={exampleimage22} alt="Example" style={imageStyle5}/>
            <img src={exampleimage23} alt="Example" style={imageStyle5}/>
          </div>
        </Carousel>
      </div>

      <div style={{backgroundColor: '#E6E6FA'}}>
       
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px', marginBottom:'7px'}}>Featured Opportunities</h2>
        <p style={{ marginLeft: '200px', marginTop:'5px'}}>Explore the Competitions that are creating a buzz among your peers!</p>
       
         <div style={{ padding: '50px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row', paddingLeft: '165px'}}>
         <Card
           image={exampleimage23}
           title="Road Safety Hackathon"
           description="Online | Free"
           buttonLabel="Learn More"
           onButtonClick={handleButtonClick}
         />
         <Card
           image={exampleimage15}
           title="The World's First Uspkilling Internship"
           description="Online | Free"
           buttonLabel="Learn More"
           onButtonClick={handleButtonClick}
         />
         <Card
           image={exampleimage16}
           title="L'Oréal Brandstorm 2025"
           description="Online | Free"
           buttonLabel="Learn More"
           onButtonClick={handleButtonClick}
         />
         <Card
           image={exampleimage20}
           title="Ingenium"
           description="Online | Free"
           buttonLabel="Learn More"
           onButtonClick={handleButtonClick}
         />
       </div>
      </div>

      <div>
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px', marginBottom:'7px'}}>Competitions.</h2>
        <p style={{ marginLeft: '200px', marginTop:'7px'}}>Explore the Competitions that are creating a buzz among your peers!</p>
        <div style={{ padding: '50px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row', marginLeft: '115px'}}>
        <Card
           className="special-card"
           image={exampleimage24}
           title="Jamरंग'25 | Quirky Law : Fact or Fiction"
           description="Vijaybhoomi University"
         />
        <Card
           className="special-card"
           image={exampleimage25}
           title="Tank Shark"
           description="Symbiosis Institute of Business Management"
         />
         <Card
           className="special-card"
           image={exampleimage26}
           title="Nivesh 2024: The Mock Stock Competition"
           description="Indian Institute of Foreign Trade,Delhi"
         />
         <Card
           className="special-card"
           image={exampleimage27}
           title="Ace the Case"
           description="Indian Institute of Management(IIM),Lucknow"
         />
         </div>
       </div>

       <div>
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px',marginBottom:'7px'}}>Internships</h2>
        <p style={{ marginLeft: '200px', marginTop:'8px'}}>Find the Internships that fits your career aspirations.</p>
        <div style={{ padding: '50px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row', marginLeft: '115px'}}>
        <Card
           className="special-card"
           image={exampleimage28}
           title="Engineering Support Internship"
           description="Western Digital"
         />
        <Card
           className="special-card"
           image={exampleimage29}
           title="Software Engineering Internship"
           description="Fortanix"
         />
         <Card
           className="special-card"
           image={exampleimage30}
           title="Digital Marketing Internship"
           description="Micro Organisations"
         />
         <Card
           className="special-card"
           image={exampleimage31}
           title="DevOps & NodeJS Engineer Internship"
           description="Sarvm.AI"
         />
         </div>
       </div>

       <div>
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px', marginBottom:'8px'}}>Jobs</h2>
        <p style={{ marginLeft: '200px', marginTop:'8px'}}>Find the Jobs that fits your career aspirations.</p>
        <div style={{ padding: '50px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row', marginLeft: '115px'}}>
          <Card
             className="special-card"
             image={exampleimage32}
             title="Airlins Service - Associate"
            description="Udan Airways"
          />
          <Card
            className="special-card"
            image={exampleimage33}
            title="Sales Manager"
            description="Bharath Cloud"
          />
          <Card
            className="special-card"
            image={exampleimage34}
            title="Sales Head (B2C)"
            description="Ek junction"
          />
          <Card
            className="special-card"
            image={exampleimage35}
            title="Foundert's Office- HR"
            description="SharePal.in"
         />
         </div>
       </div>

       <div>
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px', marginBottom:'8px'}}>Top Mentors</h2>
        <p style={{ marginLeft: '200px', marginTop:'8px'}}>In search of excellence? Explore the highest-rated mentors as recognized by the learner community.</p>
        <div style={{ padding: '50px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row', marginLeft: '115px'}}>
          <Card
             className="profile-card"
             image={exampleimage44}
             title="DNYANESHWAR MASKE"
             description="Udan Airways"
             buttonLabel="View Profile"
             onButtonClick={handleButtonClick}
          />
          <Card
            className="profile-card"
            image={exampleimage45}
            title="Yash Patel"
            description="Bharath Cloud"
            buttonLabel="View Profile"
            onButtonClick={handleButtonClick}
          />
          <Card
            className="profile-card"
            image={exampleimage46}
            title="Rutwik Borkar"
            description="Ek junction"
            buttonLabel="View Profile"
            onButtonClick={handleButtonClick}
          />
          <Card
            className="profile-card"
            image={exampleimage47}
            title="Palak Gupta"
            description="SharePal.in"
            buttonLabel="View Profile"
            onButtonClick={handleButtonClick}
         />
         </div>
       </div>
       
       <div>
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px', marginBottom:'8px'}}>Role Based Mock Test (Assessments)</h2>
        <p style={{ marginLeft: '200px', marginTop:'8px'}}>Master your concepts with level-wise tests, followed by full-length mock exams for 360° preparation!</p>
        <div style={{ padding: '50px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'row', marginLeft: '115px'}}>
        <Card
           image={exampleimage36}
           title="Product Manager"
           description="Shape the products people love"
           description2="View Assessments"
         />
        <Card
           image={exampleimage37}
           title="Data Analyst"
           description="Turn data into decisions"
           description2="View Assessments"
         />
         <Card
           image={exampleimage38}
           title="Software Developer"
           description="Code the future, one line at a time"
           description2="View Assessments"
         />
         <Card
           image={exampleimage39}
           title="Social Media Manager"
           description="Turn followers into fans"
           description2="View Assessments"
         />
         </div>
       </div>

       <div>
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px', marginBottom:'8px'}}>Practice Coding & Ace Hiring Assessments</h2>
        <p style={{ marginLeft: '200px', marginBottom: '30px', marginTop:'8px'}}> Level up your coding skills by practicing the hiring assessments of your dream companies & ace your placement game!</p>
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: '250px'}}>
        <img src={exampleimage40} alt="Example" style={imageStyle6}/> 
        <div style={{backgroundColor:'#f0f0f0'}}>
        <h2 style={{fontSize: '34px', paddingLeft:'30px'}}>Learn & Level Up Your Skills</h2>
        <p style={{paddingLeft:'30px', paddingRight:'100px'}}>Select from a wide range of courses to upskill and advance your career!</p>
          <div style={{display: 'flex', flexDirection: 'row', paddingLeft:'30px'}}>
            <ul> <img src={exampleimage41} alt="Example" style={imageStyle8}/> 50+ Courses</ul>
            <ul> <img src={exampleimage41} alt="Example" style={imageStyle8}/>Certificate</ul>
            <ul> <img src={exampleimage41} alt="Example" style={imageStyle8}/>Projects & Assignments</ul>
          </div>
       <div style={{paddingLeft:'30px', paddingTop:'30px'}}>
        <button style={{fontSize:'20px', backgroundColor:'#1E407C', color:'#FFFFFF', borderRadius: '50px', padding: '10px 20px'}}><b>Explore Courses</b></button>
       </div>
        </div>
        </div>
       </div>

       <div>
        <h2 style={{ marginLeft: '200px',  fontSize: '38px', paddingTop: '60px', marginBottom:'8px'}}>Pick The RIght Opportunity!</h2>
        <span style={{ marginLeft: '200px', marginTop: '8px'}}>Explore opportunities that best suits your skills and interests!</span>









        <div>
      
        
        </div>










       </div>




       <div style={{paddingTop: '60px', alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
        <h2 style={{fontSize: '36px'}}>Our Numbers</h2>
       </div>

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '40px', marginBottom:'70px'}}>
        <div style={{backgroundColor:'#f0f0f0', paddingLeft: '30px', paddingRight: '30px', borderRadius: '12px', fontSize: '20px'}}>
          <h2 style={{paddingLeft:'15px'}}>19M+</h2>
          <p>Active Users</p>
        </div>
        <div  style={{backgroundColor:'#f0f0f0', paddingLeft: '30px', paddingRight: '30px', borderRadius: '12px', fontSize: '20px'}}>
          <h2 style={{paddingLeft:'5px'}}>22.3M+</h2>
          <p>Assessments</p>
        </div>
        <div  style={{backgroundColor:'#f0f0f0', paddingLeft: '30px', paddingRight: '30px', borderRadius: '12px', fontSize: '20px'}}>
          <h2 style={{paddingLeft:'16px'}}>130k+</h2>
          <p>Opportunities</p>
        </div>
        <div  style={{backgroundColor:'#f0f0f0', paddingLeft: '30px', paddingRight: '30px', borderRadius: '12px', fontSize: '20px'}}>
          <h2 style={{paddingLeft:'30px'}}>800+</h2>
          <p>Brands trust us</p>
        </div>
        <div  style={{backgroundColor:'#f0f0f0', paddingLeft: '30px', paddingRight: '30px', borderRadius: '12px', fontSize: '20px'}}>
          <h2 style={{paddingLeft:'25px'}}>42k+</h2>
          <p>Organisations</p>
        </div>
        <div style={{backgroundColor:'#f0f0f0', paddingLeft: '30px', paddingRight: '30px', borderRadius: '12px', fontSize: '20px'}}>
          <h2 style={{paddingLeft:'15px'}}>78+</h2>
          <p>Countries</p>
        </div>
        </div>
        <Footer />
    </div>
  );
}

const imageStyle = {
  width: '36%',
  height: 'auto',
  marginTop: '20px' // Optional: Add some margin to separate the image from the header
};

const imageStyle1 = {
  width: '70px',
  height: '60px' // Optional: Add some margin to separate the image from the header
};

const imageStyle2 = {
  width: '70px',
  height: '60px' // Optional: Add some margin to separate the image from the header
};

const imageStyle3 = {
  width: '70px',
  height: '60px' // Optional: Add some margin to separate the image from the header
};

const imageStyle4 = {
  width: '150px',
  height: '90px',
  paddingLeft: '100' // Optional: Add some margin to separate the image from the header
};

const imageStyle5 = {
  width: '700px',
  height: '250px' // Optional: Add some margin to separate the image from the header
};

const imageStyle6 = {
  width: '660px',
  height: '300px' // Optional: Add some margin to separate the image from the header
};

const imageStyle7 = {
  width: '40px',
  height: '40px' // Optional: Add some margin to separate the image from the header
};

const imageStyle8 = {
  width: '24px',
  height: '18px',
  marginRight:'5px' // Optional: Add some margin to separate the image from the header
};

export default App;