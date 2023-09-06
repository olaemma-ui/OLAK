import blog1 from "../asset/img/blog/blog-1.jpg";
import blog2 from "../asset/img/blog/blog-2.jpg";
import blog3 from "../asset/img/blog/blog-3.jpg";
import blog4 from "../asset/img/blog/blog-4.jpg";
import blog5 from "../asset/img/blog/blog-5.jpg";
import blog6 from "../asset/img/blog/blog-6.jpg";

import larry from '../asset/img/larry.jpg';
import pastor from '../asset/img/pastor.jpg';
// import abs from '../asset/img/abs.jpg';
import samson from '../asset/img/samson.jpg';
import dabira from '../asset/img/dabira.jpg';
import blessed from '../asset/img/blessed.jpg';
import absam from '../asset/img/absam.jpg';
import olamma from '../asset/img/olaemma.jpg';


const services = [
    {
        'title': 'Web Development',
        'icon': 'fa-code',
        'summary': 'Website & Web Application Development',
        'link':'',
        'content': [
            'Website Design',
            'Web Application ',
            'Website Service (API)',
        ]
    },

    {
        'title': 'Mobile Application Development',
        'icon': 'fa-mobile-alt',
        'summary': 'Android & IOS Application Development',
        'link':'',
        'content': [
            'Android Application',
            'IOS Application',
        ]
    },

    {
        'title': 'Desktop Application Development',
        'icon': 'fa-desktop-alt',
        'summary': 'Cross Platform Desktop Application',
        'link':'',
        'content': [
            'Windows OS',
            'Linux OS',
            'MAC OS',
        ]
    },

    {
        'title': 'Data Analysis',
        'icon': 'fa-analytics',
        'summary': 'Data analysis with python and .....',
        'link':'',
        'content': [
            '--- --- --- ---',
            '--- --- --- ---',
            '--- --- --- ---',
        ]
    },
    
    {
        'title': 'It Consultation',
        'icon': 'fa-question',
        'summary': '----- ----- ------',
        'link':'',
        'content': [
            '--- --- --- ---',
            '--- --- --- ---',
            '--- --- --- ---',
        ]
    },

    {
        'title': 'Code Hamlet',
        'icon': 'fa-graduation-cap',
        'summary': 'SIWES & Internship Program (WEB, MOBILE, DESKTOP & PYTHON)',
        'link':'/codehamlet',
        'content': [
            '3 months paid internship',
            '3 months SIWES (Student Industrial Working Experience Scheme)',
            'Learn Softare Development',
        ]
    }
];

const skills = [
    {
        'title': 'Web Design',
        'name': 'Frontend Development',
        'content': `Learning the basics of web designing is a great start, gives you a better insight of the industry requirement.`,
        'img': blog1
    },

    {
        'title': 'Web Development',
        'name': 'Backend Development',
        'content': `Web development (Backend) is 1 of the most highly demand skill in the industry.`,
        'img': blog2
    },

    {
        'title': 'Desktop Development',
        'name': 'Desktop Application Development',
        'content': `Learn to build desktop application, Most organizations needs desktop application to perform some complex task.`,
        'img': blog3
    },
    
    {
        'title': 'Mobile Development',
        'name': 'Mobile Application Development',
        'content': `Mobile app development is 1 one of the most highly demand skills in the industry today.`,
        'img': blog4
    },

    {
        'title': 'Product Design (UI/UX)',
        'name': 'UI / UX Design',
        'content': `Learn to understand user needs and present a 
                    simple to use design of the product before development.`,
        'img': blog5
    },


    {
        'title': 'Data Analysis',
        'name': 'Python Data Analysis',
        'content': `We offer data analysis with python, where python makes it easier to analyze your data.`,
        'img': blog6
    },
]

const contacts = [
    {
        'href':'tel+',
        'title':'Phone Number',
        'content':'(+234) 810 1995 824',
        'icon': 'fa-phone'

    },

    {
        'href':'mail',
        'title':'Email Address',
        'content':'info@olaktech.com.ng',
        'icon': 'fa-envelope'
    },
    {
        'href':'mail',
        'title':'Email Address',
        'content': `N0 10 ICT odunjo street, off Onikoko Adigbe panseke Abeokuta Ogun State Nigeria. `,
        'icon': 'fa-map-marker-alt'
    }
];

const navLinks = [
    {'title':'Home', 'link': '', 'id': 'home'},
    {'title':'About', 'link': 'about', 'id': ''},
    // {'title':'Services', 'link': '', 'id': 'services'},
    {'title':'Contact', 'link': 'contact', 'id': 'contact'},
    {'title':'Projects', 'link': 'projects', 'id': ''},
];
const aboutUs = {
    'about': `We are Educational Technology (EduTech) company. 
                We've been providing digital solutions to individuals and business since 2016. Our team is made up of young and energetic innovators 
                who are passionate about making EduTech simple. Over the years we grew within our industry by providing cutting-edge products and 
                services that make better lives possible for everyone around the globe.`,
    'vision': 'To be the most reliable service and product provider and enhance digital products or service.',
    'mission': 'Our goal is to provide our client ith the best service and product at the best possible market price without compromising quality'
}
const aboutService = [

    {
        'title': 'Data Analysis',
        'icon': 'fa-analytics',
        'content': 'Data analysis with python'
    },

    {
        'title': 'IT Consultant',
        'icon': 'fa-question',
        'content': 'Data analysis with python'
    },

];

const projects = [
    {
        'title': 'Project 1 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog1
    },

    {
        'title': 'Project 2 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog2
    },

    {
        'title': 'Project 3 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog3
    },

    {
        'title': 'Project 4 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog4
    },

    {
        'title': 'Projec 5 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog5
    },

    {
        'title': 'Projec 6 Title',
        'about': 'A town hall different from bala blu, blue blu bulaba. broom broom ......',
        'link': 'https://.........',
        'img': blog6
    }
]

const team = [

    {
        'name': 'Oloruntimilehin Kolawole A.',
        'about': `harbours an ardent zeal for EduTech and innovatively creates using modern technologies. 
                    Having extensive knowledge in the technology sector, 
                    I have delivered exceptional software development solutions for clients in the education, ecommerce, and finance industries. 
                    Additionally, I am enthusiastic about producing tech articles and currently hold the position of 
                    Vice-Chairman at the Corp Security International Abeokuta chapter (INFOSEC).`,
        'role': 'System / Software / Technology Analyst / Founder / CEO ',
        'img': pastor,
        'reverse': false,
        'contact': [
            // {
            //     'title': 'Phone Number',
            //     'content': '(+234) 815 2715 095',
            //     'icon': 'fa-phone-alt'
            // },
            // {
            //     'title': 'Email',
            //     'content': 'olaemma4213@gmail.com',
            //     'icon': 'fa-envelope'
            // }
        ],
        'account': [
            {
                'icon': 'fab fa-facebook',
                'link': 'https://facebook.com',
                'color': 'primary'
            },
            {
                'icon': 'fab fa-twitter',
                'link': 'https://twitter.com',
                'color': 'info'
            },
            {
                'icon': 'fab fa-instagram',
                'link': 'https://intagram.com',
                'color': 'danger'
            },
            {
                'icon': 'fab fa-linkedin',
                'link': 'https://linkedin.com',
                'color': 'primary'
            },
        ]
    },
    {
        'name': 'Larry Coded',
        'about': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae tempore ducimus tempora rerum autem maiores totam alias officia dolore, 
                modi eligendi aspernatur, ab impedit optio omnis atque quas vitae explicabo?`,
        'role': 'Chif Operation Officer (COO)',
        'img': larry,
        'reverse': true,
        'contact': [
            // {
            //     'title': 'Phone Number',
            //     'content': '(+234) 815 2715 095',
            //     'icon': 'fa-phone-alt'
            // },
            // {
            //     'title': 'Email',
            //     'content': 'olaemma4213@gmail.com',
            //     'icon': 'fa-envelope'
            // }
        ],
        'account': [
            {
                'icon': 'fab fa-facebook',
                'link': 'https://facebook.com',
                'color': 'primary'
            },
            {
                'icon': 'fab fa-twitter',
                'link': 'https://twitter.com',
                'color': 'info'
            },
            {
                'icon': 'fab fa-instagram',
                'link': 'https://intagram.com',
                'color': 'danger'
            },
            {
                'icon': 'fab fa-linkedin',
                'link': 'https://linkedin.com',
                'color': 'primary'
            },
        ]
    },

    {
        'name': 'Adebiyi Abdulsamad A.',
        'about': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae tempore ducimus tempora rerum autem maiores totam alias officia dolore, 
                modi eligendi aspernatur, ab impedit optio omnis atque quas vitae explicabo?`,
        'role': 'Chief Technology Officer (CTO)',
        'reverse': false,
        'img': absam,
        'contact': [
            {
                'title': 'Phone Number',
                'content': '(+234) 815 2715 095',
                'icon': 'fa-phone-alt'
            },
            {
                'title': 'Email',
                'content': 'olaemma4213@gmail.com',
                'icon': 'fa-envelope'
            }
        ],
        'account': [
            {
                'icon': 'fab fa-facebook',
                'link': 'https://facebook.com',
                'color': 'primary'
            },
            {
                'icon': 'fab fa-twitter',
                'link': 'https://twitter.com',
                'color': 'info'
            },
            {
                'icon': 'fab fa-instagram',
                'link': 'https://intagram.com',
                'color': 'danger'
            },
            {
                'icon': 'fab fa-linkedin',
                'link': 'https://linkedin.com',
                'color': 'primary'
            },
        ]
    },

    
    {
        'name': 'Tejumola Emmanuel O.',
        'about': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae tempore ducimus tempora rerum autem maiores totam alias officia dolore, 
                modi eligendi aspernatur, ab impedit optio omnis atque quas vitae explicabo?`,
        'role': 'Team lead Software Development',
        'reverse': true,
        'img': olamma,
        'contact': [
            {
                'title': 'Phone Number',
                'content': '(+234) 815 2715 095',
                'icon': 'fa-phone-alt'
            },
            {
                'title': 'Email',
                'content': 'olaemma4213@gmail.com',
                'icon': 'fa-envelope'
            }
        ],
        'account': [
            {
                'icon': 'fab fa-facebook',
                'link': 'https://facebook.com',
                'color': 'primary'
            },
            {
                'icon': 'fab fa-twitter',
                'link': 'https://twitter.com',
                'color': 'info'
            },
            {
                'icon': 'fab fa-instagram',
                'link': 'https://intagram.com',
                'color': 'danger'
            },
            {
                'icon': 'fab fa-linkedin',
                'link': 'https://linkedin.com',
                'color': 'primary'
            },
        ]
    },

    
    {
        'name': 'Shotayo Samson A.',
        'about': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae tempore ducimus tempora rerum autem maiores totam alias officia dolore, 
                modi eligendi aspernatur, ab impedit optio omnis atque quas vitae explicabo?`,
        'role': 'Team lead Product and Graphic Design',
        'reverse': false,
        'img': samson,
        'contact': [
            {
                'title': 'Phone Number',
                'content': '(+234) 815 2715 095',
                'icon': 'fa-phone-alt'
            },
            {
                'title': 'Email',
                'content': 'olaemma4213@gmail.com',
                'icon': 'fa-envelope'
            }
        ],
        'account': [
            {
                'icon': 'fab fa-facebook',
                'link': 'https://facebook.com',
                'color': 'primary'
            },
            {
                'icon': 'fab fa-twitter',
                'link': 'https://twitter.com',
                'color': 'info'
            },
            {
                'icon': 'fab fa-instagram',
                'link': 'https://intagram.com',
                'color': 'danger'
            },
            {
                'icon': 'fab fa-linkedin',
                'link': 'https://linkedin.com',
                'color': 'primary'
            },
        ]
    },

    {
        'name': 'Oluwadbira O.',
        'about': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae tempore ducimus tempora rerum autem maiores totam alias officia dolore, 
                modi eligendi aspernatur, ab impedit optio omnis atque quas vitae explicabo?`,
        'role': 'UI/UX Product Designer',
        'img': dabira,
        'reverse': true,
        'contact': [
            // {
            //     'title': 'Phone Number',
            //     'content': '(+234) 815 2715 095',
            //     'icon': 'fa-phone-alt'
            // },
            // {
            //     'title': 'Email',
            //     'content': 'olaemma4213@gmail.com',
            //     'icon': 'fa-envelope'
            // }
        ],
        'account': [
            {
                'icon': 'fab fa-facebook',
                'link': 'https://facebook.com',
                'color': 'primary'
            },
            {
                'icon': 'fab fa-twitter',
                'link': 'https://twitter.com',
                'color': 'info'
            },
            {
                'icon': 'fab fa-instagram',
                'link': 'https://intagram.com',
                'color': 'danger'
            },
            {
                'icon': 'fab fa-linkedin',
                'link': 'https://linkedin.com',
                'color': 'primary'
            },
        ]
    },

    {
        'name': 'Atitebi Blessed',
        'about': `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestiae tempore ducimus tempora rerum autem maiores totam alias officia dolore, 
                modi eligendi aspernatur, ab impedit optio omnis atque quas vitae explicabo?`,
        'role': 'PRO',
        'img': blessed,
        'reverse': false,
        'contact': [
            // {
            //     'title': 'Phone Number',
            //     'content': '(+234) 815 2715 095',
            //     'icon': 'fa-phone-alt'
            // },
            // {
            //     'title': 'Email',
            //     'content': 'olaemma4213@gmail.com',
            //     'icon': 'fa-envelope'
            // }
        ],
        'account': [
            {
                'icon': 'fab fa-facebook',
                'link': 'https://facebook.com',
                'color': 'primary'
            },
            {
                'icon': 'fab fa-twitter',
                'link': 'https://twitter.com',
                'color': 'info'
            },
            {
                'icon': 'fab fa-instagram',
                'link': 'https://intagram.com',
                'color': 'danger'
            },
            {
                'icon': 'fab fa-linkedin',
                'link': 'https://linkedin.com',
                'color': 'primary'
            },
        ]
    },
];


export {services, contacts, navLinks, aboutService, projects, skills, team, aboutUs};