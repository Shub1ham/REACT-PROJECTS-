import "./About.css";
import Title from "./Title";
import aboutimg from '../assets/about.png'
import playicon from '../assets/play-icon.png'
const About = () => {
  return (
    <div className="about container">
      <div className="about-left">
        <img className="about-img" src={aboutimg} alt="" />
        <img className="about-icon" src={playicon} alt="" />
      </div>
      <div className="about-right">
        <p className="about-subtitle">ABOUT UNIVERSITY</p>
        <h2 className="about-title">Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <br></br>
        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <br></br>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
    </div>
  );
};

export default About;
