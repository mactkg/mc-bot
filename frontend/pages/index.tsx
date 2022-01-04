import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import favicon from '../public/favicon.ico'

import { GoogleLogin } from 'react-google-login';
import { useEffect, useState } from 'react';
import { useGetServerInfo } from '../lib/actions/getServerInfo';
import { useOperateServer } from '../lib/actions/operateServer';

const Home: NextPage = () => {
  const [token, setToken] = useState("")
  const apiCallback = (response: any) => {
    if(response.error) {
      console.error(response.error)
    }

    setToken(response.tokenId)
  }

  const {getInfo, info, loading} = useGetServerInfo(token)
  // useEffect(() => { getInfo() }, [token]);

  const {startServer, stopServer, operating} = useOperateServer(token)

  return (
    <div className={styles.container}>
      <Head>
        <title>Minecraft Launcher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={favicon.src} />
      </Head> 

      <header>
        <h1>Minecraft Launcher</h1>
      </header>
      <div className={styles.main}>
        {
          token ?
            <p>Authorized</p> :
            <GoogleLogin
              clientId="771328302406-ueq170qv6pnsd23k4oter2go10ne0mt0.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={apiCallback}
              onFailure={apiCallback}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
        }

        <div>{info}</div>

        <button onClick={getInfo} disabled={loading}>getInfo</button>
        <button onClick={startServer} disabled={operating !== ""}>start</button>
        <button onClick={stopServer} disabled={operating !== ""}>stop</button>
      </div>
    </div>
  )
}

export default Home
