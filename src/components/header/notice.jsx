import { Megaphone } from "lucide-react"

export function Notice() {
    if (!window.CONFIG.notice) return null;
    return (
        <div className="hs-removing:-translate-y-full bg-blue-500 dark:bg-blue-800">
            <div className="max-w-[85rem] px-2 py-2 sm:px-6 lg:px-8 mx-auto">
            <div className="flex">
                <Megaphone size={22} color="#ffffff" />
                &nbsp;
                <p className="text-white">
                    {window.CONFIG.notice}
                </p>
            </div>
            </div>
        </div>
  )
}