import { IHeading } from './CenterHeading'

const CentreSubHeading = ({heading}:IHeading) => {
    return (
        <div className='w-full flex justify-center text-center'>
            <h4 className='text-base py-2 text-darkGray'>{heading}</h4>
        </div>
    )

}

export default CentreSubHeading