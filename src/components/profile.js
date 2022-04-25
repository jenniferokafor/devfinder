import React, {useState} from 'react';
import {ReactComponent as Glass} from '../assets/icons/search.svg';
import { StyledPersonDetails, StyledPersonStats, StyledProfileCard, StyledSearch, StyledSocial } from './styles/Profile.styled';
import profileImg from '../assets/icons/Bitmap.png';
import pin from '../assets/icons/003-pin.svg';
import urlIcon from '../assets/icons/002-url.svg';
import twitter from '../assets/icons/004-twitter.svg';
import office from '../assets/icons/001-office-building.svg';

export default function Profile () {
    const [user, setUser] = React.useState({
        username: ''
    })

    let [apiNameValue, setApiNameValue] = useState('');

    // API response is saved in this state and rendered in the card component
    const [userData, setUserData] = useState({
        avatarUrl: '',
        name: '',
        login: '',
        createdDate: '',
        bio: '',
        repos: '',
        followers: '',
        following: '',
        location: '',
        blog: '',
        twitter: '',
        company: ''
    });

    const count = 0;
    const [myName, setMyName] =useState('');

    function test () {
        if (count===0) {
            setMyName('jenniferokafor');
        }
    }

    //function to handle change in input from page form
    function handleChange (event) {
        setUser(prevUser => {
            return {
                [event.target.name]: event.target.value
            }
        });
        }
     

    // useEffect function to manage data from github API
    React.useEffect(() => {
        fetch(`https://api.github.com/users/${apiNameValue}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setUserData(prevUserData => {
                    return {
                        ...prevUserData,
                        avatarUrl: result.avatar_url,
                        name: result.name,
                        login: result.login,
                        createdDate: result.created_at,
                        bio: result.bio,
                        repos: result.public_repos,
                        followers: result.followers,
                        following: result.following,
                        location: result.location,
                        blog: result.blog,
                        twitter: result.twitter_username,
                        company: result.company
                    }
                })
            }, 
            (error) => {
                console.log(error);
            })
        }

    , [apiNameValue])

    // function to generate a name value for the API when the submit button is clicked
    function handleClick () {
            setApiNameValue(apiNameValue = user.username)
    }

    console.log(apiNameValue)

    

    // function for submission on the search bar
    function handleSubmit (event) {
            setUser(prevUser => {
                return {
                    [event.target.name]: event.target.value
                }
            });
    }

    function formSubmit (event) {
        event.preventDefault()
    }

    return (
        <div>

            {/* search bar for users to input their Github username */}
            
            <StyledSearch>
                <Glass />
                <input type='text' name='username' placeholder='Search Github username...' 
                onChange={handleChange} value={user.username}/>
                <p>No results</p>
                <button type='submit'  onClick={handleClick}>Search</button>
            </StyledSearch> 

            {/* card section with user details */}

            <StyledProfileCard>

                <StyledPersonDetails>
                    <img src={userData.avatarUrl} alt="user's profile picture" />

                    <div>
                        <h3>{userData.name}</h3>
                        <h4>@{userData.login}</h4>
                        <p>Joined {userData.createdDate}</p>
                    </div>

                    <p>{userData.bio}</p>
                </StyledPersonDetails>

                {/* showing stats on their account */}

                <StyledPersonStats>
                    <div><p>Repos</p><span>{userData.repos}</span></div>
                    <div><p>Followers</p><span>{userData.followers}</span></div>
                    <div><p>Following</p><span>{userData.following}</span></div>
                </StyledPersonStats>

                {/* social icons */}

                <StyledSocial>
                    <div>
                        <img src={pin} alt='location icon'/>
                        <p>{userData.location}</p>
                    </div>

                    <div>
                        <img src={urlIcon} alt='link icon'/>
                        <a href="#">{userData.blog}</a>
                    </div>

                    <div>
                        <img src={twitter} alt='twitter icon'/>
                        <p>{userData.twitter}</p>
                    </div>

                    <div>
                        <img src={office} alt='place of work icon'/>
                        <p>{userData.company}</p>
                    </div>
                </StyledSocial>

            </StyledProfileCard>

        </div>
    )
} 