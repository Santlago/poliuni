'use client'

import { AboutSection } from './sections/AboutSection'
import { LandingSection } from './sections/LandingSection'
import { MeetingsSection } from './sections/MeetingsSection'
import { StatsSection } from './sections/StatsSection'

export default function Home() {

  return (
    <div className='py-4'>
      <LandingSection />
      <StatsSection />
      <div className='bg-base-200'>
        <AboutSection />
      </div>
      <MeetingsSection />
    </div>
  )
}
