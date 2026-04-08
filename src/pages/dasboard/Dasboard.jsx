import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { InstalledAppsContext } from '../../context/InstalledAppsContext';
import useApps from '../../hooks/useApps';

const Dasboard = () => {

    const { installedApps } = useContext(InstalledAppsContext);
    const { apps } = useApps()
    const uninstalledAppsCount = apps.length - installedApps.length;

    const data = [
      { name: "Install", value: installedApps.length, fill: "#8884d8" },
      { name: "Uninstall", value: uninstalledAppsCount, fill: "#83a6ed" },
    ];

    return (
        <div className="container mx-auto flex flex-col justify-center items-center h-screen">
            <h1 className='text-4xl font-bold mb-4'>Install and Uninstall Statistics</h1>
        <PieChart 
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
                />
                <Legend />
                <Tooltip/>
        </PieChart>
      </div>
    );
};

export default Dasboard;