import { Ribbon } from './components/Ribbon/Ribbon';
import { Cover } from './components/Cover/Cover';
import { ContactBar } from './components/ContactBar/ContactBar';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { EducationSection } from './components/Education/EducationSection';
import { Colophon } from './components/Colophon/Colophon';
import { PageFooter } from './components/PageFooter/PageFooter';

/** Single-page editorial portfolio — section order ported from
    direction-12-issue-refined.html. */
export default function App() {
  return (
    <>
      <Ribbon />
      <main>
        <Cover />
        <ContactBar />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <Colophon />
      </main>
      <PageFooter />
    </>
  );
}
