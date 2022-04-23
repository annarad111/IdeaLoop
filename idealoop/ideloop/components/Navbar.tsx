import styles from '../styles/globals.css';
import Link from 'next/link'


export default function Navbar(){
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
                <div className='topnav'>
                <Link href="account/login">
                <a>Login</a>
                </Link>
                <Link href="account/register">
                <a>Register</a>
                </Link>
                </div>
            </div>
        </div>
        </>
    )
}