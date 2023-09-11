import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between mx-4 px-4 border-b-2 items-center'>
            <h1 className='text-4xl font-bold'>knowledge-cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;