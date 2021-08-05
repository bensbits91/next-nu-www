import ItemIcon from './ItemIcon'
import { colors } from '../utils/cssvars'

export default function SkillPostHeader({ title, description, slug }) {
    return (
        <div className='post-header'>
            <div className='row'>
                <div className='col-9 col-12-medium'>
                    <h1>{title}</h1>
                    {description && <p className='description'>{description}</p>}
                </div>

                <div className='col-3 col-12-medium'>
                    <ItemIcon slug={slug} size='12em' color={colors.pink} />
                </div>
            </div>
        </div>
    )
}