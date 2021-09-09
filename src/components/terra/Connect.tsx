import { useWallet, WalletStatus } from '@terra-money/wallet-provider'
import React from 'react'

export function Connect() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect
  } = useWallet()

  console.log(
    `Wallet: ${JSON.stringify(
      {
        status,
        network,
        wallets,
        availableConnectTypes,
        availableInstallTypes
      },
      null,
      2
    )}`
  )
  return (
    <div>
      <footer>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <>
            {availableConnectTypes.map((connectType) => {
              if (connectType === 'CHROME_EXTENSION') {
                return (
                  <button
                    key={'connect-' + connectType}
                    onClick={() => connect(connectType)}
                  >
                    Connect Terra Station
                  </button>
                )
              }
            })}
          </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <button onClick={() => disconnect()}>Disconnect</button>
        )}
      </footer>
    </div>
  )
}
