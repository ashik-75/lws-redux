export default function Player({ video }) {
  return (
    <iframe
      width="100%"
      class="aspect-video"
      src={video?.link}
      title="Some video title"
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullscreen
    ></iframe>
  );
}
