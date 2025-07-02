'use client';

import React, { useEffect, useRef } from "react"


export function YouTubeEmbed({ videoId, title }: { videoId: string; title?: string }) {
  return (
    <div className="p-0 overflow-hidden flex items-center justify-center mx-auto w-full max-w-xl">
      <div className="aspect-video w-full overflow-hidden">
        <iframe
          className="rounded-lg w-full h-full scale-[1.0]"
          src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&showinfo=0`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}


export function InstagramEmbed({ postUrl, title }: { postUrl: string; title?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // @ts-ignore
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        // @ts-ignore
        if (window.instgrm) window.instgrm.Embeds.process();
      };
    } else {
      // @ts-ignore
      window.instgrm.Embeds.process();
    }
  }, [postUrl]);

  // Always use blockquote for any postUrl
  const permalink = postUrl.endsWith('/') ? postUrl : postUrl + '/';
  return (
    <div className="p-0 overflow-hidden flex items-center justify-center mx-auto w-full max-w-xl">
      <div
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: `<blockquote class=\"instagram-media\" data-instgrm-permalink=\"${permalink}?utm_source=ig_embed&amp;utm_campaign=loading\" data-instgrm-version=\"14\" style=\" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);\"></blockquote>`
        }}
        style={{ width: '100%' }}
      />
    </div>
  );
}


export function SoundCloudEmbed({ trackUrl, title }: { trackUrl: string; title?: string }) {
  return (
    <div className="p-0 overflow-hidden flex items-center justify-center mx-auto w-full max-w-xl">
      <iframe
        className="rounded-lg w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]"
        width="100%"
        height="180"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}`}
        title={title || "SoundCloud player"}
      ></iframe>
    </div>
  )
}
