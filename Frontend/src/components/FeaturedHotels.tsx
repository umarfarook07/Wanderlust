import { MainHeading, SubHeading } from "./SideHeading"
import SimplePreview from "./SimplePreview"
import Australia from '../assets/Australia.png'
import Japan from '../assets/Japan.png'
import NewZealand from '../assets/NewZealand.png'
import Greece from '../assets/Greece.png'
import { memo } from "react"
const FeaturedHotels = memo(() => {
    return (
        <section>
            <MainHeading heading={'Enjoy Your Dream Vaction'} />
            <SubHeading heading={'Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us'} />
            <div className="flex justify-between">
                <SimplePreview imageSrc={Australia} name={'Austrila'} properties={200} />
                <SimplePreview imageSrc={Japan} name={'Japan'} properties={270} />
                <SimplePreview imageSrc={NewZealand} name={'New Zealand'} properties={200} />
                <SimplePreview imageSrc={Greece} name={'Greece'} properties={200} />
            </div>
        </section>
    )
});

export default FeaturedHotels