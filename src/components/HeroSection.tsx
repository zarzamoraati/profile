import { DiGithubAlt } from "react-icons/di";

export const HeroSection = () => {
  return (
    <section className="hero align-items-stretch" >
         <div><DiGithubAlt 
         className="hero-icon"
         color="#190a11" style={{width:"100px",height:"200px", padding:"0px"}}/></div>
        <h1>Hello there, I'm Erick </h1>
        <h2>I'm a developer interesting at AI and Programming </h2>
        <div className="hero-bottom">
          <img
           className="img-fluid "
          style={{margin:"10px"}}
          src="https://i.pinimg.com/originals/14/63/79/14637913c9880e3eee0db43d4538c803.png"></img>
        </div>
    </section>
  )
}
