// MainContent.js
import React from 'react';
import IntroSection from './IntroSection';
import WorkSection from './WorkSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import HireSection from './HireSection';


function MainContent() {
    return (
        <>
            <IntroSection />
            <WorkSection />
            <AboutSection />
            <ContactSection />
            <HireSection />
        </>
    );
}

export default MainContent;
