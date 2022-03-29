import React, { ReactElement } from 'react'
import { ReactComponent as LogoAssetFull } from '@oceanprotocol/art/logo/logo.svg'
// import { ReactComponent as LogoAsset } from '../../images/logo.png'
import styles from './Logo.module.css'

export default function Logo({
  noWordmark
}: {
  noWordmark?: boolean
}): ReactElement {
  return noWordmark ? (
    <img
      src="https://raw.githubusercontent.com/facundoperezh/assets/main/logo.png"
      alt="logo"
      height="50"
      width="50"
    />
  ) : (
    <LogoAssetFull className={styles.logo} />
  )
}
