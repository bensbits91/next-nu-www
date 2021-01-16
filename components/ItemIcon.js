import { AiOutlineApi } from 'react-icons/ai'
import {
    DiDatabase,
    DiGitBranch,
    DiGulp,
    DiNpm,
    DiSass,
    DiSqllite
} from 'react-icons/di'
import {
    FaChevronRight,
    FaCss3,
    FaPhp,
    FaNodeJs
} from 'react-icons/fa'
import {
    SiBabel,
    SiGithub,
    SiGraphql,
    SiJavascript,
    SiJquery,
    SiMicrosoftsharepoint,
    SiNextDotJs,
    SiPostgresql,
    SiReact,
    SiTypescript,
    SiWebpack,
    SiWordpress,
    SiYarn
} from 'react-icons/si'

export default function ItemIcon({ slug }) {
    switch (slug) {
        case 'babel':
            return <SiBabel />

        case 'css':
            return <FaCss3 />

        case 'git':
            return <DiGitBranch />

        case 'github':
            return <SiGithub />

        case 'graphql':
            return <SiGraphql />

        case 'gulp':
            return <DiGulp />

        case 'jquery':
            return <SiJquery />

        case 'javascript':
            return <SiJavascript />

        case 'next':
            return <SiNextDotJs />

        case 'node':
            return <FaNodeJs />

        case 'npm':
            return <DiNpm />

        case 'php':
            return <FaPhp />

        case 'postgresql':
            return <SiPostgresql />

        case 'react':
            return <SiReact />

        case 'rest':
            return <AiOutlineApi />

        case 'sass':
            return <DiSass />

        case 'spfx':
            return <SiMicrosoftsharepoint />

        case 'sql':
            return <DiDatabase />

        case 'sqlite':
            return <DiSqllite />

        case 'typescript':
            return <SiTypescript />

        case 'webpack':
            return <SiWebpack />

        case 'wordpress':
            return <SiWordpress />

        case 'yarn':
            return <SiYarn />

        default:
            return <FaChevronRight />
    }
}