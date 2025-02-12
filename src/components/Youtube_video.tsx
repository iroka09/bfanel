"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import YouTube from "react-youtube"
import Refresh from "@mui/icons-material/Refresh"


export default function App({ id, title }: { id: string, title: string }) {
  const [played, setPlayed] = useState(false)
  const [readyState, setReadyState] = useState<"loading" | "success" | "error">("loading")
  const [videoObject, setVideoObject] = useState<null | object>(null)
  const { inView, ref } = useInView({ threshold: 0.5, triggerOnce: false })
  const handleRefresh = () => location.reload()
  useEffect(() => {
    if (!videoObject || !played) return
    if (inView) videoObject.playVideo()
    else videoObject.pauseVideo()
  }, [inView])
  return (
    <div
      ref={ref}
      className={`container grid place-items-center ${readyState === "success" ? "" : "min-h-[200px]"} bg-black mx-auto`}
    >
      <YouTube
        videoId={id}
        title={title}
        className={`${readyState === "success" ? "block" : "hidden"} w-full min-h-full`}
        iframeClassName="block w-full h-full"
        onPlay={() => setPlayed(true)}
        onReady={event => {
          setVideoObject(event.target)
          setReadyState("success")
        }}
        onError={() => {
          setReadyState("error")
        }}
        opts={{
          playerVars: {
            autoplay: 0
          },
        }}
      />
      {readyState === "loading" && <span className="block h-[50px] border-2 border-white aspect-square border-t-transparent rounded-full animate-spin"></span>}
      {readyState === "error" && (
        <div className="flex flex-col items-center">
          <span className="text-red-500 text-xs mb-2">Failed to load video!</span>
          <button onClick={handleRefresh} className="text-white *:text-5xl">
            <Refresh /></button>
          <span className="text-xs mb-2 text-white">Reload</span>
        </div>
      )}
    </div>
  )
}