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
      border-radius: var (--border-radius);
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
              Hey! I'm Brian, and I enjoy creating innovative solutions for the web. My journey in web development began in 2014 with WordPress, sparking my passion for crafting human-centered digital solutions.
            </p>

            <p>
              Throughout my career, I've played pivotal roles in various organizations. At <a href="https://aventus.com/">Aventus</a>, I led a team to develop a customer service platform, resulting in a 30% increase in user engagement. At <a href="https://dalberg.com/">Dalberg Research</a>, I spearheaded a data visualization project during the COVID-19 pandemic, providing critical insights that influenced policy decisions. My work at <a href="https://www.competentbrian.com">Competent Brian</a> saw me designing bespoke websites that increased client traffic by 40%, and at <a href="https://notifylogistics.com/">Notify Logistics</a>, I developed an automated logistics system that reduced operational costs by 25%.
            </p>

            <p>
              As a freelancer, I have worked on diverse projects, from developing custom e-commerce websites for small businesses, increasing their online sales by 50%, to creating user-friendly interfaces for mobile apps that received excellent usability feedback. My clients appreciate my ability to deliver high-quality, timely solutions tailored to their needs.
            </p>

            <p>
              Currently, my focus is on building cutting-edge digital experiences using artificial intelligence. I'm also expanding my knowledge by recently starting a course on Computer Security and am actively seeking new challenges to apply my skills in impactful projects.
            </p>

            <p>Here are a few technologies I am proficient in:</p>
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
      <p>If you're interested in collaborating or learning more about my work, feel free to <a href="mailto:makhembu.brian@gmail.com">get in touch</a>.</p>
    </StyledAboutSection>
  );
};

export default About;
