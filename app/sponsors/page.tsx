'use client';
import React from 'react';

import sponsorList from "../../src/utils/sponsorList";

const Sponsors: React.FC = () => {
    return(
        <div className="my-[22vh]">
            {sponsorList.map((category, _) => (
                <div className="text-center">
                    <h2 className='mt-28'>{category.type}</h2>
                    <div className="md:flex grid justify-center items-center place-items-center gap-20">
                    {category.members.map((org, _) => (
                        <a className="" href={org.site}>
                            <img src={org.imgSrc} className='h-52' style={{ height: org.height }} alt="Organization Logo" />
                        </a>  
                    ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sponsors;