import React, { useState, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useTransform, useScroll } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiCode, FiCpu, FiZap } from 'react-icons/fi';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  50% { transform: translateY(-5px) rotate(-1deg); }
  75% { transform: translateY(-15px) rotate(0.5deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const matrix = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

const wave = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.background};
  padding-top: 120px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, ${props => props.theme.primary}20 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${props => props.theme.secondary}20 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${props => props.theme.accent}10 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.primary}, transparent);
    animation: ${scanline} 3s linear infinite;
    opacity: 0.6;
  }
`;

const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.1;
  
  &::before {
    content: '01';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      ${props => props.theme.primary}20 2px,
      ${props => props.theme.primary}20 4px
    );
    animation: ${matrix} 20s linear infinite;
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 2;
  position: relative;
  max-width: 1200px;
  padding: 0 2rem;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.theme.primary}30;
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  pointer-events: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '>';
    margin-right: 10px;
    color: ${props => props.theme.secondary};
  }

  .wave {
    animation: ${wave} 2s ease-in-out infinite;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  background: linear-gradient(-45deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent}, #f59e0b);
  background-size: 400% 400%;
  animation: ${gradient} 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.primary}, transparent);
  }
`;

const Title = styled(motion.h3)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
  font-weight: 400;
  opacity: 0.9;
  position: relative;
  z-index: 2;
  
  span {
    color: ${props => props.theme.primary};
    font-weight: 600;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  opacity: 0.8;
  position: relative;
  z-index: 2;
`;

const TerminalContainer = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 700px;
  box-shadow: 0 20px 40px ${props => props.theme.shadow};
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: ${props => props.theme.border};
    border-radius: 15px 15px 0 0;
  }

  &::after {
    content: '● ● ●';
    position: absolute;
    top: 8px;
    left: 15px;
    color: ${props => props.theme.textSecondary};
    font-size: 12px;
    letter-spacing: 2px;
  }
`;

const TerminalLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  color: ${props => props.theme.text};

  .prompt {
    color: ${props => props.theme.primary};
    margin-right: 0.5rem;
  }

  .command {
    color: ${props => props.theme.text};
  }

  .output {
    color: ${props => props.theme.textSecondary};
    margin-left: 1rem;
  }

  .cursor {
    display: inline-block;
    width: 8px;
    height: 16px;
    background: ${props => props.theme.primary};
    animation: ${blink} 1s infinite;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Button = styled(motion.button)`
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &.primary {
    background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
    color: white;
    box-shadow: 0 5px 15px ${props => props.theme.primary}40;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px ${props => props.theme.primary}60;
    }
  }

  &.secondary {
    background: transparent;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.border};

    &:hover {
      background: ${props => props.theme.primary}20;
      border-color: ${props => props.theme.primary};
      transform: translateY(-2px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SocialButton = styled(motion.a)`
  padding: 12px 20px;
  border-radius: 25px;
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.text};
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: ${props => props.theme.primary}20;
    color: ${props => props.theme.primary};
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }

  span {
    font-size: 0.9rem;
  }
`;

const SkillBadges = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const SkillBadge = styled(motion.div)`
  padding: 8px 16px;
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.theme.primary}20;
    border-color: ${props => props.theme.primary};
    transform: translateY(-2px);
  }
`;

const Hero = ({ theme }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const terminalCommands = useMemo(() => [
    { command: 'whoami', output: 'Prabhanshu Aggarwal' },
    { command: 'pwd', output: '/portfolio' },
    { command: 'ls skills/', output: 'Python  AWS  Docker  ML' },
    { command: 'cat experience.txt', output: '5+ years of software development experience' },
    { command: 'cat education.txt', output: "Master's in Computer Science with AI Specialization" },
    { command: 'npm start creativity', output: '🚀 Portfolio launched successfully!' }
  ], []);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (lineIndex < terminalCommands.length) {
        const currentCommand = terminalCommands[lineIndex];
        if (charIndex < currentCommand.command.length) {
          setTypedText(currentCommand.command.substring(0, charIndex + 1));
          charIndex++;
        } else {
          setCurrentLine(lineIndex);
          lineIndex++;
          charIndex = 0;
          setTimeout(() => {
            setTypedText('');
          }, 1000);
        }
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [terminalCommands]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer theme={theme}>
      <MatrixBackground theme={theme} />
      
      <FloatingElement
        style={{ top: '20%', left: '10%' }}
        theme={theme}
      />
      <FloatingElement
        style={{ top: '60%', right: '15%' }}
        theme={theme}
      />
      <FloatingElement
        style={{ bottom: '20%', left: '20%' }}
        theme={theme}
      />

      <Content style={{ y }}>
        <Greeting
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          theme={theme}
        >
          <span className="wave">👋</span>
          Hello, I'm
        </Greeting>

        <Name
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          theme={theme}
        >
          Prabhanshu Aggarwal
        </Name>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          theme={theme}
        >
          AI Engineer & <span>Full-Stack Developer</span>
        </Title>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          theme={theme}
        >
          Analytical professional skilled in socio-economic modeling, forecasting, and large-scale data processing. 
          Specialized in AI-driven automation and evidence-based policymaking solutions.
        </Description>

        <TerminalContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          theme={theme}
        >
          {terminalCommands.map((cmd, index) => (
            <TerminalLine key={index} theme={theme}>
              <span className="prompt">$</span>
              <span className="command">
                {index === currentLine && isTyping ? typedText : index < currentLine ? cmd.command : ''}
                {index === currentLine && isTyping && <span className="cursor" />}
              </span>
              {index < currentLine && <span className="output">→ {cmd.output}</span>}
            </TerminalLine>
          ))}
        </TerminalContainer>

        <SkillBadges
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          theme={theme}
        >
          <SkillBadge theme={theme} whileHover={{ scale: 1.05 }}><FiCode /> React.js</SkillBadge>
          <SkillBadge theme={theme} whileHover={{ scale: 1.05 }}><FiCpu /> Node.js</SkillBadge>
          <SkillBadge theme={theme} whileHover={{ scale: 1.05 }}><FiZap /> Python</SkillBadge>
          <SkillBadge theme={theme} whileHover={{ scale: 1.05 }}>AWS</SkillBadge>
          <SkillBadge theme={theme} whileHover={{ scale: 1.05 }}>Docker</SkillBadge>
        </SkillBadges>

        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Button
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            theme={theme}
          >
            <FiDownload />
            Download Resume
          </Button>
          <Button
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            theme={theme}
          >
            View Projects
            <FiArrowRight />
          </Button>
        </ButtonGroup>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <SocialButton
            href="mailto:prabhanshuaggarwal@gmail.com"
            theme={theme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMail />
            <span>Mail</span>
          </SocialButton>
          <SocialButton
            href="https://linkedin.com/in/prabhanshuaggarwal"
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </SocialButton>
          <SocialButton
            href="https://github.com/prabhanshuaggarwal"
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub />
            <span>GitHub</span>
          </SocialButton>
        </SocialLinks>
      </Content>
    </HeroContainer>
  );
};

export default Hero; 