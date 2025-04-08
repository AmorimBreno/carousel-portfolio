import { motion, useAnimate } from "framer-motion"

export default function ExperienceList() {

    const ExpList = [
        {title :"Dev. Community Mauá",start:2021,finish:2024, position:"Desenvolvedor Front-End"},
        {title : "Vivo [Telefônica Brasil]",start:2023,finish:0, position:"Estagiário de TI"},
        {title :"Your company?",start:0,finish:0, position:""}]

    return (
    <div className=" ">
        {ExpList.map((exp,index)=> (
            <ExperienceCard title={exp.title} start={exp.start} finish={exp.finish} position={exp.position}/>
        ))}
    </div>
    )
}

export function ExperienceCard(exp: {title: string, start:number , finish:number, position: string}) {

    return (
    <motion.div whileHover="hovered" initial="initial" className=" h-24 w-full border-black border-t border-x last:border-b  overflow-hidden relative">
        <motion.div variants={{
            initial: {y:0},
            hovered: {y:"-100%"}
            
        }} 
        transition={{type:"linear"}}
        className="items-center flex justify-between p-4 h-full "> 
            <h1 className="text-2xl">{exp.title}</h1>
            <h1 className="text-2xl">{exp.start}/{exp.finish == 0 ? "Atual" : exp.finish}</h1>
        </motion.div>
        <motion.div variants={{
            initial: {y:"100%"},
            hovered: {y:0}  
        }} 
        
        className="items-center flex justify-between p-4 h-full bg-purple-400 absolute inset-0"> 
            <h1 className="text-2xl">{exp.title}</h1>
            <h1 className="text-2xl">{exp.position}</h1>
        </motion.div>
    </motion.div>)
}