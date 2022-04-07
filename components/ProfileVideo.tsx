type ProfileProps = { src: string }

export default function ProfileVideo(props: ProfileProps) {
  return (
    <video
      preload="false"
      playsInline
      autoPlay
      muted
      loop
      className="-z-10 h-full w-full"
    >
      <source src={props.src} type="video/mp4" />
    </video>
  )
}
