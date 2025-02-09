"use client"

import { useState } from "react"
import YouTube from "react-youtube"
import Refresh from "@mui/icons-material/Refresh"


export default function ({ id, title }: { id: string, title: string }) {
  const [readyState, setReadyState] = useState<"loading" | "success" | "error">("loading")
  const handleRefresh = () => location.reload()
  return (
    <div className={`container grid place-items-center ${readyState === "success" ? "" : "min-h-[200px]"} bg-black mx-auto`}>
      <YouTube
        videoId={id}
        title={title}
        className={`${readyState === "success" ? "block" : "hidden"} w-full min-h-full`}
        iframeClassName="block w-full h-full"
        onReady={event => {
          setReadyState("success")
        }}
        onError={event => {
          setReadyState("error")
        }}
        opts={{
          playerVars: {
            autoplay: 1
          },
        }}
      />
      {readyState === "loading" && <span className="block h-[50px] border-2 border-white aspect-square border-t-transparent rounded-full animate-spin"></span>}
      {readyState === "error" && <button onClick={handleRefresh} className="text-white *:text-5xl"><Refresh className="" /></button>}
    </div>
  )
}