import './App.css'
import { resumeData } from './resumeData.tsx'
import ContactHeader from './contactHeader.tsx'
import HighlightsOf from './highlightsOfQual.tsx'
import Portfolio from './portfolio.tsx'
import ExperienceHistory from './experienceHistory.tsx'
import Education from './education.tsx'

function App() {

  return (
    <>
      <ContactHeader {...resumeData['contact info']} />
      <HighlightsOf qualifications={resumeData['highlights of qualifications']} />
      <Portfolio items={resumeData['portfolio']} />
      <ExperienceHistory items={resumeData['experience history']} />
      <Education items={resumeData['education']} />
    </>
  )
}

export default App
