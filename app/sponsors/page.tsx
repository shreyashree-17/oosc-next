'use client';
import React from 'react';

import sponsorList from "../../src/utils/sponsorList";

const Sponsors: React.FC = () => {
    return(
        <div className="my-[22vh]">
            {sponsorList.map((category, keyy) => (
                <div key={keyy} className="text-center md:mx-60">
                    <h2 className='mt-28'>{category.type}</h2>
                    <div className="md:flex md:flex-wrap grid justify-center items-center place-items-center gap-20">
                    {category.members.map((org, orgKey) => (
                        <a key={orgKey} className="" href={org.site}>
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