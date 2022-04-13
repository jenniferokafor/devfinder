import {ReactComponent as Glass} from '../assets/icons/search.svg';
import { StyledPersonDetails, StyledPersonStats, StyledProfileCard, StyledSearch, StyledSocial } from './styles/Profile.styled';
import profileImg from '../assets/icons/Bitmap.png';
import pin from '../assets/icons/003-pin.svg';
import urlIcon from '../assets/icons/002-url.svg';
import twitter from '../assets/icons/004-twitter.svg';
import office from '../assets/icons/001-office-building.svg';

export default function Profile () {
    return (
        <div>

            {/* search bar for users to input their Github username */}
            
            <StyledSearch>
                <Glass />
                <input type='text' id='username' name='username' placeholder='Search Github username...' />
                <p>No results</p>
                <button type='button'>Search</button>
            </StyledSearch>

            {/* card section with user details */}

            <StyledProfileCard>

                <StyledPersonDetails>
                    <img src={profileImg} alt="user's profile picture" />

                    <div>
                        <h3>The Octocat</h3>
                        <h4>@octocat</h4>
                        <p>Joined 25 Jan 2011</p>
                    </div>

                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    </p>
                </StyledPersonDetails>

                {/* showing stats on their account */}

                <StyledPersonStats>
                    <div><p>Repos</p><span>8</span></div>
                    <div><p>Followers</p><span>3938</span></div>
                    <div><p>Following</p><span>9</span></div>
                </StyledPersonStats>

                {/* social icons */}

                <StyledSocial>
                    <div>
                        <img src={pin} alt='location icon'/>
                        <p>San Francisco</p>
                    </div>

                    <div>
                        <img src={urlIcon} alt='link icon'/>
                        <a href='#'>https://github.blog</a>
                    </div>

                    <div>
                        <img src={twitter} alt='twitter icon'/>
                        <p>Not Available</p>
                    </div>

                    <div>
                        <img src={office} alt='place of work icon'/>
                        <p>@github</p>
                    </div>
                </StyledSocial>

            </StyledProfileCard>

        </div>
    )
} 