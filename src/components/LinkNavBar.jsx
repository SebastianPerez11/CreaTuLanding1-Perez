const LinkNavBar = ({ text, href }) => {
  return (
    <div>
      <a className="font-normal text-base cursor-pointer" href={href}>{text}</a>
    </div>
  );
};

export default LinkNavBar;
