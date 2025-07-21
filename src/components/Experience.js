import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceContainer = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme === 'dark' ? '#94a3b8' : '#64748b'};
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 4rem;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 4rem;
    }
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  background: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.2);
    border-color: #6366f1;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #6366f1;
  border: 4px solid ${props => props.theme === 'dark' ? '#0a0a0a' : '#ffffff'};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  @media (max-width: 768px) {
    left: 2rem;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: #6366f1;
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme === 'dark' ? '#94a3b8' : '#64748b'};
  font-size: 0.9rem;
`;

const JobDescription = styled.p`
  color: ${props => props.theme === 'dark' ? '#cbd5e1' : '#475569'};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const JobAchievements = styled.ul`
  color: ${props => props.theme === 'dark' ? '#cbd5e1' : '#475569'};
  line-height: 1.6;
  padding-left: 1.5rem;
`;

const JobAchievement = styled.li`
  margin-bottom: 0.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'};
  color: #6366f1;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const Experience = ({ theme }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: "Intact Insurance",
      position: "Software Developer",
      duration: "May 2023 - Present",
      location: "Toronto, ON",
      description: "Developing scalable backend services and AI-driven automation solutions for large-scale data processing.",
      achievements: [
        "Developed scalable backend services to support AI-driven automation and large-scale data processing",
        "Built API-driven solutions integrating customer data with AWS services, reducing manual processing by 40%",
        "Created and maintained scalable data ingestion and transformation pipelines using Spark, Databricks, and SQL",
        "Partnered with analysts to convert manual workflows into reusable modules, reducing repetitive request cycles by 60%",
        "Containerized Python scripts using Docker + GitLab CI/CD, managing deployments to staging environments",
        "Enhanced model training efficiency, leading to 20% improvement in performance",
        "Integrated raw data from disparate systems and APIs into analytics-ready formats"
      ],
      technologies: ["Python", "MongoDB", "Jira", "Gitlab", "Kafka", "Snowflake", "Redshift", "Delta Lake", "Spark", "DataBricks", "SQL", "AWS", "API"]
    },
    {
      company: "Western University",
      position: "Graduate Teaching Assistant",
      duration: "Jan 2023 - April 2023",
      location: "London, ON",
      description: "Led Python labs and developed automated grading tools to enhance student learning experience.",
      achievements: [
        "Led Python labs for 100+ students, improving grades by 15% through clear feedback",
        "Developed automated grading tools in Python, cutting marking time by 50% and enhancing grading accuracy"
      ],
      technologies: ["Python"]
    },
    {
      company: "Tata Consultancy Services",
      position: "Full Stack Developer",
      duration: "June 2019 - Aug 2022",
      location: "India",
      description: "Developed backend microservices and NLP-based solutions for loyalty & customer engagement platforms.",
      achievements: [
        "Developed backend microservices to handle high-volume requests for loyalty & customer engagement platforms",
        "Built NLP-based text search models across heterogeneous file types",
        "Created and optimized APIs for partner integrations, improving request handling time by 30%",
        "Worked on database optimization, implementing indexing and caching strategies for efficient querying",
        "Ensured backend reliability and security, implementing logging, monitoring, and access controls",
        "Received Employee of the Year Award for meeting and exceeding all assigned goals and objectives",
        "Promoted to Digital Profile in TCS within 2 years"
      ],
      technologies: ["Machine Learning", "Python", "NLP", "SQL", "CSS", "HTML", "JavaScript", "Scripting"]
    },
    {
      company: "BlueBerry ILLP",
      position: "Intern",
      duration: "July 2018 - Aug 2018",
      location: "India",
      description: "Project: CRIK - Developed a functional, smooth, easy-to-operate, eye-catching website using HTML5, PHP, and Bootstrap.",
      achievements: [
        "Responsible for developing a functional, smooth, easy-to-operate, eye-catching website using HTML5, PHP, and Bootstrap independently",
        "Developed the Backend with team to meet client expectations",
        "Worked on full-stack development with focus on user experience and functionality"
      ],
      technologies: ["PHP", "MySQL", "HTML", "Bootstrap"]
    },
    {
      company: "mCarbon, Noida",
      position: "Intern",
      duration: "June 2017 - July 2017",
      location: "India",
      description: "Project: Testing Infrastructure Framework - Implemented and updated application modules under the direction of Senior Developers.",
      achievements: [
        "Implemented and updated application modules under the direction of Senior Developers",
        "Worked on testing infrastructure framework development",
        "Gained hands-on experience with Core Java development"
      ],
      technologies: ["Core Java"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ExperienceContainer ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionTitle variants={itemVariants}>
          Work Experience
        </SectionTitle>
        
        <SectionSubtitle variants={itemVariants} theme={theme}>
          My professional journey and career progression
        </SectionSubtitle>

        <TimelineContainer>
          {experiences.map((experience, index) => (
            <TimelineItem key={index} variants={itemVariants}>
              <TimelineDot theme={theme} />
              <TimelineContent theme={theme}>
                <JobTitle theme={theme}>{experience.position}</JobTitle>
                <CompanyName>{experience.company}</CompanyName>
                
                <JobMeta>
                  <MetaItem theme={theme}>
                    <FiCalendar />
                    {experience.duration}
                  </MetaItem>
                  <MetaItem theme={theme}>
                    <FiMapPin />
                    {experience.location}
                  </MetaItem>
                </JobMeta>
                
                <JobDescription theme={theme}>
                  {experience.description}
                </JobDescription>
                
                <JobAchievements>
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <JobAchievement key={achievementIndex} theme={theme}>
                      {achievement}
                    </JobAchievement>
                  ))}
                </JobAchievements>
                
                <TechStack>
                  {experience.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex} theme={theme}>
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </motion.div>
    </ExperienceContainer>
  );
};

export default Experience; 