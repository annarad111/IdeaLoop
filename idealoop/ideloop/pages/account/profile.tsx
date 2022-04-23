export default function Profile(){

    const currentUser = window.localStorage.getItem('user');
    return(
        <>
        <h1>Hello {currentUser}</h1>
        </>
    )
}