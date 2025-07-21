import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 240, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 240, 0.6), 0 0 60px rgba(99, 102, 241, 0.4); }
`;

const ProjectsContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
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
      radial-gradient(circle at 20% 80%, rgba(0, 255, 240, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00fff0 0%, #6366f1 50%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: #cccccc;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.8;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.3);
  border: 1px solid rgba(0, 255, 240, 0.2);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 240, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(0, 255, 240, 0.5);
    box-shadow: 0 20px 40px rgba(0, 255, 240, 0.2);
    animation: ${glow} 2s ease-in-out infinite;
  }
`;

const ProjectContent = styled.div`
  position: relative;
  z-index: 2;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 240, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    z-index: 2;
  }
  
  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`;

const LazyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: opacity 0.3s ease;
  opacity: ${props => props.loaded ? 1 : 0};
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(0, 255, 240, 0.1);
  color: #00fff0;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid rgba(0, 255, 240, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 240, 0.2);
    transform: scale(1.05);
  }
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00fff0;
  border-radius: 50%;
  pointer-events: none;
  opacity: 0.6;
  animation: ${float} 4s ease-in-out infinite;
`;

const Projects = ({ theme }) => {
  const [loadedImages, setLoadedImages] = useState({});

  const projects = [
    {
      title: "V2Ts with Offensive Speech Detection",
      description: "Advanced video-to-text conversion system with real-time offensive speech detection using BERT and LLaMA models.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "BERT", "LLaMA", "NLP", "Video Processing"],
      category: "AI/ML",
      achievements: [
        "Converts long videos to text summaries with speech nature analysis",
        "Detects offensive speech, hate speech, and inappropriate content",
        "Real-time processing capabilities for live video streams",
        "Advanced NLP techniques for accurate speech classification"
      ]
    },
    {
      title: "Customer-facing AI Support Chatbot",
      description: "Intelligent chatbot using AWS Lambda and OpenAI API to handle customer queries with high accuracy.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "AWS Lambda", "OpenAI API", "Chatbot", "NLP"],
      category: "AI/ML",
      achievements: [
        "Awarded 298 out of 300 points in college evaluation",
        "Listed in top 3 projects in college",
        "Handles complex customer queries with high accuracy",
        "Serverless architecture using AWS Lambda"
      ]
    },
    {
      title: "Real-time Retail Reporting Platform",
      description: "Comprehensive retail analytics platform using Airflow DAGs for near-real-time product and customer metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Airflow", "GCP Composer", "BigQuery", "DataProc", "Python"],
      category: "Data Engineering",
      achievements: [
        "Built Airflow-based DAGs for data aggregation",
        "Leveraged GCP Composer + BigQuery + DataProc",
        "Near-real-time ingestion, transformation, and reporting",
        "Scalable architecture for large retail datasets"
      ]
    },
    {
      title: "Population Migration Dashboard",
      description: "Data visualization dashboard for inter-provincial migration analysis using machine learning trend analysis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "Machine Learning", "Data Visualization", "Synthetic Data"],
      category: "Data Science",
      achievements: [
        "Modeled inter-provincial migration patterns",
        "Used synthetic datasets for privacy compliance",
        "Machine learning trend analysis implementation",
        "Interactive dashboard for policy insights"
      ]
    },
    {
      title: "Attendance and Emotion Hybrid System",
      description: "Smart attendance system with emotion detection using computer vision and AI for automated workplace monitoring.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "Computer Vision", "AI", "Face Recognition", "Emotion Detection"],
      category: "AI/ML",
      achievements: [
        "Automated attendance tracking with high accuracy",
        "Real-time emotion detection and recording",
        "No human interference required",
        "Smart workplace monitoring solution"
      ]
    },
    {
      title: "Chat Assistant with RAG",
      description: "Wikipedia-powered chat assistant using OpenAI and Retrieval Augmented Generation for accurate information retrieval.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "OpenAI", "RAG", "Wikipedia API", "NLP"],
      category: "AI/ML",
      achievements: [
        "Wikipedia-powered information retrieval",
        "Retrieval Augmented Generation (RAG) implementation",
        "Real-time accuracy and responsiveness",
        "Advanced NLP for natural conversations"
      ]
    },
    {
      title: "Mask Detection System",
      description: "Real-time face mask detection system using YOLOv5 for pandemic safety compliance in public spaces.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "YOLOv5", "Computer Vision", "Real-time Detection"],
      category: "Computer Vision",
      achievements: [
        "Real-time mask detection using webcam",
        "YOLOv5 implementation for high accuracy",
        "Pandemic safety compliance solution",
        "Automated entry control system"
      ]
    },
    {
      title: "Spam Mail Detection",
      description: "Machine learning model for classifying emails as spam or legitimate using advanced NLP techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      technologies: ["Python", "Machine Learning", "NLP", "Email Classification"],
      category: "AI/ML",
      achievements: [
        "Accurate spam vs legitimate email classification",
        "Advanced NLP feature extraction",
        "High precision and recall metrics",
        "Real-time email processing capability"
      ]
    }
  ];

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  return (
    <ProjectsContainer id="projects">
      {/* Reduced floating particles for better performance */}
      {[...Array(10)].map((_, i) => (
        <FloatingParticle
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      
      <SectionSubtitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Explore my latest work showcasing innovative solutions and cutting-edge technologies
      </SectionSubtitle>

      <ProjectsGrid
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              rotateX: 5,
            }}
          >
            <ProjectContent>
              <ProjectImage>
                <LazyImage 
                  src={project.image} 
                  alt={project.title}
                  loaded={loadedImages[index]}
                  onLoad={() => handleImageLoad(index)}
                  loading="lazy"
                />
              </ProjectImage>
              
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 