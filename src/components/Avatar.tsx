function Avatar({ path }: { path?: string }) {
  return (
    <div className="">
      <div className="w-55 h-55 rounded-full bg-blue-200 flex items-center justify-center ">
        <img
          src={path || "images/avatar.png"}
          alt="Avatar"
          className="w-55 h-55 rounded-full select-none"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </div>
  );
}

export default Avatar;
