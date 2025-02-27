import websiteImg1 from '../assets/portfolio.jpg';
import websiteImg2 from '../assets/weather.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Portfolio Website',
                link: 'https://github.com/SIVA-1116/Personal-Portfolio.git'
            },
            {
                image: websiteImg2,
                description: 'A Simple weather Calculation fetching from API',
                link: 'https://github.com/SIVA-1116/WeatherCalculation.git'
            }
        ]
    }

    return <section id='projects' className="flex flex-col py-20 px-5 justify-center items-center bg-primary text-white">
    <div className="w-full text-center">
        <div className="px-10 py-5">
            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] mx-auto font-bold">Projects</h1>
            <p>These are some of my best projects. I have built them using React, MERN stack, and Tailwind CSS. Check them out!</p>
        </div>
    </div>
    <div className="w-full flex justify-center">
        <div className='flex flex-col md:flex-row gap-5 items-center'>
            {config.projects.map((project, index) => (
                <div key={index} className='relative flex flex-col items-center'>
                    <img className='h-[200px] w-[500px] object-cover' src={project.image} alt="Project Image" />
                    <div className='project-desc text-center mt-3'>
                        <p className='px-5 py-3'>{project.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={project.link} rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

}