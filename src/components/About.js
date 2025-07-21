import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FiUser } from 'react-icons/fi';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 120px 20px 60px;
  background: ${props => props.theme.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, ${props => props.theme.primary}10 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${props => props.theme.secondary}10 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${props => props.theme.accent}05 0%, transparent 50%);
    pointer-events: none;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const AboutHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 6rem;
`;

const AboutTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(-45deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
  background-size: 400% 400%;
  animation: ${gradient} 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  font-weight: 400;
`;

const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftContent = styled(motion.div)`
  position: relative;
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 20px;
    background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
    opacity: 0.3;
    filter: blur(20px);
    animation: ${pulse} 4s ease-in-out infinite;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageToggle = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

const RightContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const IntroText = styled.div`
  font-size: 1.3rem;
  color: ${props => props.theme.text};
  line-height: 1.8;
  font-weight: 500;
`;

const HighlightText = styled.span`
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.primary};
    box-shadow: 0 10px 30px ${props => props.theme.shadow};
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.textSecondary};
  font-weight: 500;
`;



const About = ({ theme }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/prabhanshu1.jpg', '/prabhanshu2.jpg'];

  const toggleImage = () => {
    setCurrentImage((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <AboutContainer theme={theme}>
      <AboutContent>
        <AboutHeader
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AboutTitle theme={theme}>About Me</AboutTitle>
          <AboutSubtitle theme={theme}>
            AI Engineer & Full-Stack Developer passionate about AI-driven solutions and evidence-based policymaking
          </AboutSubtitle>
        </AboutHeader>

        <MainSection>
          <LeftContent
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProfileImageContainer theme={theme}>
              <ProfileImage 
                src={images[currentImage]} 
                alt="Prabhanshu Aggarwal"
              />
              <ImageToggle onClick={toggleImage}>
                <FiUser />
              </ImageToggle>
            </ProfileImageContainer>
          </LeftContent>

          <RightContent
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <IntroText theme={theme}>
              I'm an <HighlightText theme={theme}>analytical AI Engineer</HighlightText> and Software Developer based in Ontario, Canada, with expertise in socio-economic modeling, forecasting, and large-scale data processing.
            </IntroText>
            
            <IntroText theme={theme}>
              Currently working at <HighlightText theme={theme}>Intact Insurance</HighlightText>, I specialize in developing AI-driven automation solutions and scalable backend services that process massive datasets and create actionable insights.
            </IntroText>

            <IntroText theme={theme}>
              My passion lies in creating <HighlightText theme={theme}>innovative solutions</HighlightText> that drive efficiency, improve decision-making processes, and create meaningful impact through advanced analytics and machine learning.
            </IntroText>

            <StatsGrid>
              <StatItem
                theme={theme}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <StatNumber theme={theme}>5+</StatNumber>
                <StatLabel theme={theme}>Years Experience</StatLabel>
              </StatItem>
              <StatItem
                theme={theme}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <StatNumber theme={theme}>20+</StatNumber>
                <StatLabel theme={theme}>Projects Completed</StatLabel>
              </StatItem>
              <StatItem
                theme={theme}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <StatNumber theme={theme}>15+</StatNumber>
                <StatLabel theme={theme}>Technologies</StatLabel>
              </StatItem>
            </StatsGrid>
          </RightContent>
        </MainSection>


      </AboutContent>
    </AboutContainer>
  );
};

export default About; 