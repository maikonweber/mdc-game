import Image from "next/image"
import Link from 'next/link';

const AvatarCompoent = () => {
    const arrayAvatar = [{
        url: "https://avatars.githubusercontent.com/maikonweber",
        class: "Develop"
    }
    ]



    return (
        <Link href="/team">
            <div className="flex bg-white p-2 w-fit bg-gradient-to-r from-white to-blue-200 rounded-full shadow-md" >
                <h1> TEAM </h1>
            </div>
        </Link>
    );
}

export default AvatarCompoent
