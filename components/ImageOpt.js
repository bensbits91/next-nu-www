export default function ImageOpt({ path, sizeSet = 'full' }) {
    const sizes = {
        full: require(`images/${path}?resize
            &sizes[]=300
            &sizes[]=600
            &sizes[]=1000
        `),

        mid: require(`images/${path}?resize
            &sizes[]=200
            &sizes[]=400
            &sizes[]=750
        `),

        small: require(`images/${path}?resize
            &sizes[]=100
            &sizes[]=200
            &sizes[]=375
        `)
    }

    return (
        <div className='image-container'>
            <img srcSet={sizes[sizeSet].srcSet}
                src={sizes[sizeSet].src} />
        </div>
    )
}