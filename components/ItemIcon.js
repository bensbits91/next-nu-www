import {
    AiOutlineApi, AiFillStar
} from 'react-icons/ai'
import { BsChevronDoubleLeft } from 'react-icons/bs'
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
import { MdFavorite } from 'react-icons/md'
import {
    SiBabel,
    SiD3DotJs,
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
    SiVueDotJs,
    SiWebpack,
    SiWordpress,
    SiYarn
} from 'react-icons/si'

export default function ItemIcon({ slug, size = '1em', color = 'inherit' }) {
    switch (slug) {
        case 'babel':
            return <SiBabel size={size} color={color} />

        case 'css':
            return <FaCss3 size={size} color={color} />

        case 'd3':
            return <SiD3DotJs size={size} color={color} />

        case 'git':
            return <DiGitBranch size={size} color={color} />

        case 'github':
            return <SiGithub size={size} color={color} />

        case 'graphql':
            return <SiGraphql size={size} color={color} />

        case 'gulp':
            return <DiGulp size={size} color={color} />

        case 'jquery':
            return <SiJquery size={size} color={color} />

        case 'javascript':
            return <SiJavascript size={size} color={color} />

        case 'next':
            return <SiNextDotJs size={size} color={color} />

        case 'node':
            return <FaNodeJs size={size} color={color} />

        case 'npm':
            return <DiNpm size={size} color={color} />

        case 'php':
            return <FaPhp size={size} color={color} />

        case 'postgresql':
            return <SiPostgresql size={size} color={color} />

        case 'react':
            return <SiReact size={size} color={color} />

        case 'rest':
            return <AiOutlineApi size={size} color={color} />

        case 'sass':
            return <SiSass size={size} color={color} />

        case 'spfx':
            return <SiMicrosoftsharepoint size={size} color={color} />

        case 'sql':
            return <DiDatabase size={size} color={color} />

        case 'sqlite':
            return <DiSqllite size={size} color={color} />

        case 'typescript':
            return <SiTypescript size={size} color={color} />

        case 'vue':
            return <SiVueDotJs size={size} color={color} />

        case 'webpack':
            return <SiWebpack size={size} color={color} />

        case 'wordpress':
            return <SiWordpress size={size} color={color} />

        case 'yarn':
            return <SiYarn size={size} color={color} />

        case 'navup':
            return <BsChevronDoubleLeft size={size} color={color} />

        case 'fav':
            return <MdFavorite size={size} color={color} />

        case 'freq':
            return <AiFillStar size={size} color={color} />

        default:
            return <FaChevronRight size={size} color={color} />
    }
}