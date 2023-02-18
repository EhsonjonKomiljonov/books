export const SaveChangesBtn = ({ text, onClick }) => {
  return (
    <button
      onClick={() => (onClick ? onClick() : '')}
      className="block ml-auto py-3 px-6 rounded dark:text-black dark:bg-white text-white bg-editSendBtn"
      type="submit"
    >
      {text}
    </button>
  );
};
