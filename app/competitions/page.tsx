'use client';
import React from 'react';

const Hackathon:React.FC = () => {
    return(
        <section className='hackathon-info'>
            <h1 className='text-center mb-20'>Hackathon</h1>
            <div className="mx-20">
                <div className="md:mx-40">
                    <h3 className='font-bold'>Event Description</h3>
                    <p className='text-2xl'>The 12-hour hackathon is an intense and rewarding marathon coding session designed to foster realtime collaboration and competition among participants. This offline event will provide a unique opportunity for developers to work together on-site, tackle challenging problems, and showcase their creativity and technical skills.</p>
                    <p className='text-4xl'>Top 3 submissions get an <strong>internship opportunity at Trumio</strong></p>
                    <p className='text-4xl'>There is an overall prize pool of <strong>Rs 2.5 Lakh</strong></p>
                    {/* <div className="flex gap-10 justify-center">
                        <div className='text-center'>
                        <h3>Prize Pool</h3>
                        <h2>2.5 Lakh</h2>
                        </div>
                        <div className='text-center'>
                        <h3>Top 3 Submissions</h3>
                        <h2 className=' text-3xl'>Internship Opportunity at Trumio</h2>
                        </div>
                    </div> */}
                </div>
                <div className='text-center my-10'>
                    <a href="https://forms.gle/KreL6hYPafjso1q59" className="btn btn-xl">Register Now</a>
                </div>
                <div className="md:flex justify-evenly text-center my-40">
                    <div className='hackBox bg-slate-200 md:w-2/5 p-14 md:p-36 border-2 border-slate-300 my-5'>
                        <h3>Generative AI Hackathon</h3>
                        {/* <p>A unique opportunity to innovate with cutting-edge AI, offering learning, networking, a chance to create impactful solutions and win exciting prizes on the way.</p> */}
                        <p>Problem statements will be released offline in the event.</p>
                        <p><strong>Timings - </strong>26th August, 12:00&nbsp;AM&nbsp;-&nbsp;12:00&nbsp;PM</p>
                    </div>
                    <div className='hackBox bg-slate-200 md:w-2/5 p-14 md:p-36 border-2 border-slate-300 my-5'>
                        <h3>Development Hackathon</h3>
                        <p>Problem statements will be released offline in the event.</p>
                        <p><strong>Timings - </strong>26th August, 12:00&nbsp;AM&nbsp;-&nbsp;12:00&nbsp;PM</p>
                    </div>
                </div>
                <div className='mx-20 text-center'>
                    <h3>Hackathon Sponsors</h3>
                    <div className="md:flex justify-center md:gap-16">
                        <a href="https://trumio.ai/">
                            <img className='md:m-12 my-16' src="/img/logos/trumio_logo.webp" alt="Trumio Logo" />
                        </a>
                        <a href="https://overlayy.com">
                            <img className='md:m-12 my-16' src="/img/logos/overlayy-logo.webp" alt="Trumio Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hackathon;