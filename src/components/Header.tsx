
import profilePic from "../assets/HenrisonAvatar.png";

function Header() {
    return (
        <header className="bg-slate-900 text-white text-center py-12">
             <div className="flex justify-center mb-6">
                
            <img
                src={profilePic}
                alt="profile" 
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
        </div>
            <h1 className="text-4xl font-bold">Henrison Okechukwu</h1>

            <p className='mt-3 text-lg text-slate-300'>Cloud Engineer | Software Developer</p>
        </header>
    );
}


export default Header;
