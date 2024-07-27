import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  width: 100%;
  max-width: none;
  padding: 0 20px;
  margin: 0 auto;

  .inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    width: 100%;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  p:last-child {
    margin-bottom: 20px; /* Add spacing between the skills list and the last paragraph */
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = [
    'JavaScript',
    'React',
    'Angular',
    'Vue.js',
    'Node.js',
    'SQL',
    'NoSQL (MongoDB)',
    'AWS',
    'Azure',
    'Google Cloud Platform',
    'Cybersecurity',
    'Machine Learning',
    'Data Visualization',
    'HTML',
    'CSS',
    'Communication',
    'Collaboration',
    'Problem-Solving',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            My name is Brian Makhembu, and I specialize in developing user-centered web solutions. I began my career in web development in 2014 with WordPress and have since expanded my expertise across various technologies. </p>

            <p>
            During my tenure at Aventus, I provided technical support across various IT campaigns, ensuring smooth operations and resolving technical issues promptly. At Dalberg Research, I played a key role in creating data visualizations that informed policy decisions during the COVID-19 pandemic. At Competent Brian, I designed bespoke websites that increased client traffic by 40%, and at Notify Logistics, I developed an automated logistics system that reduced operational costs by 25%.
            </p>

            <p>
            As a freelancer, I have worked on diverse projects, consistently delivering high-quality and timely solutions. My clients appreciate my ability to enhance user engagement, improve operational efficiency, and provide innovative digital experiences.</p>

            <p>
            Currently, I am focused on leveraging artificial intelligence to develop advanced digital experiences. I am also expanding my knowledge in computer security and actively seeking opportunities to contribute to impactful projects.</p>

            <p>Here are some of the technologies I am proficient in:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
      <p style={{ marginTop: '20px' }}>
        If If you are interested in collaborating or would like to discuss my work further, please <a href="mailto:makhembu.brian@gmail.com">get in touch</a>.
      </p>
    </StyledAboutSection>
  );
};

export default About;
