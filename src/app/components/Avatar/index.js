import Image from "next/image"

const AvatarCompoent = () => {
    return (
        <div class="bg-white p-4 rounded-full shadow-md">
        {/* <Image class="rounded-full w-20 h-20" src="your_avatar_image_url.jpg" alt="Avatar Image"/> */}
        <div class="mt-2 text-center">
            <h2 class="text-lg font-semibold">John Doe</h2>
        </div>
    </div>
    )
}

export default AvatarCompoent
