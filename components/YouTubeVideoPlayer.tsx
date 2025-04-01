// components/YouTubeVideoPlayer.tsx
"use client"

import React, { useState } from 'react'
import YouTube from 'react-youtube'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Play } from 'lucide-react'

interface YouTubeVideoPlayerProps {
  videoId: string
  thumbnailUrl: string
  title: string
}

export function YouTubeVideoPlayer({ 
  videoId, 
  thumbnailUrl, 
  title 
}: YouTubeVideoPlayerProps) {
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <div className="aspect-video w-full max-w-2xl mx-auto bg-black/10 rounded-lg flex items-center justify-center relative">
      {videoPlaying ? (
        <YouTube
          videoId={videoId}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: { autoplay: 1 },
          }}
          className="absolute inset-0"
        />
      ) : (
        <>
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
          <Button
            size="lg"
            className="gap-2 z-10 absolute"
            onClick={() => setVideoPlaying(true)}
          >
            <Play className="h-5 w-5 flex-shrink-0" />
            <span className="hidden sm:inline">Regarder notre dernier concert</span>
            <span className="sm:hidden">Notre dernier concert</span>
          </Button>
        </>
      )}
    </div>
  )
}