import python from "../assets/python.png";
import html from "../assets/html.png"
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png"

type Skills = {
    name:string,
    img: string,

}

export const skills: Skills[] = [
    {name:"Python",img:python},
    {name: "Html",img:html},
    {name: "JavaScript",img:javascript},
    {name: "React",img:react},
    {name: "Mongo DB",img:mongo},
    {name: "CSS",img:css},
    {name: "Tailwind",img:tailwind},
    {name: "TypeScript",img:typescript}]

