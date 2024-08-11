import styles from './styles.module.scss'
import Image from 'next/image'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header__content}>
      <Image
        src="/riot-games.svg"
        width={52}
        height={26}
        alt="Logo da riot games"
      />

      <span className={styles.divider} />

      <Image
        src="/valorant.svg"
        width={32}
        height={26}
        alt="Logo do valorant"
      />

      <nav className={styles.nav}>
        <a href="#">GAME</a>
        <a href="#">CHAMPIONS</a>
        <a href="#">NEWS</a>
        <a href="#">PACTH NOTES</a>
        <a href="#">SHOP</a>
        <a href="#">SUPPORT</a>
      </nav>

      <div className={styles.user}>
        <picture>
          <Image
            src="/avatar.jpeg"
            alt="Imagem de avatar do usuário"
            layout="fill"
          />
        </picture>

        <strong>Leo Vargas</strong>
      </div>
    </div>
  </header>
)
