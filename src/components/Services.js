import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiSmartphone, FiDatabase, FiCloud, FiZap } from 'react-icons/fi';

const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 120px 20px 60px;
  background: ${props => props.theme.background};
`;

const ServicesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const ServicesTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(-45deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
`;

const ServicesSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.secondary}, ${props => props.theme.accent});
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${props => props.theme.shadow};
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${props => props.theme.accent};
    font-weight: bold;
  }
`;

const CTA = styled(motion.div)`
  text-align: center;
  background: ${props => props.theme.surface};
  border: 1px solid ${props => props.theme.border};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px ${props => props.theme.shadow};
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  color: ${props => props.theme.textSecondary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px ${props => props.theme.shadow};
  }
`;

const Services = ({ theme }) => {
  const services = [
    {
      icon: <FiCode />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and best practices.",
      features: [
        "Responsive design for all devices",
        "Modern frameworks (React, Vue, Angular)",
        "SEO optimization",
        "Performance optimization",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: <FiGlobe />,
      title: "Full-Stack Applications",
      description: "Complete web applications with frontend and backend development, databases, and APIs.",
      features: [
        "Frontend and backend development",
        "Database design and management",
        "RESTful API development",
        "Authentication and authorization",
        "Third-party integrations"
      ]
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile-First Design",
      description: "Mobile-responsive designs that work seamlessly across all devices and screen sizes.",
      features: [
        "Mobile-first approach",
        "Touch-friendly interfaces",
        "Progressive Web Apps (PWA)",
        "App-like experiences",
        "Offline functionality"
      ]
    },
    {
      icon: <FiDatabase />,
      title: "Database Solutions",
      description: "Database design, optimization, and management for scalable applications.",
      features: [
        "Database design and architecture",
        "Performance optimization",
        "Data migration and backup",
        "Security implementation",
        "Scalability planning"
      ]
    },
    {
      icon: <FiCloud />,
      title: "Cloud Deployment",
      description: "Deploy and manage applications on cloud platforms with best practices.",
      features: [
        "AWS, Azure, Google Cloud",
        "Docker containerization",
        "CI/CD pipelines",
        "Monitoring and logging",
        "Auto-scaling solutions"
      ]
    },
    {
      icon: <FiZap />,
      title: "AI & Machine Learning",
      description: "Integration of AI and ML capabilities into web applications and systems.",
      features: [
        "AI model integration",
        "Natural language processing",
        "Computer vision",
        "Predictive analytics",
        "Automation solutions"
      ]
    }
  ];

  return (
    <ServicesContainer theme={theme}>
      <ServicesContent>
        <ServicesHeader
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ServicesTitle theme={theme}>Services I Provide</ServicesTitle>
          <ServicesSubtitle theme={theme}>
            Comprehensive web development and technology solutions tailored to your needs
          </ServicesSubtitle>
        </ServicesHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              theme={theme}
            >
              <ServiceIcon theme={theme}>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle theme={theme}>{service.title}</ServiceTitle>
              <ServiceDescription theme={theme}>
                {service.description}
              </ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, featureIndex) => (
                  <ServiceFeature key={featureIndex} theme={theme}>
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTA
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          theme={theme}
        >
          <CTATitle theme={theme}>Ready to Start Your Project?</CTATitle>
          <CTAText theme={theme}>
            Let's discuss your ideas and create something amazing together. I'm here to help bring your vision to life.
          </CTAText>
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            theme={theme}
            onClick={() => window.location.href = '/contact'}
          >
            Get In Touch
          </CTAButton>
        </CTA>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default Services; 