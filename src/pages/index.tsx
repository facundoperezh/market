import React, { ReactElement } from 'react'
import { PageProps } from 'gatsby'
import PageHome from '../components/pages/Home'
// import { useSiteMetadata } from '../hooks/useSiteMetadata'
import Page from '../components/templates/Page'
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

export default function PageGatsbyHome(props: PageProps): ReactElement {
  // const { siteTitle, siteTagline } = useSiteMetadata()
  const siteTitle = 'Tsunami Market'
  const siteTagline = ''

  return (
    <WalletProvider
      defaultNetwork={mainnet}
      walletConnectChainIds={walletConnectChainIds}
    >
      <Page
        title={siteTitle}
        description={siteTagline}
        uri={props.uri}
        headerCenter
      >
        <PageHome />
      </Page>
    </WalletProvider>
  )
}
