import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { SiAngular, SiExpress } from 'react-icons/si';
import { IoLogoReact } from 'react-icons/io5';
import Title from './Title';
const Work = () => {
    return (
        <div id='work' className='md:mb-10 mb-11'>
            <div className='my-10'>
                <Title title='Experiencia' />
            </div>
            <VerticalTimeline
                animate={true}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#7e0000', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #7e0000' }}
                    date="2021 - 2022"
                    iconStyle={{ background: 'red', color: '#fff' }}
                    icon={<SiAngular className='!w-8 !h-8 !-mt-[14.5px] !-ml-[15px]' />}
                >
                    <h3 className="vertical-timeline-element-title font-bold">FullStack Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle font-semibold">Dasser Innovating Solutions</h5>
                    <h4 className="vertical-timeline-element-subtitle">Lima, PE</h4>
                    <p>
                        ✔️ Desarrollador Back-End aplicando C# .NET Core con Entity Framework, NestJs, Spring Boot, NodeJS & ExpressJS.
                        <br />✔️ Desarrollador Front-End aplicando Angular + Typescript; React + NextJs; Bootstrap & Tailwind CSS.
                        <br />✔️ Servicios Cloud con Microsoft Azure.
                        <br />✔️ Bases de datos relacionales (MySQL, SQL Server), y no relacionales (MongoDB).
                        <br />✔️ Desarrollo bajo principios SOLID y Clean Architecture.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#b58900', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid #b58900' }}
                    date="2022 - 2023"
                    iconStyle={{ background: '#b58900', color: '#fff' }}
                    icon={<SiExpress className='!w-8 !h-8 !-mt-[14.5px] !-ml-[15px]' />}
                >
                    <h3 className="vertical-timeline-element-title font-bold">FullStack Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle font-semibold">EXPERIS | Enotria</h5>
                    <h4 className="vertical-timeline-element-subtitle">Lima, PE</h4>
                    <p>
                        ✔️ Desarrollador BackEnd aplicando ExpressJS.
                        <br />✔️ Atendiendo Incidentes y atendiendo requerimientos de los clientes.
                        <br />✔️ Desarrollador FrontEnd aplicando Angular v9+.
                        <br />✔️ Bases de datos no relacionales (MONGODB)
                        <br />✔️ Creación de servicios automatizados usando AWS - Buckets, Lambdas con NodeJS
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#1a76c0', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #1a76c0' }}
                    date="2023 - Presente"
                    iconStyle={{ background: '#1a76c0', color: '#fff' }}
                    icon={<IoLogoReact className='!w-8 !h-8 !-mt-[14.5px] !-ml-[15px]' />}
                >
                    <h3 className="vertical-timeline-element-title font-bold">FullStack Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle font-semibold">Digitalia Tech. | JUNTOZ</h5>
                    <h4 className="vertical-timeline-element-subtitle">Lima, PE</h4>
                    <p>
                        ✔️ Desarrollador BackEnd C# con .NET CORE 6
                        <br />✔️ Aprendiendo .NET Framework
                        <br />✔️ Desarrollador Frontend con React + Vite
                        <br />✔️ Aprendiendo recursos de Microsoft Azure como Funtions, App Services, etc.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Work