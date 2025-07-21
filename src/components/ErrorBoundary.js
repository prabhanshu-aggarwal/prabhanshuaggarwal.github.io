import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiRefreshCw } from 'react-icons/fi';

const ErrorContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
`;

const ErrorContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: #ff4757;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #cccccc;
  line-height: 1.6;
`;

const ErrorDetails = styled.pre`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1rem;
  font-size: 0.8rem;
  color: #ff6b6b;
  text-align: left;
  overflow-x: auto;
  margin-bottom: 2rem;
  max-height: 200px;
  overflow-y: auto;
`;

const RetryButton = styled(motion.button)`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console for debugging
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ErrorContent>
            <ErrorIcon>
              <FiAlertTriangle />
            </ErrorIcon>
            <ErrorTitle>Oops! Something went wrong</ErrorTitle>
            <ErrorMessage>
              We encountered an unexpected error. This might be due to a temporary issue or a browser compatibility problem.
            </ErrorMessage>
            
            {this.state.error && (
              <ErrorDetails>
                <strong>Error:</strong> {this.state.error.toString()}
                {this.state.errorInfo && (
                  <>
                    <br />
                    <strong>Component Stack:</strong>
                    <br />
                    {this.state.errorInfo.componentStack}
                  </>
                )}
              </ErrorDetails>
            )}
            
            <RetryButton
              onClick={this.handleRetry}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiRefreshCw />
              Reload Page
            </RetryButton>
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 