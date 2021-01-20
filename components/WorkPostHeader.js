import Related from './Related'

export default function WorkPostHeader({ title, description, skills }) {
    return (
        <div className='post-header'>
            <div className='row'>
                <div className='col-8 col-12-medium'>
                    <h1>{title}</h1>
                    {description && <p className='description'>{description}</p>}
                </div>

                <div className='col-4 col-12-medium'>
                    <h2>Built Using</h2>
                    <Related items={skills} />
                </div>
            </div>

            <style jsx>{`
                h1 { margin-bottom: 0 }
                h2 { margin-bottom: 18px }
            `}</style>
        </div>
    )
}