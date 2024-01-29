import Image from "next/image"

const AvatarCompoent = () => {
    const arrayAvatar = [{
        url : "https://avatars.githubusercontent.com/maikonweber",
        class: "Develop"
    }
]

    return (
        <div class="flex bg-white sm:flex-row p-2 w-fit bg-gradient-to-r from-white to-blue-200 rounded-full shadow-md">
        <div>
        <Image class="rounded-full ml-5 w-20 h-20" width={100} height={100} src="https://avatars.githubusercontent.com/maikonweber" alt="Avatar Image"/> 
        <h2 class="text-sm text-center ml-2 font-semibold"> Develop </h2>
        </div>
       <div>
        <Image class="rounded-full ml-5 w-20 h-20" width={100} height={100} src="https://avatars.githubusercontent.com/chegos" alt="Avatar Image"/> 
        <h2 class="text-sm text-center ml-2 font-semibold"> Develop </h2>
        </div>
        <div>
        <Image class="rounded-full ml-5 w-20 h-20" width={100} height={100} src="https://avatars.githubusercontent.com/fbatisteti" alt="Avatar Image"/> 
        <h2 class="text-sm text-center ml-2 font-semibold"> Develop </h2>
        </div>
        <div>
        <Image class="rounded-full ml-5 w-20 h-20" width={100} height={100} src="https://avatars.githubusercontent.com/PedroSchene" alt="Avatar Image"/> 
        <h2 class="text-sm text-center ml-2 font-semibold"> Develop </h2>
        </div>
        <div>
        <Image class="rounded-full ml-5 w-20 h-20" width={100} height={100} src="https://avatars.githubusercontent.com/paulodinizlima" alt="Avatar Image"/> 
        <h2 class="text-sm text-center ml-2 font-semibold"> Develop </h2>
        </div>
        <div>
        <Image class="rounded-full ml-5 w-20 h-20" width={100} height={100} src="https://avatars.githubusercontent.com/FogacaDev" alt="Avatar Image"/> 
        <h2 class="text-sm text-center ml-2 font-semibold"> Develop </h2>
        </div>
        
        
    </div>
    )
}

export default AvatarCompoent
