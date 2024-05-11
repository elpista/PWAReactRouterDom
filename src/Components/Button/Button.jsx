
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className='border-2 p-2 bg-white text-black transition duration-200 hover:bg-inherit  hover:text-white'>
      {text}
    </button>
  );
};

export default Button;