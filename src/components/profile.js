import {ReactComponent as Glass} from '../assets/icons/search.svg';
import profileImg from '../assets/icons/Bitmap.png';
import pin from '../assets/icons/003-pin.svg';
import urlIcon from '../assets/icons/002-url.svg';
import twitter from '../assets/icons/004-twitter.svg';
import office from '../assets/icons/001-office-building.svg';

export default function Profile () {
    return (
        <div>

            {/* search bar for users to input their Github username */}
            
            <div className='search'>
                <Glass />
                <input type='text' id='username' name='username' className='username' placeholder='Search Github username...' />
                <button type='button'>Search</button>
            </div>

            {/* card section with user details */}

            <div className='profile--card'>

                <div className='person--details'>
                    <img src={profileImg} alt="user's profile picture" />

                    <div className='text--details'>
                        <h3>The Octocat</h3>
                        <h4>@octocat</h4>
                        <p>Joined 25 Jan 2011</p>
                    </div>

                    <p className='person--bio'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    </p>
                </div>

                {/* showing stats on their account */}

                <div className='person--stats'>
                    <div className='person--stats--text'><p>Repos</p><span>8</span></div>
                    <div className='person--stats--text'><p>Followers</p><span>3938</span></div>
                    <div className='person--stats--text'><p>Following</p><span>9</span></div>
                </div>

                {/* social icons */}

                <div className='social'>
                    <div className='social--items'>
                        <img src={pin} alt='location icon'/>
                        <p>San Francisco</p>
                    </div>

                    <div className='social--items'>
                        <img src={urlIcon} alt='link icon'/>
                        <a href='#'>https://github.blog</a>
                    </div>

                    <div className='social--items'>
                        <img src={twitter} alt='twitter icon'/>
                        <p>Not Available</p>
                    </div>

                    <div className='social--items'>
                        <img src={office} alt='place of work icon'/>
                        <p>@github</p>
                    </div>
                </div>

            </div>

        </div>
    )
}