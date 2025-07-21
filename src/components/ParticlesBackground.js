import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-30px) translateX(5px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  animation: ${float} ${props => props.duration}s ease-in-out infinite,
             ${pulse} ${props => props.pulseDuration}s ease-in-out infinite;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  box-shadow: 0 0 ${props => props.size * 2}px ${props => props.color};
  opacity: 0.6;
`;

const ParticlesBackground = () => {
  const particles = [
    { id: 1, size: 3, color: '#00fff0', left: 10, top: 20, duration: 8, pulseDuration: 3 },
    { id: 2, size: 2, color: '#6366f1', left: 20, top: 60, duration: 12, pulseDuration: 4 },
    { id: 3, size: 4, color: '#f59e0b', left: 30, top: 40, duration: 10, pulseDuration: 2 },
    { id: 4, size: 2, color: '#f59e0b', left: 40, top: 80, duration: 15, pulseDuration: 5 },
    { id: 5, size: 3, color: '#00fff0', left: 50, top: 30, duration: 9, pulseDuration: 3 },
    { id: 6, size: 2, color: '#6366f1', left: 60, top: 70, duration: 11, pulseDuration: 4 },
    { id: 7, size: 4, color: '#f59e0b', left: 70, top: 50, duration: 13, pulseDuration: 2 },
    { id: 8, size: 3, color: '#f59e0b', left: 80, top: 25, duration: 7, pulseDuration: 3 },
    { id: 9, size: 2, color: '#00fff0', left: 90, top: 65, duration: 14, pulseDuration: 4 },
    { id: 10, size: 3, color: '#6366f1', left: 15, top: 85, duration: 10, pulseDuration: 2 },
    { id: 11, size: 4, color: '#f59e0b', left: 25, top: 15, duration: 12, pulseDuration: 3 },
    { id: 12, size: 2, color: '#f59e0b', left: 35, top: 75, duration: 8, pulseDuration: 4 },
    { id: 13, size: 3, color: '#00fff0', left: 45, top: 35, duration: 11, pulseDuration: 2 },
    { id: 14, size: 2, color: '#6366f1', left: 55, top: 55, duration: 9, pulseDuration: 3 },
    { id: 15, size: 4, color: '#f59e0b', left: 65, top: 90, duration: 13, pulseDuration: 4 },
    { id: 16, size: 3, color: '#f59e0b', left: 75, top: 10, duration: 10, pulseDuration: 2 },
    { id: 17, size: 2, color: '#00fff0', left: 85, top: 45, duration: 12, pulseDuration: 3 },
    { id: 18, size: 3, color: '#6366f1', left: 95, top: 80, duration: 8, pulseDuration: 4 },
    { id: 19, size: 4, color: '#f59e0b', left: 5, top: 60, duration: 11, pulseDuration: 2 },
    { id: 20, size: 2, color: '#f59e0b', left: 95, top: 5, duration: 14, pulseDuration: 3 }
  ];

  return (
    <BackgroundContainer>
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          size={particle.size}
          color={particle.color}
          left={particle.left}
          top={particle.top}
          duration={particle.duration}
          pulseDuration={particle.pulseDuration}
        />
      ))}
    </BackgroundContainer>
  );
};

export default ParticlesBackground; 