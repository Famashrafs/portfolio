import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import alx from "../images/alx.png";
import meta from "../images/Meta.png";
import google from "../images/Google.png";
import ibm from "../images/IBM.png";

const certificates = {
    alx: [
        {
            image: require('../images/certificates/alx.JPG'),
            title: 'Certificate from ALX',
            description: '',
            link:"https://intranet.alxswe.com/dashboards/my_curriculums"
        }
    ],
    meta: [
        {
            image: require('../images/certificates/meta-0.JPG'),
            title: 'Meta Front-End Developer',
            description: '',
            link:"https://www.coursera.org/account/accomplishments/specialization/certificate/FK4N2BWMD5IR"
        },
        {
            image: require('../images/certificates/meta-1.JPG'),
            title: 'Introduction to Front-End Development',
            description: 'Distinguish between front-end, back-end, and full-stack developers .Create and style a webpage with HTML and CSS . The benefits of working with UI frameworks',
            link:"https://coursera.org/verify/W7SSDBGZU2UW"
        },
        {
            image: require('../images/certificates/meta-2.JPG'),
            title: 'Programming with JavaScript',
            description: 'Creating simple JavaScript codes.Creating and manipulating objects and arrays.Writing unit tests using Jest ',
            link:"https://coursera.org/verify/9J2XQNH5UWF6"
        },
        {
            image: require('../images/certificates/meta-3.JPG'),
            title: 'Version Control',
            description: 'Implement Version Control systems.Navigate and configure using the command line.Use a GitHub repository. Create a GitHub repository.Manage code revisions',
            link:"https://coursera.org/verify/85UL5X8DZKBQ"
        },
        {
            image: require('../images/certificates/meta-4.JPG'),
            title: 'HTML and CSS in depth',
            description: 'Create a simple form with a responsive layout using HTML5 and CSS.Create a responsive layout using CSS .Create a UI using Bootstrap. Implement debugging tools',
            link:"https://coursera.org/verify/ZRRCQXSMG9SN"
        },
        {
            image: require('../images/certificates/meta-5.JPG'),
            title: 'React Basics',
            description: 'Use reusable components to render views where data changes over time .Organize React projects to create more scalable and maintainable websites and apps .Use props to pass data between components. Create dynamic and interactive web pages and apps .Use forms to allow users to interact with the app. Build an application in React',
            link:"https://coursera.org/verify/BCGESS6DBV8C"
        },
        {
            image: require('../images/certificates/meta-6.JPG'),
            title: 'Advanced React',
            description: 'Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior .Interact with a remote server and fetch and post data via an API .Seamlessly test React applications with React Testing Library .Integrate commonly used React libraries to streamline your application development',
            link:"https://coursera.org/verify/FMJC47RGWTJC"
        },
        {
            image: require('../images/certificates/meta-7.JPG'),
            title: 'Principles of UX/UI Design',
            description: 'Describe the fundamentals of User Experience (UX) design and research .Describe accessibility considerations in design.Practice developing user empathy through research .Create wireframes and prototypes in Figma',
            link:"https://coursera.org/verify/QCFM2FA8PATP"
        },
        {
            image: require('../images/certificates/meta-8.JPG'),
            title: 'Front-End Developer Capstone',
            description: 'Set up a React application .Commit the project to a Git repository .Plan the UI/UX',
            link:"https://coursera.org/verify/KLKTJ7VKMW9Z"
        },
        {
            image: require('../images/certificates/meta-9.JPG'),
            title: 'Coding Interview Preparation',
            description: 'Grasp the fundamentals of computer science .Recognize the role pseudocode plays in coding interviews .Identify the core components that you will need to prepare for the interview process .Identify strategies for successful interviewing',
            link:"https://www.coursera.org/account/accomplishments/verify/P2GM3RDFHCF2"
        },
    ],
    google: [
        {
            image: require('../images/certificates/google-1.jpg'),
            title: 'Foundations of User Experience (UX) Design',
            description: 'Description of certificate 1 from Google',
            link:""
        },
        {
            image: require('../images/certificates/google-2.jpg'),
            title: 'Start the UX Design Process: Empathize, Define, and Ideate',
            description: 'Description of certificate 2 from Google',
            link:""
        },
    ],
    ibm: [
        {
            image: require('../images/certificates/IBM-1.JPG'),
            title: 'Introduction to Cloud Computing',
            description: 'Define cloud computing .Describe the five essential characteristics of cloud computing .Summarize the history and evolution of cloud computing .Describe the benefits of pay-as-you-go .List the key considerations for cloud computing .List the benefits of cloud computing .Enumerate the challenges of cloud computing .Discuss some common cloud service providers',
            link:"https://www.coursera.org/account/accomplishments/certificate/RHR6JPWXBU6X"
        },
        {
            image: require('../images/certificates/IBM-2.JPG'),
            title: 'Introduction to Web Development with HTML, CSS, JavaScript',
            description: 'Describe what developing a website or Cloud App involves .Recognize some of the terminology that web developers and Cloud App developers use .List the skills that Front-end, Back-end, and Full-stack developers need .Identify the tools that developers use to develop web pages.',
            link:"https://www.coursera.org/account/accomplishments/certificate/GQDN34HGFN8J"
        },
        {
            image: require('../images/certificates/IBM-3.jpg'),
            title: 'Getting Started with Git and GitHub',
            description: 'Define distributed version control .List several tools used for version control including popular Git platforms .Describe basic git concepts and the purpose of repositories .Create a GitHub account and repository .Add/edit files in your repo, and commit changes using the GitHub web interface.',
            link:"https://www.coursera.org/account/accomplishments/certificate/YUS579RHWYXC"
        },
        {
            image: require('../images/certificates/IBM-4.jpg'),
            title: 'Developing Cloud Native Applications',
            description: 'Describe the key elements of cloud computing .Recognize the contribution of the Cloud Native Computing Foundation .Describe hybrid cloud infrastructures and their significance for developers .Discuss ways to modernize legacy applications and enable them to run on the cloud .Explain how continuous integration/continuous development can help developers update and release applications quickly .Classify Cloud Native terminology and concepts.',
            link:"https://www.coursera.org/account/accomplishments/certificate/YMQB25BMZN9S"
        },
        {
            image: require('../images/certificates/IBM-5.jpg'),
            title: 'Developing Cloud Apps with Node.js and React',
            description: 'Compare JavaScript and Node.js .Explain the purpose of the Node.js JavaScript framework .Write a simple web server with Node.js .Explain the concept of asynchronous callback functions .Work with imported Node.js modules',
            link:"https://www.coursera.org/account/accomplishments/certificate/CW45TXVPH2NH"
        }
    ],
};

function Certificates() {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleButtonClick = (company) => {
        setSelectedCompany(company);
    };

    return (
        <div className="certificates" id='certificates'>
            <h1 className="section-title">Certificates</h1>
            <div className="companies">
                <button onClick={() => handleButtonClick('alx')}>
                    <img className="company-logo alx" src={alx} alt="ALX africa" />
                </button>
                <button onClick={() => handleButtonClick('meta')}>
                    <img className="company-logo meta" src={meta} alt="Meta" />
                </button>
                <button onClick={() => handleButtonClick('google')}>
                    <img className="company-logo google" src={google} alt="Google" />
                </button>
                <button onClick={() => handleButtonClick('ibm')}>
                    <img className="company-logo ibm" src={ibm} alt="IBM" />
                </button>
            </div>

            {selectedCompany && (
                <div className="certificates-carousel">
                    <Carousel>
                        {certificates[selectedCompany].map((cert, index) => (
                            <Carousel.Item key={index}>
                                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4">
                                    <img
                                        className="certificate-image"
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{ width: '100%', maxWidth: '500px', height: 'auto', marginRight: '20px' }}
                                    />
                                    <div className="certificate-content">
                                        <h3>{cert.title}</h3>
                                        <ul className="description">
                                            {cert.description.split(".").map((s, i) => s && <li key={i}>{s}</li>)}
                                        </ul>
                                        <a className="certificate-btn" rel="noreferrer" target="_blank" href={cert.link}>Download Certificate</a>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            )}
        </div>
    );
}

export default Certificates;
