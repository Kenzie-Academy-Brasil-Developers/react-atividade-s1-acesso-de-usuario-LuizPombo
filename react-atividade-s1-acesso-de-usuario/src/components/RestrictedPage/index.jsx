const RestrictedPage = ({ isLoggedIn, user, Login, Loggout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Bem-vindo {user}</h1>
          <button onClick={Loggout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Você não pode acessar essa página</h1>
          <button onClick={Login}>Login</button>
        </>
      )}
    </div>
  );
};

export default RestrictedPage;
