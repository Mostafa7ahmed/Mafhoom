import React from 'react'

function AboutSmallComp(props) {
    return (

        <div className="see">
            <div className="seeLetter">
                <h2 > {props.title ? "رويتنا" : "انجازاتنا"} </h2>
                <p>يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة
                    إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر
                    من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد
                    ، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى
                    مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى
                    كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.ومن هنا
                    وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل
                    الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث
                    عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر
                    بشكل لا يليق.</p>

            </div>
            <div className="seeImage">
                <img src={props.image ? require("../../Image/Rectangle-23.webp") : require("../../Image/Rectangle-25.webp")} alt="" />
            </div>

        </div>
    )
}

export default AboutSmallComp