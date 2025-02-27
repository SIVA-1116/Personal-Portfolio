import AboutImg from '../assets/about.png';

export default function About () {
    const config = {
        line1: 'Hi, My name is Sivaprakash s. I am a pre-final year B.E. CSE student, passionate about web development and problem-solving.',
        line2: 'I have experience in building modern web applications using React.js, Tailwind CSS, and the MERN stack.',
        line3: 'I am actively seeking developer role internships to enhance my skills and contribute to impactful projects.'
    };

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}