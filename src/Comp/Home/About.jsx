import React from 'react'
import "./about.css"
function About() {
  return (
    <div className="about">

      <div className="right">

        <h3>من نحن</h3>
        <p>نحن نخبة كبية من المعلمين المتخصصين في كافة المجالات مثل اللغة العربية والرياضيات والفيزياء والانجليزي والفرنساوي والالماني وغيرها من المواد قررنا ان نوفر الوقت والجهد علي طلابنا بتقديم افضل الشروحات باعلي جودة وتقديم حلول لكل الاسئلة المهمة وحل جميع بنوك الاسئلة وكل ما يخص المادة التعليمي لتاهيلك للحصول علي اعلي الدرجات</p>

      </div>
      <div className="left">
        <img src={require("../../Image/about1.webp")} alt="" />
      </div>

    </div>
  )
}

export default About