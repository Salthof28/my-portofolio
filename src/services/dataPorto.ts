import { ListProject, ProjectMap, WorkExperienceItf } from "@/types/interfaces"

export const listProject: ListProject[] = [
    {
        id: 1,
        slug: "scada-ovenHeater",
        title: "SCADA System Oven Heater and Tea Leaf Dryer Plant",
        img: '/projects/scada/HMI.JPG',
        content: 'Designed and developed a full SCADA system for an Oven Heater and Tea Leaf Dryer plant, integrating ADAM-6015/6060 modules, building a complete HMI with alarm system, OPC communication, database logging, and implementing SCADA standards such as security levels, P&ID documentation, state flow diagrams, and sequential control tables.'
    },
    {
        id: 2,
        slug: "tsunami-wave-detection-iot",
        title: "Tsunami Wave Detection System Based on IoT",
        img: '/projects/wave-detection-iot/preview.png',
        content: 'Designed and developed an IoT-based Tsunami Wave Detection System as a final engineering project, integrating Arduino Nano and Arduino Uno microcontrollers, rotary encoder sensors, and NRF24L01 wireless communication modules to monitor wave-induced buoy movement in real time. The system was designed to acquire sensor data, transmit measurements wirelessly from offshore sensing units to a coastal monitoring station, and store data in Firebase for further analysis.'
    },
    {
        id: 3,
        slug: "dshopper-frontend",
        title: "dShopers",
        img: '/projects/dshopper/Home.png',
        content: 'This project involves the development of a modern e-commerce website, leveraging Next.js technology. The platform is designed to facilitate users in seamlessly browsing, searching, and filtering products across various categories. It enhances the user experience by providing detailed product information and enabling efficient management of a shopping cart. Meanwhile, administrators can maintain product inventory and manage user profiles through a secure dashboard, which ensures protected access via middleware.'
    },
    {
        id: 4,
        slug: "revobank-backend",
        title: "Revobank",
        img: '/projects/revobank/list-api-swagger.png',
        content: 'The RevoBank project is a backend API developed using NestJS, simulating core digital banking functionalities such as user registration, login, money transfers, and transaction tracking. This project was created as part of a backend development course focusing on modern technologies and clean architecture. The aim is to provide a simple yet functional API that can manage user accounts and transactions in a secure environment.'
    },

    {
        id: 5,
        slug: "smafarm-platform",
        title: "Smafarm",
        img: '/projects/smafarm/home.png',
        content: 'The project, titled SmaFarm, is aimed at providing a comprehensive solution for livestock management and care. It addresses the market need for digital platforms that support small and medium farmers by resolving their difficulties in marketing livestock and managing care efficiently. SmaFarm acts as a "one-stop care and marketplace" for livestock, ensuring transparency and trust in high-value transactions.'
    },
    {
        id: 6,
        slug: "werent-prd",
        title: "WeRent - Product Requirement Document Implementation",
        img: '/projects/werent-prd/page-detail.png',
        content: 'Implementation Project is a hands-on project focused on developing user-centered web applications based on PRD guidelines. Supervised by RevoU, the project hones collaboration, problem-solving, and analytical skills to deliver scalable, high-quality solutions aligned with business and user needs.'
    },
    {
        id: 7,
        slug: "tiketq-microservice",
        title: "TiketQ - Microservice Development",
        img: '/projects/tiketq-microservice/Homepage.jpg',
        content: `In a Microservice Development Project (RevoU x TiketQ), I served as a backend developer, focusing on the payment gateway service within a microservices architecture. I defined the Midtrans Port interface for seamless payment gateway integration, establishing strong communication for transaction processing.`
    }
]

export const detailProjects: ProjectMap = {
    1: {
        slug: "scada-ovenHeater",
        title: "SCADA System Oven Heater and Tea Leaf Dryer Plant",
        img: '/projects/scada/HMI.JPG',
        description: 'Designed and developed an IoT-based Tsunami Wave Detection System as a final engineering project, integrating Arduino Nano and Arduino Uno microcontrollers, rotary encoder sensors, and NRF24L01 wireless communication modules to monitor wave-induced buoy movement in real time. The system was designed to acquire sensor data, transmit measurements wirelessly from offshore sensing units to a coastal monitoring station, and store data in Firebase for further analysis. A custom Android application was developed to provide real-time visualization of wave measurements through graphical and tabular displays, while an alert mechanism was implemented to notify users when wave height exceeded predefined thresholds. The project involved embedded programming, sensor integration, wireless telemetry, database connectivity, system testing, and performance validation. Testing in a tsunami simulation environment demonstrated 97.70% measurement accuracy and 99.80% operational stability.',
        roles: ['Designed the SCADA system architecture for the Oven Heater and Tea Leaf Dryer plant.', 'Created technical documentation including BFD, PFD, P&ID, and Loop Diagrams.', 'Integrated ADAM-6015 for analog temperature sensing and ADAM-6060 for digital relay control.', 'Configured Serial/Modbus communication between controllers and the SCADA software.', 'Developed the full Human Machine Interface (HMI), including tagnames, scripts, animations, and interface layout.', 'Implemented an alarm system to detect temperature deviations, equipment faults, and relay issues.', 'Set up OPC communication (OLE for Process Control) for real-time data exchange.', 'Built database logging for temperature trends, alarm history, and operational events.', 'Implemented system security by defining user access levels (operator, supervisor, administrator).', 'Created state flow diagrams and sequential tables to model the operational logic of the oven heater and dryer.'],
        features: ['Real-time monitoring of oven and dryer temperature using ADAM-6015 analog inputs.', 'Digital control of heater relays via ADAM-6060 outputs.', 'Fully interactive HMI with process visualization, animations, and operator controls.', 'Alarm system with real-time fault detection, alarm acknowledgments, and priority levels.', 'OPC-based data communication for reliable integration between controllers and SCADA software.', 'Data logging for temperature trends, alarm history, and operational events stored in a database.', 'User access management with multiple security levels to control system permissions.', 'Sequential operation logic for startup, running, and shutdown phases.', 'State flow visualization that represents process steps and transitions.', 'Standardized SCADA design based on industrial HMI and documentation standards.'],
        images: ["/projects/scada/HMI.JPG", '/projects/scada/Sensor Pengering.JPG', '/projects/scada/Maintenance.JPG', '/projects/scada/Plant Oven.JPG', '/projects/scada/Plant Pengering.JPG', '/projects/scada/Sensor oven.JPG',"/projects/scada/sfd-loop-diagram.png", "/projects/scada/sfd-sistem-umum.png", "/projects/scada/tabel-sequential.png"],
        tech: ['ADAM-6060', 'ADAM-6015', 'SCADA', 'HMI', 'OPC Server']
    },
    2: {
        slug: "tsunami-wave-detection-iot",
        title: "Tsunami Wave Detection System Based on IoT",
        img: '/projects/wave-detection-iot/preview.png',
        description: 'Designed and developed an IoT-based Tsunami Wave Detection System using Arduino Nano, Arduino Uno, rotary encoder sensors, and NRF24L01 wireless communication modules. The system measured buoy displacement caused by wave activity, transmitted sensor data in real time to a Firebase database, and enabled remote monitoring through a custom Android application. An alert mechanism was implemented to notify users when wave height exceeded predefined thresholds. System testing using a tsunami simulation environment achieved 97.70% measurement accuracy and 99.80% operational stability.',
        roles: ['Designed and developed an IoT-based tsunami early warning system using Arduino Nano and Arduino Uno for distributed sensing and monitoring.', 'Integrated a rotary encoder sensor to measure buoy rope displacement caused by wave movement and implemented threshold-based tsunami detection logic.', 'Established wireless communication between offshore sensing units and coastal monitoring stations using NRF24L01 transceivers for real-time data transmission.', 'Developed an automated warning system utilizing buzzer alarms and social media notifications when wave height exceeded predefined safety thresholds.', 'Built a cloud-connected monitoring platform using Firebase, enabling real-time storage, visualization, and analysis of wave data through a custom Android application.', 'Developed embedded software in C and backend communication services using Node.js, along with Android application features using Java and Kotlin.', 'Conducted system testing using a tsunami simulation environment, achieving 99.70% measurement accuracy and 99.80% system stability.', 'Produced technical documentation, system architecture diagrams, testing procedures, and performance evaluation reports.'],
        features: ['Real-time wave monitoring using a sensing mechanism', 'Wave height measurement using rotary encoder sensors', 'Wireless data communication using NRF24L01 transceivers', 'Threshold-based abnormal wave detection', 'Automatic buzzer alarm activation', 'Real-time data storage in Firebase', 'Android application for monitoring', 'Wave data visualization through graphs and tables', 'Social media notification integration', ''],
        images: ["/projects/wave-detection-iot/flowchart_process.JPG", "/projects/wave-detection-iot/diagram-blok.png", "/projects/wave-detection-iot/wirlap1.JPG", "/projects/wave-detection-iot/wirlap2.JPG", "/projects/wave-detection-iot/mp.JPG", "/projects/wave-detection-iot/disconect.JPG", "/projects/wave-detection-iot/connect.JPG", "/projects/wave-detection-iot/sstwit.JPG", "/projects/wave-detection-iot/aplikasi_login.JPG", "/projects/wave-detection-iot/realtime-data.JPG", "/projects/wave-detection-iot/list_tanggal.JPG", "/projects/wave-detection-iot/database-wave-detection.JPG", "/projects/wave-detection-iot/database.jpg", "/projects/wave-detection-iot/preview.png"],
        tech: ['Arduino Nano', 'Arduino Uno', 'Rotary Encoder', 'NRF24L01 Wireless Module', 'C', 'Java', 'JavaScript (Node.js)', 'Firebase', 'Android']
    },
    3: {
        slug: "dshopper-frontend",
        title: "dShopers",
        img: '/projects/dshopper/Home.png',
        description: 'This project involves the development of a modern e-commerce website, leveraging Next.js technology. The platform is designed to facilitate users in seamlessly browsing, searching, and filtering products across various categories. It enhances the user experience by providing detailed product information and enabling efficient management of a shopping cart. Meanwhile, administrators can maintain product inventory and manage user profiles through a secure dashboard, which ensures protected access via middleware. The primary goals for this project include creating a user-friendly interface that supports an extensive range of features. These features comprise a comprehensive homepage with highlighted categories, a search-enabled product listing page, and a detailed product page. Additionally, the implementation of the shopping cart includes functionality for quantity updates and a smooth checkout process. It is also crucial to establish a secure authentication system using NextAuth.js, which will facilitate credential-based logins and ensure an appropriate user experience based on roles. The target audience for this e-commerce platform encompasses two main user types: customers and administrators. Customers are individuals looking for a hassle-free online shopping experience, allowing them to view, select, and purchase products easily. Administrators, on the other hand, require comprehensive tools to manage products, including the addition, deletion, and modification of inventory, as well as user management capabilities through restricted access. The project involved extensive planning and execution. Key efforts included designing a user-friendly interface, integrating a secure authentication system, and ensuring a responsive design to provide an optimal shopping experience.',
        roles: ['Developed user-facing features including product listing, detailed product views, and filtering options to improve customer browsing experience.', 'Implemented authentication and custom hooks for access control on protected pages such as user profiles and admin dashboards.', 'Engineered the frontend using Next.js framework, ensuring scalable and maintainable codebase.', 'Established testing protocols with Jest to monitor and enhance frontend application performance and reliability.'],
        features: ['Fully Responsive Design: Built with a mobile-first approach, ensuring seamless experience across all devices', 'Search Engine Optimization: Boosting SEO performance for product listing and home pages to over 85%.', 'User profile management.', 'Middleware: Protect routes from unauthenticated users.', 'Admin Dashboard: Includes product and user management with full CRUD operations.'],
        images: ["/projects/dshopper/ShopPage.png", "/projects/dshopper/ProfileCustomer.png", "/projects/dshopper/ListProductAdmin.png", "/projects/dshopper/PageHandleUsers.png"],
        tech: ['NextJs', 'TailwindCSS', 'ESLint', 'Jest', 'Vercel']
    },
    4: {
        slug: "revobank-backend",
        title: "Revobank",
        img: '/projects/revobank/list-api-swagger.png',
        description: "The RevoBank project is a backend API developed using NestJS, simulating core digital banking functionalities such as user registration, login, money transfers, and transaction tracking. This project was created as part of a backend development course focusing on modern technologies and clean architecture. The aim is to provide a simple yet functional API that can manage user accounts and transactions in a secure environment. By the end of the project, the primary objectives include achieving a fully operational API that supports essential banking operations, ensuring robust user authentication, and allowing users to manage their accounts effectively. Additional goals include deploying the system successfully and providing seamless access for testing, which can be done using tools such as Postman. The target audience for this API consists primarily of developers and businesses looking to integrate banking functionalities into their applications. Furthermore, individual users such as bank account holders who desire to manage their accounts and transactions will also benefit from using this project. The system serves both admins, who manage user accounts and settings, and regular customers, who utilize the banking features. I undertook a structured approach to achieve the project's goals, focusing on detailed planning and iterative testing to implement all banking functionalities efficiently and securely.",
        roles: ['Developed all backend APIs including authentication and transaction processing.', 'Configured response bodies to ensure sensitive data such as passwords and PINs were excluded.', 'Designed and implemented the database schema for the platform', 'Conducted testing to ensure API reliability and security'],
        features: ['User Management: Secure user registration and authentication', 'Password hashing with cyrpto', 'Pin hashing with bcrypt', 'JWT-based authentication system', 'User profile management'],
        images: ["/projects/revobank/erd-database.png", "/projects/revobank/list-api-swagger.png", "/projects/revobank/example-account-api.png"],
        tech: ['NestJs', 'Prisma', 'PostgreSQL', 'TypeScript', 'Git', 'Rest API', 'Swagger', 'Bcrypt', 'Cyrpto', 'Jest']
    },
    5: {
        slug: "smafarm-platform",
        title: "Smafarm Platform",
        img: '/projects/smafarm/home.png',
        description: "The project, titled SmaFarm, is aimed at providing a comprehensive solution for livestock management and care. It addresses the market need for digital platforms that support small and medium farmers by resolving their difficulties in marketing livestock and managing care efficiently. SmaFarm acts as a 'one-stop care and marketplace' for livestock, ensuring transparency and trust in high-value transactions. The primary objectives of this project are to develop a robust platform that facilitates the buying, selling, and care of livestock, ensure transparency in costing transactions through features such as escrow services, and implement a real-time monitoring dashboard that provides users with confidence in managing their livestock. SmaFarm is designed to serve small and medium farmers who face challenges in accessing digital marketing platforms and managing livestock care. It also targets consumers seeking healthy and verified livestock, particularly during festive periods like Idul Adha, as well as investors who are interested in farming opportunities but often struggle to find trustworthy investment platforms.",
        roles: ['Designed user-friendly website interfaces to enhance user experience and accessibility.', 'Developed backend systems and business logic to enable efficient data communication via APIs.', 'Created and managed Supabase database to optimize data management and ensure reliable storage.', 'Conducted thorough testing on both frontend and backend to identify and resolve bugs, improving platform stability.'],
        features: ['Fully Responsive Design: Built with a mobile-first approach, ensuring seamless experience across all devices', 'Livestock and Shelter Catalog', 'Order Tracking', 'User Management: Secure user registration and authentication', 'Password hashing with bcrypt', 'JWT-based authentication system', 'User profile management', 'Livestock and Shelter management: full CRUD operations.', 'Admin Dashboard.'],
        images: ["/projects/smafarm/livestock.png", "/projects/smafarm/shelter.png", "/projects/smafarm/profile.png", "/projects/smafarm/formBuy.png", "/projects/smafarm/dashboardAdmin.png", "/projects/smafarm/dashboard-breeder.png", "/projects/smafarm/ERD-Database.png", "/projects/smafarm/apiList.png"],
        tech: ['NextJs', 'NestJs', 'Prisma', 'PostgreSQL', 'Vercel', 'Railway', 'TypeScript', 'TailwindCSS', 'React', 'Git', 'ESLint', 'Rest API', 'Bcrypt', 'AUTH']
    },
    6: {
        slug: "werent-prd",
        title: "WeRent - Product Requirement Document Implementation",
        img: '/projects/werent-prd/page-detail.png',
        description: "Implementation Project is a hands-on project focused on developing user-centered web applications based on PRD guidelines. Supervised by RevoU, the project hones collaboration, problem-solving, and analytical skills to deliver scalable, high-quality solutions aligned with business and user needs. As a Back-End Team Lead, I broke down complex back-end tasks into manageable tasks, led the team by assigning duties according to each member's strengths, and initialized the framework using NestJS to expedite onboarding. I also designed a database schema and API, created middleware for rate limiting API requests, and implemented logging middleware for activity monitoring. Additionally, I developed custom exception handling and executed thorough back-end testing to ensure reliability before deployment.",
        roles: ['Broke down back-end tasks into manageable items for the development team.', 'Led the back-end development team by assigning specific tasks aligned with each memberU+0060s strengths.', 'Initialized the back-end framework setup using NestJS for improved project structure.', 'Designed a database schema and RESTful API to support application needs.', 'Developed a rate limit middleware to control API request traffic effectively.', 'Implemented a comprehensive logging middleware for monitoring back-end activities.', 'Developed custom exception handling to ensure meaningful error responses.', 'Executed thorough back-end testing to ensure functional reliability and performance with jest.'],
        features: ['Database Design and API Development', 'Rate Limiting', 'Error Handling', 'Automated Testing and Quality Assurance'],
        images: ["/projects/werent-prd/page-detail.png", "/projects/werent-prd/logger-middleware.png", "/projects/werent-prd/test.png"],
        tech: ['NextJs', 'NestJs', 'Prisma', 'PostgreSQL', 'Railway', 'TypeScript', 'TailwindCSS', 'React', 'Git', 'ESLint', 'Rest API']
    },
    7: {
        slug: "tiketq-microservice",
        title: "TiketQ - Microservice Development",
        img: '/projects/tiketq-microservice/Homepage.jpg',
        description: `In a Microservice Development Project (RevoU x TiketQ), I served as a backend developer, focusing on the payment gateway service within a microservices architecture. I defined the Midtrans Port interface for seamless payment gateway integration, establishing strong communication for transaction processing. I created a reliable HTTP Client Helper to streamline external service communication. Additionally, I implemented the Outgoing Midtrans Snap Request for efficient transaction processing and the Transaction History Endpoint for easy access to records, enhancing user engagement. Finally, I conducted thorough testing for Midtrans integration, ensuring the system operated effectively and minimizing potential errors.`,
        roles: [`Defined the Midtrans Port interface to facilitate seamless integration with payment gateways, ensuring robust communication lines for transaction processing.`, `Created a reliable HTTP Client Helper infrastructure, enhancing the application's capability to handle various HTTP requests, which streamlined communication with external services.`, `Implemented the Outgoing Midtrans Snap Request, resulting in efficient processing of transaction data.`, `Implemented the Transaction History Endpoint to provide users with accessible records of their transactions, thereby improving user experience and engagement.`, `Conducted thorough testing of transactions for Midtrans integration, ensuring the system operated effectively and minimizing potential errors`],
        features: ['Midtrans Port Interface', 'HTTP Client Helper', `Error Mapping`, `Retry Request with Limits`, 'Outgoing Midtrans Snap Request', 'Transaction History Endpoint'],
        images: ["/projects/tiketq-microservice/Homepage.jpg", "/projects/tiketq-microservice/search-result-page.jpg", "/projects/tiketq-microservice/not-found-search.jpg", "/projects/tiketq-microservice/result-search.jpg", "/projects/tiketq-microservice/booking-data.jpg", "/projects/tiketq-microservice/review.jpg", "/projects/tiketq-microservice/payment.jpg"],
        tech: ['NestJs', 'TypeORM', 'PostgreSQL', 'TypeScript', 'Git', 'ESLint', 'Rest API', `Hexagonal Architecture`, `Nx Workspace`, `Midtrans`, `Docker`]
    },
}

export const workExperience: WorkExperienceItf[] = [
    {
        id: 1,
        name: 'PT Bio Farma . Aug 2022 - Aug 2024',
        position: 'Field Operations Staff',
        location: 'Bandung, Indonesia',
        status: 'Contract',
        image: 'work/biofarma.png',
        overview: 'As a Field Operations Staff (SCADA Operator) at PT Bio Farma, I ensured reliable operation of pressure vessel systems by monitoring production parameters and performing disinfection, CIP, and sterilization processes. I also managed production documentation, verified data compliance, and troubleshot pressure vessel and SCADA issues to maintain production efficiency.',
        achievements: ['Controlled and monitored pressure vessel tank processes during production, reducing production deviations by 90% by using real-time SCADA monitoring to track key production and cleaning parameters.', 'Prepared and compiled production document requirements, increasing compliance by 90% and reducing production deviations by 60% through creating standardized production forms with clear guidelines for operators.', 'Reviewed data from disinfection, CIP, sterilization, and production processes to reduce inconsistencies in subsequent production by 90%, by manually analyzing real-time data and collaborating with supervisors to address deviations.', 'Troubleshot initial issues on pressure vessel tanks and SCADA systems, decreasing equipment downtime by 95% by conducting pressure checks and analyzing SCADA data to detect anomalies early.'],
        res: ['Controlled and monitored pressure vessel tank processes during production, as well as monitored and executed disinfection, Clean in Place (CIP), and sterilization procedures on pressure vessels to ensure process integrity and product quality.', 'Compiled and prepared production document requirements.', 'Reviewed data from disinfection, CIP, sterilization, and production processes to ensure compliance with quality standards.', 'Troubleshot initial issues on pressure vessel tanks and SCADA systems to minimize downtime and maintain production flow.'],
        tech: ['SCADA', 'PLC', 'MySQL', 'Microsoft Office']
    }
]

// overview
// roles
// feature
// ss