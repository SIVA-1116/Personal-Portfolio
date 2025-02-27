import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'I am a pre-final year B.E. CSE student aspiring for a Full-Stack Developer role.',
        social: {
            github: 'https://github.com/SIVA-1116',
            instagram: 'https://www.instagram.com/sivaprakash__11?igsh=MW1uMDE2dW1qa3M1bQ==',
            linkedin: 'https://in.linkedin.com/company/jvl-code'
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className=' text-white text-6xl font-hero-font'>
                    Hi, <br/> I'm <span className='text-black'>Sp</span> Siva 
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a href={config.social.github} className='pr-5 hover:text-white'>
                        <AiOutlineGithub size={40} />
                    </a>
                    <a href={config.social.instagram} className='pr-5 hover:text-white'>
                        <AiOutlineInstagram size={40} />
                    </a>
                    <a href={config.social.linkedin} className='hover:text-white'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} />
        </section>
    );
}