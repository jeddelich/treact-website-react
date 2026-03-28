function IconButton({ wrapper, icon, status }: { wrapper: string; icon: string; status: string }) {
  return (
    <div className={wrapper + " " + status}>
      <i className={icon}></i>
    </div>
  );
}

export default IconButton;
