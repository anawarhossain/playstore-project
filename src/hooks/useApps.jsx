import React, { useEffect, useState } from "react";

const useApps = () => {
    const [installedApps, setInstalledApps] = useState([]);
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoading(false);
      }, 2000);

      // setApps(data);
      // setLoading(false);
    };
    fetchData();
  }, []);

  return { apps, loading };
};

export default useApps;
