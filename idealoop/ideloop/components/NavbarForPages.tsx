import Link from 'next/link'


export default function NavbarForPages(){
    const currentUser = window.localStorage.getItem('user');
    
    const logOut = async (e) => {
        e.preventDefault();
        window.localStorage.removeItem('user');
        window.location.reload();
    }

    return(
        <>
        <div>
            <div className='navbarfor'>
                <div className='logonavfor' >
                <Link href="/">
                <a className='logonavpages'>IdeaLoop</a>
                </Link>
                </div>
                <div className="topnavfor">
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
                                    <div className='leftlinksforpages'>
                                    <Link href="account/profile">
                                    <a>Profile</a>
                                    </Link>
                                    <Link href="/">
                                    <a onClick={logOut}>Log out</a>
                                    </Link>
                                    </div>
                ):(
                <div className='leftlinksforpages'>
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