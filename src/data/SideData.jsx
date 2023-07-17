import profile from '../assets/profile.png'
import conversation from '../assets/conversation.png'
import community from '../assets/community.png'
import baby from '../assets/baby.png'
import logout from '../assets/logout.png'
import hospital from '../assets/hospital-clinic-icon.png'
import doctor from '../assets/doctor-male-icon.png'
import announce from '../assets/speaker-icon.png'
import vaccine from '../assets/vaccine-icon.png'
import parent from '../assets/parent11.png'
import standard from '../assets/certified-icon.png'
import clinic from '../assets/clinic-icon.png'
import art from '../assets/art.png'
import instru from '../assets/instru12.png'
import service from '../assets/serv.jpg'

export const parentSide= [    
    { png: profile, id: "My Profile", link: "/updateParent" },
    { png: conversation, id: "FAQ", link: "/question" },
    { png: community, id: "Community", link: "/post" },
    { png: baby, id: "My Children", link: "/myBabies" },
    { png: hospital, id: "Hospitals", link: "/hospitals" },
    { png: doctor, id: "Doctors", link: "/allDoctors" },
    { png: announce, id: "Announcements", link: "/announcement" },
    {png:art,id:"Articles",link:'/information'},
    { png: logout, id: "Logout", link: "/user" }
    ]

    export const DoctorSide= [    
        { png: profile, id: "My Profile", link: "/updateDoctor" },
        { png: community, id: "Community", link: "/post" },
        { png: clinic, id: "Clinics", link: "/DoctorClinic" },
        { png: logout, id: "Logout", link: "/user" },
        ]

    export const adminSide= [   
        { png: vaccine, id: "Vaccines", link: "/vaccines" },
        { png: conversation, id: "FAQ", link: "/questionAdmin" },
        { png: hospital, id: "Hospitals Users", link: "/hospitalsUsers" },
        { png: doctor, id: "Doctors Users", link: "/doctorUsers" },
        { png: parent, id: "Parents Users", link: "/parentUsers" },
        { png: standard, id: "Standards", link: "/standard" }
        ,{ png: announce, id: "Announcements", link: "/announce" }
        ,{png:art,id:"Articles",link:'/information'},
        ,{png:instru,id:"instruction",link:'/instruction'},
        { png: logout, id: "Logout", link: "/user" },
        ]
    
        export const HospitalSide= [    
            { png: profile, id: "My Profile", link: "/updateHospital" },
            { png: service, id: "Services", link: "/hospitalservicesDetails" },
            { png: community, id: "Community", link: "/post" },
            { png: logout, id: "Logout", link: "/user" },
            ]