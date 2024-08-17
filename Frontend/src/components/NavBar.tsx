import { memo } from 'react';
import { Link } from 'react-router-dom';
interface IItems {
    items: string[];
}
const NavBar = memo(({ items }: IItems) => {
    return (
        <div>
            <ul className='flex justify-between mx-2'>
                {items.map(item => <li key={item} className='mx-2'><Link to={item}>{item}</Link></li>)}
            </ul>
        </div>
    )
});
export default NavBar