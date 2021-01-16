import { AiOutlineApi } from 'react-icons/ai'
import {
    DiDatabase,
    DiGitBranch,
    DiGulp,
    DiNpm,
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
    SiSass,
    SiTypescript,
    SiWebpack,
    SiWordpress,
    SiYarn
} from 'react-icons/si'

export default function ItemIcon({ slug, size='1em' }) {
    switch (slug) {
        case 'babel':
            return <SiBabel size={size} />

        case 'css':
            return <FaCss3 size={size} />

        case 'git':
            return <DiGitBranch size={size} />

        case 'github':
            return <SiGithub size={size} />

        case 'graphql':
            return <SiGraphql size={size} />

        case 'gulp':
            return <DiGulp size={size} />

        case 'jquery':
            return <SiJquery size={size} />

        case 'javascript':
            return <SiJavascript size={size} />

        case 'next':
            return <SiNextDotJs size={size} />

        case 'node':
            return <FaNodeJs size={size} />

        case 'npm':
            return <DiNpm size={size} />

        case 'php':
            return <FaPhp size={size} />

        case 'postgresql':
            return <SiPostgresql size={size} />

        case 'react':
            return <SiReact size={size} />

        case 'rest':
            return <AiOutlineApi size={size} />

        case 'sass':
            return <SiSass size={size} />

        case 'spfx':
            return <SiMicrosoftsharepoint size={size} />

        case 'sql':
            return <DiDatabase size={size} />

        case 'sqlite':
            return <DiSqllite size={size} />

        case 'typescript':
            return <SiTypescript size={size} />

        case 'webpack':
            return <SiWebpack size={size} />

        case 'wordpress':
            return <SiWordpress size={size} />

        case 'yarn':
            return <SiYarn size={size} />

        default:
            return <FaChevronRight size={size} />
    }
}