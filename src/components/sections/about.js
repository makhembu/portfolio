import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
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

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    .img {
      position: relative;
      border-radius: var(--border-radius);
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: none; /* Hide the pseudo-elements to remove the green line */
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
              Hi there! I'm Brian, a passionate web developer with a knack for creating user-centered digital solutions. My journey in web development kicked off back in 2014 with WordPress, and I've been hooked ever since.
            </p>

            <p>
              Over the years, I've had the opportunity to work with some amazing teams and companies. At <a href="https://aventus.com/">Aventus</a>, I led a project that boosted user engagement by 30% through a new customer service platform. My time at <a href="https://dalberg.com/">Dalberg Research</a> was particularly impactful, where I developed data visualizations that helped shape key policy decisions during the COVID-19 pandemic. Working with <a href="https://www.competentbrian.com">Competent Brian</a>, I created bespoke websites that increased client traffic by 40%, and at <a href="https://notifylogistics.com/">Notify Logistics</a>, I developed an automated system that cut operational costs by 25%.
            </p>

            <p>
              As a freelancer, I've tackled a variety of projects, from custom e-commerce sites that boosted sales by 50% to mobile app interfaces that received rave reviews for usability. My clients value my ability to deliver high-quality, timely solutions tailored to their specific needs.
            </p>

            <p>
              These days, I'm focused on pushing the boundaries of what's possible with AI and continuing to expand my skills in computer security. I'm always on the lookout for exciting new challenges where I can make a meaningful impact.
            </p>

            <p>Here are some of the technologies I work with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            {/* Image removed */}
          </div>
        </StyledPic>
      </div>
      <p>If you're interested in collaborating or just want to chat about tech, feel free to <a href="mailto:makhembu.brian@gmail.com">get in touch</a>.</p>
    </StyledAboutSection>
  );
};

export default About;
