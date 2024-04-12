import React from 'react';

import Banner from './Banner';
import AboutSmallComp from './AboutSmallComp';
import SubAbout from './SubAbout';
function About() {
  return (
    <>
      <Banner Titele="من نحن" class={true} dec="تعلم بافضل الطرق مع اكفأ المعلمين في كافة المواد لضمان اعلي النتائج" classbanner="bannerAbout"/>
      <AboutSmallComp title={true} image={true} />
      <SubAbout />
      <AboutSmallComp title={false} image={false} />
    </>

  )
}

export default About