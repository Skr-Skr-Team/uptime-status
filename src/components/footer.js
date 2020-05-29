import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot" /> 接口制作，检测频率 5 分钟。PoweredBy <Link to="https://github.com/yb/uptime-status" text="Uptime Status" /></p>
        <p>&copy; 2020 <Link to="http://status.co2oc.com/" text="STATUS.CO2OC.COM" /></p>
      </div>
    </div>
  );
}

export default Footer;
