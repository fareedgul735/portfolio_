import { WHAT_I_DO } from "../lib/Constant";

const About = () => {
  return (
    <div className="container">
      <div className="about-des">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          ducimus accusamus aspernatur id quas magnam consectetur quibusdam
          corporis illum quaerat voluptates, repellat dignissimos sit aliquid
          laboriosam. Aliquam aspernatur modi cum!
        </p>
        <ul>
          <li>
            Age:<span>32</span>
          </li>
          <li>
            Residence:<span>USA</span>
          </li>
          <li>
            Address:<span>California</span>
          </li>
          <li>
            Email:<span>lorem@gmail.com</span>
          </li>
          <li>
            Phone:<span>921334536</span>
          </li>
        </ul>
      </div>
      <div className="whatIDo">
        <div className="information">
          {WHAT_I_DO.map((item, index) => (
            <div>
              <span>{item.icon}</span>
              <h2>{item.heading}</h2>
              <small>{item.des}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
