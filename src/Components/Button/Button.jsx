
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='border-2 p-2 bg-white text-black hover:bg-inherit hover:text-white'>
      {text}
    </button>
  );
};

export default Button;