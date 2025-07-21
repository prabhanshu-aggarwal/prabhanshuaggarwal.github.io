import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiCloud, FiCpu, 
  FiGitBranch, FiPackage, FiServer
} from 'react-icons/fi';

const SkillsContainer = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
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
      radial-gradient(circle at 20% 80%, ${props => props.theme.primary}05 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${props => props.theme.secondary}05 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${props => props.theme.primary}10, transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${props => props.theme.shadow};
    border-color: ${props => props.theme.primary};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin: 0;
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${props => props.theme.surface};
  border-radius: 12px;
  border: 1px solid ${props => props.theme.border};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.primary}10;
    border-color: ${props => props.theme.primary};
    transform: translateX(5px);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${props => props.theme.text};
`;

const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.primary};
  font-weight: 600;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.border};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 4rem;
`;

const TechCard = styled(motion.div)`
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${props => props.theme.primary}10, ${props => props.theme.secondary}10);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px ${props => props.theme.shadow};
    border-color: ${props => props.theme.primary};
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const TechName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const TechDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textSecondary};
  line-height: 1.5;
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: ${props => props.theme.glass};
  border: 1px solid ${props => props.theme.glassBorder};
  border-radius: 20px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px ${props => props.theme.shadow};
    border-color: ${props => props.theme.primary};
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 1rem;
  font-weight: 500;
`;

const Skills = ({ theme }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Proficient Languages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "Machine Learning", level: 90, icon: "🤖" },
        { name: "API Development", level: 88, icon: "🔌" },
        { name: "C", level: 85, icon: "⚡" },
        { name: "CSS", level: 85, icon: "🎨" },
        { name: "HTML", level: 85, icon: "🌐" }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "SQL", level: 90, icon: "🗄️" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Tableau", level: 80, icon: "📊" },
        { name: "Apache Spark", level: 85, icon: "⚡" },
        { name: "Kafka", level: 80, icon: "📨" },
        { name: "DataBricks", level: 85, icon: "💎" },
        { name: "ETL Pipelines", level: 88, icon: "🔄" }
      ]
    },
    {
      title: "AI & ML Tools",
      skills: [
        { name: "TensorFlow", level: 90, icon: "🧠" },
        { name: "PyTorch", level: 85, icon: "🔥" },
        { name: "Scikit-learn", level: 90, icon: "📈" },
        { name: "Pandas", level: 92, icon: "🐼" },
        { name: "NumPy", level: 90, icon: "🔢" },
        { name: "Hugging Face", level: 85, icon: "🤗" },
        { name: "BERT", level: 80, icon: "📝" },
        { name: "LLaMA", level: 80, icon: "🦙" },
        { name: "LangChain", level: 85, icon: "⛓️" },
        { name: "YOLO", level: 85, icon: "👁️" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 88, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "⚓" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Jenkins", level: 80, icon: "🤖" },
        { name: "GitLab CI", level: 85, icon: "🦊" }
      ]
    },
    {
      title: "Familiar Technologies",
      skills: [
        { name: "JavaScript", level: 75, icon: "📜" },
        { name: "Django", level: 75, icon: "🎸" },
        { name: "Java", level: 70, icon: "☕" },
        { name: "React.js", level: 75, icon: "⚛️" },
        { name: "Node.js", level: 75, icon: "🟢" }
      ]
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git", level: 90, icon: "📝" },
        { name: "GitLab", level: 85, icon: "🦊" },
        { name: "JIRA", level: 85, icon: "🎫" },
        { name: "ServiceNow", level: 80, icon: "🛠️" },
        { name: "Agile", level: 90, icon: "🔄" },
        { name: "MLFlow", level: 80, icon: "📊" }
      ]
    }
  ];

  const techStack = [
    { name: "React", icon: <FiCode />, description: "Modern UI development" },
    { name: "Node.js", icon: <FiServer />, description: "Server-side JavaScript" },
    { name: "Python", icon: <FiCpu />, description: "AI & Data Science" },
    { name: "AWS", icon: <FiCloud />, description: "Cloud Infrastructure" },
    { name: "Docker", icon: <FiPackage />, description: "Containerization" },
    { name: "Git", icon: <FiGitBranch />, description: "Version Control" },
    { name: "TypeScript", icon: <FiCode />, description: "Type Safety" },
    { name: "MongoDB", icon: <FiDatabase />, description: "NoSQL Database" }
  ];

  const stats = [
          { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <SkillsContainer ref={ref} theme={theme}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionTitle variants={itemVariants} theme={theme}>
          Skills & Expertise
        </SectionTitle>
        
        <SectionSubtitle variants={itemVariants} theme={theme}>
          A comprehensive toolkit for building modern, scalable applications
        </SectionSubtitle>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              variants={itemVariants}
              theme={theme}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryHeader>
                <CategoryIcon theme={theme}>
                  {category.title === "Proficient Languages" ? "💻" : category.title === "Data & Analytics" ? "📊" : category.title === "AI & ML Tools" ? "🧠" : category.title === "Cloud & DevOps" ? "☁️" : category.title === "Familiar Technologies" ? "👔" : "⚙️"}
                </CategoryIcon>
                <CategoryTitle theme={theme}>{category.title}</CategoryTitle>
              </CategoryHeader>
              
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  theme={theme}
                  whileHover={{ x: 5 }}
                >
                  <SkillHeader theme={theme}>
                    <SkillName theme={theme}>{skill.name}</SkillName>
                    <SkillLevel theme={theme}>{skill.level}%</SkillLevel>
                  </SkillHeader>
                  <ProgressContainer theme={theme}>
                    <ProgressBar
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                      theme={theme}
                    />
                  </ProgressContainer>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>

        <TechStack>
          {techStack.map((tech, index) => (
            <TechCard
              key={index}
              variants={itemVariants}
              theme={theme}
              whileHover={{ scale: 1.05 }}
            >
              <TechIcon theme={theme}>{tech.icon}</TechIcon>
              <TechName theme={theme}>{tech.name}</TechName>
              <TechDescription theme={theme}>{tech.description}</TechDescription>
            </TechCard>
          ))}
        </TechStack>

        <StatsContainer variants={itemVariants}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              theme={theme}
              whileHover={{ scale: 1.05 }}
            >
              <StatNumber theme={theme}>{stat.number}</StatNumber>
              <StatLabel theme={theme}>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer>
      </motion.div>
    </SkillsContainer>
  );
};

export default Skills; 