'use client'

import { AboutSection } from './sections/AboutSection'
import { LandingSection } from './sections/LandingSection'
import { MeetingsSection } from './sections/MeetingsSection'
import { StatsSection } from './sections/StatsSection'

export default function Home() {

  return (
    <div className='p-4'>
      <LandingSection />
      <StatsSection />
      <AboutSection />
      <MeetingsSection />
    </div>
  )
}
