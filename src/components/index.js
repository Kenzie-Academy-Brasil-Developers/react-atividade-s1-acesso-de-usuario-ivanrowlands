const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  let text;
  let buttonText;
  let buttonClick;

  if (isLoggedIn) {
    text = `Welcome, ${user}`;
    buttonText = "Logout";
    buttonClick = Logout;
  } else {
    text = "Você não pode acessar essa página";
    buttonText = "Login";
    buttonClick = Login;
  }

  return (
    <div>
      <h2 className="txt">{text}</h2>
      <button className="btn" onClick={buttonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default RestrictedPage;
