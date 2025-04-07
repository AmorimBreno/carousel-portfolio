import { motion, useAnimate } from "framer-motion"

export default function Experience() {

    const ExpList = [{title :"Dev. Community Mauá",start:2021,finish:2024},{title : "Vivo [Telefônica Brasil]",start:2023,finish:0}, {title :"Your company?",start:0,finish:0}]

    return (
    <div className=" ">
        {ExpList.map((exp,index)=> (
            <ExperienceCard title={exp.title} start={exp.start} finish={exp.finish} />
        ))}
    </div>
    )
}

export function ExperienceCard(exp: {title: string, start:number , finish:number}) {

    return (
    <motion.div whileHover="hovered" initial="initial" className=" h-24 w-full border-black border-t border-x last:border-b  overflow-hidden relative">
        <motion.div variants={{
            initial: {y:0},
            hovered: {y:"-100%"}
        }} className="items-center flex justify-between p-4 h-full "> 
            <h1 className="text-2xl">{exp.title}</h1>
            <h1 className="text-2xl">{exp.start}/{exp.finish}</h1>
        </motion.div>
        <motion.div variants={{
            initial: {y:"100%"},
            hovered: {y:0}
        }} className="items-center flex justify-between p-4 h-full bg-yellow-400 absolute inset-0"> 
            <h1 className="text-2xl">{exp.title}</h1>
            <h1 className="text-2xl">{exp.start}/{exp.finish}</h1>
        </motion.div>
    </motion.div>)
}