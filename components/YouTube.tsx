export default function YouTube ({ id, title } : { id : string, title : string }){
    return (
      <div>
        <iframe
          className="aspect-video w-full"
          src={"https://www.youtube.com/embed/" + id}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    );
  };
  