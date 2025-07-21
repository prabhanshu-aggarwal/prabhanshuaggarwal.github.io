import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.surface};
  border-top: 1px solid ${props => props.theme.border};
  padding: 3rem 0 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${props => props.theme.primary}, transparent);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled(motion.div)`
  h3 {
    color: ${props => props.theme.primary};
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.text};
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);

  &:hover {
    background: ${props => props.theme.primary}20;
    color: ${props => props.theme.primary};
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuickLink = styled(motion.a)`
  color: ${props => props.theme.textSecondary};
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.25rem 0;

  &:hover {
    color: ${props => props.theme.primary};
    transform: translateX(5px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
`;

const ContactLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.primary}40;
  text-underline-offset: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.secondary};
    text-decoration-color: ${props => props.theme.secondary};
    transform: translateX(5px);
    text-shadow: 0 0 8px ${props => props.theme.primary}40;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.border};
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BackToTop = styled(motion.button)`
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);

  &:hover {
    background: ${props => props.theme.primary}20;
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }
`;

const Footer = ({ theme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer theme={theme}>
      <FooterContent>
        <FooterGrid>
          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            theme={theme}
          >
            <h3>Prabhanshu Aggarwal</h3>
            <p>Full Stack Developer & AI Engineer passionate about creating innovative digital experiences and intelligent systems.</p>
            <SocialLinks>
              <SocialLink
                href="https://github.com/prabhanshuaggarwal"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/prabhanshuaggarwal"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </SocialLink>
              <SocialLink
                href="https://twitter.com/prabhanshuaggarwal"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter />
              </SocialLink>
              <SocialLink
                href="mailto:prabhanshuaggarwal@gmail.com"
                theme={theme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            theme={theme}
          >
            <h3>Quick Links</h3>
            <QuickLinks>
              <QuickLink href="/" theme={theme} whileHover={{ x: 5 }}>
                Home
              </QuickLink>
              <QuickLink href="/my-story" theme={theme} whileHover={{ x: 5 }}>
                My Story
              </QuickLink>
              <QuickLink href="/services" theme={theme} whileHover={{ x: 5 }}>
                Services
              </QuickLink>
              <QuickLink href="/contact" theme={theme} whileHover={{ x: 5 }}>
                Contact
              </QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            theme={theme}
          >
            <h3>Services</h3>
            <QuickLinks>
              <QuickLink href="/services" theme={theme} whileHover={{ x: 5 }}>
                Web Development
              </QuickLink>
              <QuickLink href="/services" theme={theme} whileHover={{ x: 5 }}>
                Full-Stack Applications
              </QuickLink>
              <QuickLink href="/services" theme={theme} whileHover={{ x: 5 }}>
                AI & Machine Learning
              </QuickLink>
              <QuickLink href="/services" theme={theme} whileHover={{ x: 5 }}>
                Cloud Deployment
              </QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            theme={theme}
          >
            <h3>Get In Touch</h3>
            <ContactInfo theme={theme}>
              <ContactItem theme={theme}>
                <FiMail size={16} />
                <ContactLink href="mailto:prabhanshuaggarwal@gmail.com" theme={theme}>
                  Email
                </ContactLink>
              </ContactItem>
              <ContactItem theme={theme}>
                <FiLinkedin size={16} />
                <ContactLink href="https://linkedin.com/in/prabhanshuaggarwal" target="_blank" rel="noopener noreferrer" theme={theme}>
                  LinkedIn
                </ContactLink>
              </ContactItem>
              <ContactItem theme={theme}>
                <FiGithub size={16} />
                <ContactLink href="https://github.com/prabhanshuaggarwal" target="_blank" rel="noopener noreferrer" theme={theme}>
                  GitHub
                </ContactLink>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterGrid>

        <FooterBottom theme={theme}>
          <Copyright theme={theme}>
            © 2024 Made with <FiHeart size={14} style={{ color: '#f59e0b' }} /> by Prabhanshu Aggarwal
          </Copyright>
          <BackToTop
            onClick={scrollToTop}
            theme={theme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 