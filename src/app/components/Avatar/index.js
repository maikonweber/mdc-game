import Image from "next/image"

const AvatarCompoent = () => {
    const arrayAvatar = [{
        url : "https://avatars.githubusercontent.com/maikonweber",
        class: "Develop"
    }
]

    return (
        <div className="flex bg-white p-2 w-fit bg-gradient-to-r from-white to-blue-200 rounded-full shadow-md">
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/maikonweber" alt="Avatar Image"/>         
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/chegos" alt="Avatar Image"/>         
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/fbatisteti" alt="Avatar Image"/>         
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/PedroSchene" alt="Avatar Image"/>         
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/paulodinizlima" alt="Avatar Image"/>         
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/FogacaDev" alt="Avatar Image"/>         
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/rlucascc" alt="Avatar Image"/>         
        <Image className="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/lucaspetean" alt="Avatar Image"/>         
    </div>
    )
}

export default AvatarCompoent
