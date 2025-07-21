import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StoryContainer = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, ${props => props.theme.primary}05 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${props => props.theme.secondary}05 0%, transparent 50%);
    pointer-events: none;
  }
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const StoryText = styled(motion.div)`
  h2 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.textSecondary};
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .highlight {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;



const StoryTimeline = styled(motion.div)`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 30px;
    bottom: -30px;
    width: 2px;
    background: ${props => props.theme.border};
  }

  &:last-child::before {
    display: none;
  }
`;

const TimelineDot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.theme.primary};
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

const TimelineContent = styled.div`
  h4 {
    color: ${props => props.theme.text};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.textSecondary};
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const MyStory = ({ theme }) => {

  return (
    <StoryContainer theme={theme}>
      <StoryContent>
        <StoryText
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          theme={theme}
        >
          <h2>My Story</h2>
          <p>
            From a curious student fascinated by technology to a passionate <span className="highlight">AI Engineer & Full-Stack Developer</span>, 
            my journey has been driven by an insatiable desire to create innovative solutions that make a real impact.
          </p>
          <p>
            With <span className="highlight">5+ years of experience</span> in the tech industry, I've evolved from building simple websites 
            to developing complex AI systems and scalable applications. My expertise spans from traditional web development 
            to cutting-edge machine learning and cloud infrastructure.
          </p>
          <p>
            I believe in the power of technology to solve real-world problems. Whether it's developing intelligent chatbots, 
            creating data-driven insights, or building robust applications, I'm committed to delivering solutions that 
            not only meet technical requirements but also exceed user expectations.
          </p>

          <StoryTimeline
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            theme={theme}
          >
            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <TimelineDot theme={theme} />
              <TimelineContent theme={theme}>
                <h4>Early Beginnings</h4>
                <p>Started with web development and basic programming concepts</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <TimelineDot theme={theme} />
              <TimelineContent theme={theme}>
                <h4>AI & Machine Learning</h4>
                <p>Discovered passion for AI and began building intelligent systems</p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <TimelineDot theme={theme} />
              <TimelineContent theme={theme}>
                <h4>Professional Growth</h4>
                <p>Working on large-scale projects and mentoring junior developers</p>
              </TimelineContent>
            </TimelineItem>
          </StoryTimeline>
        </StoryText>


      </StoryContent>
    </StoryContainer>
  );
};

export default MyStory; 