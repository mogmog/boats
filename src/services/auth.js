import URLSearchParams from 'url-search-params';

const INNOVATION = {
  url: 'https://plt-dl-inno-1.auth.eu-west-1.amazoncognito.com/oauth2/token',
  auth: 'Basic NzRlYmtuaHN2bmY0NnQ0dm1ja2ZkNGR0czQ6dDlxNnRmbjIzOWZkZWx2MDkxbGs1N3R2aWdqdm44ZG9nN2ZlYWk2ODhoZGNmaXRqNG1k',
  clientId: '74ebknhsvnf46t4vmckfd4dts4'
};

const DEV = {
  url: 'https://dev-pdl-2.auth.us-east-1.amazoncognito.com/oauth2/token',
  auth: 'Basic NWF1dW1oNHJocnBrZDE0OXBpbDJoamY3NWw6MWlnNjVibGM5OWZvdm5jbXNxdW9odjFqc2hiNzBwZjRxbmg2ZXZ2M2ViaWttb2Uwa2V1Nw==',
  clientId: '5auumh4rhrpkd149pil2hjf75l'
};

export const authorisationService = {
  connection: 'innovation',
  getAuthToken: async function() {

    const { url, auth, clientId } = this.connection === 'innovation' ? INNOVATION : DEV;
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", clientId);

    return fetch(url,
      {
        method: "POST",
        headers: {
          "Authorization": auth,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
      })
      .then(response => response.json())
      .then(token => {
        console.log(this.connection, token.access_token);
        return token.access_token;
      })
      .catch(error => {
        console.error("ERROR:", error);
      });
  }
};
