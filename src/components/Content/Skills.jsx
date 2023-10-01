import Container from "../Shared/Container";
import { FaHtml5, FaCss3, FaReact, FaBootstrap,FaGitAlt, FaNode, FaGithub } from 'react-icons/fa';
import {SiTailwindcss, SiExpress, SiFirebase,SiMongodb, SiJavascript} from 'react-icons/si'

const Skills = () => {
    return (
        <div className="my-10">
            <Container>
                <h1 className="text-5xl font-Pacifico text-center my-5">Skills</h1>
                <div className="md:grid md:grid-cols-5 grid grid-cols-3 items-center gap-10 justify-center my-10">
                    <FaHtml5 className="w-20 h-20 text-orange-500"/>
                    <FaCss3 className="w-20 h-20 text-cyan-500"/>
                    <SiJavascript className="w-20 h-20 text-yellow-300"/>
                    <FaReact className="w-20 h-20 text-cyan-600"/>
                    <FaBootstrap className="w-20 h-20 text-purple-600"/>
                    <SiTailwindcss className="w-20 h-20 text-blue-800"/>
                    <FaNode className="w-20 h-20 text-green-700"/>
                    <FaGithub className="w-20 h-20"/>
                    <FaGitAlt className="w-20 h-20"/>
                    <SiExpress className="w-20 h-20"/>
                    <SiFirebase className="w-20 h-20 text-yellow-400"/>
                    <SiMongodb className="w-20 h-20 text-green-600"/>
                </div>
            </Container>
        </div>
    );
};

export default Skills;