function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className={`bg-cyan-500 cursor-pointer text-white text-sm rounded-sm px-2 py-1 inline-block `}>
      {children}
    </button>
  );
}

export default Button;
