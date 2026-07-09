import Hero from './Hero';
import './LandingPage.css';

const LandingPage = ({ onExplore }) => {
  return (
    <div className="landing-page">
      <Hero onExplore={onExplore} />
    </div>
  );
};

export default LandingPage;