
import Link from 'next/link';
import Avatar from "@mui/material/Avatar";


export default function Navbar(){
    const currentUser = window.localStorage.getItem('user');
    
    const logOut = async (e) => {
        e.preventDefault();
        window.localStorage.removeItem("user");
        window.location.reload();
    }

    return(
        <>
        <div className="bg-img">
            <div className="container">
                <div className='logonav'>
                <Link href="/">
                <a className='logon'>IdeaLoop</a>
                </Link>
                </div>
                <div className="topnav">
                <Link href="/">
                <a>Home</a>
                </Link>
                <Link href="/forum">
                <a>Forum</a>
                </Link>
                <Link href="/contact">
                <a>Contact</a>
                </Link>
                <Link href="/about">
                <a>About</a>
                </Link>
                </div>
                {currentUser !== null ? (
                                    <div className='topnav'>
                                    
                                    <Link href="account/profile">
                                    <Avatar src="/broken-image.jpg" className='profile' />
                                    {/* <a>Profile</a> */}
                                    </Link>
                                    <Link href="/">
                                    <a onClick={logOut}>Log out</a>
                                    </Link>
                                    </div>
                ):(
                <div className='leftlinks'>
                <Link href="account/login">
                <a>Login</a>
                </Link>
                <Link href="account/register">
                <a>Register</a>
                </Link>
                </div>)}
            </div>
        </div>
        </>
    )
}