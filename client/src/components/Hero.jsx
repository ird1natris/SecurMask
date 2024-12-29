import styles from "../style";
import { pic, Landing } from "../assets";
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} w-80% `}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-kaisei Opti font-bold ss:text=[72px] text-[90px]">Secure <br className="sm:block" />
          {" "}
          <span className="bg-purple-gradient">Your Data</span><br />
          {" "}
          With Us</h1>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] text-primary font-semibold mt-8`}>
        Experience seamless data privacy with our web app—mask and unmask files effortlessly, ensuring your sensitive information remains secure while maintaining its analytical value.
      </p>
      <button className="bg-[#872DFB] cursor-pointer text-white w-[150px] h-[40px] rounded-lg ">Read More</button>

    </div>

    <div className="flex-1 pr-2 pl-2 pt-15" style={{ position: 'relative', height: 'auto' }}>
      <img
        src={Landing}
        alt="cloud"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          marginTop: '10px',
          zIndex: 5
        }}
      />
    </div>


  </section>
)


export default Hero

