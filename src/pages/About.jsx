import { WHAT_I_DO } from "../lib/Constant";

const About = () => {
  return (
    <div className="container  p-4">
      <div className="about-des">
        <h1 className="text-white">About Me</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          ducimus accusamus aspernatur id quas magnam consectetur quibusdam
          corporis illum quaerat voluptates, repellat dignissimos sit aliquid
          laboriosam. Aliquam aspernatur modi cum!
        </p>
        <ul>
          <li className="text-white">
            Age : <span className="text-info">32</span>
          </li>
          <li className="text-white">
            Residence : <span className="text-info">USA</span>
          </li>
          <li className="text-white">
            Address : <span className="text-info">California</span>
          </li>
          <li className="text-white">
            Email : <span className="text-info">lorem@gmail.com</span>
          </li>
          <li className="text-white">
            Phone : <span className="text-info">921334536</span>
          </li>
        </ul>
      </div>
      <div className="whatIDo">
        <div className="information">
          {WHAT_I_DO.map((item, index) => (
            <div>
              <span className="text-info">{item.icon}</span>
              <h2 className="text-white">{item.heading}</h2>
              <small className="text-secondary">{item.des}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
