import dynamic from 'next/dynamic';
import React from 'react'

const Chart = dynamic(
    () => import("@/components/Steam").then((mod) => mod.Steam),
    {
        ssr: false,
    }
);


const DashboardPage = () => {
    return (
        <div className='p-20'>
            <Chart />
        </div>
    )
}

export default DashboardPage