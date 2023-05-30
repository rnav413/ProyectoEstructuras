export const checkAuth = (data, navigate) => {
    if (data === null) {
      navigate('/');
      console.log('error en la autenticacion')
    }
  };
  