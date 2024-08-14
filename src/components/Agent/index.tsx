import styles from './style.module.scss'
import Image from 'next/image'

interface AgentProps {
  agent: {
    role: {
      displayName: string
    }
    displayName: string
    abilities: {
      displayIcon: string
      displayName: string
    }[]
    fullPortrait: string
  }
}

export const Agent = ({ agent }: AgentProps) => (
  <a href="#" className={styles.agent}>
    <div className={styles.text}>
      <p>{agent.role.displayName}</p>
      <strong>{agent.displayName}</strong>
    </div>

    <ul className={styles.abilities}>
      {agent.abilities.map(ability => (
        <li key={ability.displayName}>
          <Image
            src={ability.displayIcon}
            width={36}
            height={36}
            alt={'Icone da habilidade ' + ability.displayName}
          />
        </li>
      ))}
    </ul>

    <div className={styles.background}>
      <span style={{ backgroundImage: `url('${agent.fullPortrait}')` }} />
    </div>
  </a>
)
