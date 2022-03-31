import { ReactComponent as Moon } from '../assets/icons/moon.svg';

export default function Header () {
    return (
        <header>
            <h1>devfinder</h1>
            <div className='mode'>
                <p>DARK</p>
                <Moon />
            </div>
        </header>
    )
}