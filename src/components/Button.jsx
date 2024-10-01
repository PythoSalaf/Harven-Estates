const Button = ({ btnText, handleClick, btnStyle }) => {
  return (
    <button className={btnStyle} onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default Button;
