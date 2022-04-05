import { ReactComponent as Moon } from '../assets/icons/moon.svg';
import { StyledHeader } from './styles/Header.styled';

export default function Header () {
    return (
        <StyledHeader>
            <h1>devfinder</h1>
            <div>
                <p>DARK</p>
                <Moon />
            </div>
        </StyledHeader>
    ) 
} 