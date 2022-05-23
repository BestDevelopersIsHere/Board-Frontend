import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
  const getUrlParameter = (name: any) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    let results = regex.exec(location.search);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  const error = getUrlParameter('error');
  const token = getUrlParameter('token');
  const navigate = useNavigate();

  //   const [auth, setAuth] = useRecoilState(authenticated);

  useEffect(() => {
    if (!error) {
      //   localStorage.setItem(TOKEN_NAME, token);
      //   localStorage.setItem(REFRESH_NAME, refresh);

      console.log(token);
      navigate('/');
    } else {
      console.log(error);
    }
  }, [token, navigate, error]);

  return <div />;
};

export default OAuth2RedirectHandler;
