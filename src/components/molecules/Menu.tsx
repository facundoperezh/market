import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import loadable from '@loadable/component'
import styles from './Menu.module.css'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import UserPreferences from './UserPreferences'
import Badge from '../atoms/Badge'
import Logo from '../atoms/Logo'
import Networks from './UserPreferences/Networks'
import SearchBar from './SearchBar'
import { Connect } from '../terra/Connect'
import { NetworkInfo, WalletProvider } from '@terra-money/wallet-provider'

const mainnet = {
  name: 'mainnet',
  chainID: 'columbus-4',
  lcd: 'https://lcd.terra.dev'
}

const testnet = {
  name: 'testnet',
  chainID: 'tequila-0004',
  lcd: 'https://tequila-lcd.terra.dev'
}

// WalletConnect separates chainId by number.
// Currently TerraStation Mobile uses 0 as Testnet, 1 as Mainnet.
const walletConnectChainIds: Record<number, NetworkInfo> = {
  0: testnet,
  1: mainnet
}

const Wallet = loadable(() => import('./Wallet'))

declare type MenuItem = {
  name: string
  link: string
}

function MenuLink({ item }: { item: MenuItem }) {
  const location = useLocation()

  const classes =
    location?.pathname === item.link
      ? `${styles.link} ${styles.active}`
      : styles.link

  return (
    <Link key={item.name} to={item.link} className={classes}>
      {item.name}
    </Link>
  )
}

export default function Menu(): ReactElement {
  const { menu } = useSiteMetadata()
  const siteTitle = 'Tsunami Market'

  return (
    <nav className={styles.menu}>
      <Link to="/" className={styles.logo}>
        <Logo noWordmark />
        <h1 className={styles.title}>
          {siteTitle} <Badge label="Beta" />
        </h1>
      </Link>

      <ul className={styles.navigation}>
        {menu.map((item: MenuItem) => (
          <li key={item.name}>
            <MenuLink item={item} />
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <SearchBar />
        <Networks />
        <WalletProvider
          defaultNetwork={testnet}
          walletConnectChainIds={walletConnectChainIds}
        >
          <Connect />
        </WalletProvider>
        <Wallet />
        <UserPreferences />
      </div>
    </nav>
  )
}
