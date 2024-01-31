import Image from "next/image"

const AvatarCompoent = () => {
    const arrayAvatar = [{
        url : "https://avatars.githubusercontent.com/maikonweber",
        class: "Develop"
    }
]

    return (
        <div class="flex bg-white p-2 w-fit bg-gradient-to-r from-white to-blue-200 rounded-full shadow-md">
        <div>
        <Image class="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/maikonweber" alt="Avatar Image"/>         </div>
       <div>
        <Image class="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/chegos" alt="Avatar Image"/>         </div>
        <div>
        <Image class="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/fbatisteti" alt="Avatar Image"/>         </div>
        <div>
        <Image class="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/PedroSchene" alt="Avatar Image"/>         </div>
        <div>
        <Image class="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/paulodinizlima" alt="Avatar Image"/>         </div>
        <div>
        <Image class="rounded-full ml-5 w-7 h-7 md:w-20 md:h-20" width={50} height={50} src="https://avatars.githubusercontent.com/FogacaDev" alt="Avatar Image"/>         </div>
        
        
    </div>
    )
}

export default AvatarCompoent
