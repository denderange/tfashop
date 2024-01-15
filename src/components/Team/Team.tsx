import userPhoto1 from '../../assets/images/user-1.webp'
import userPhoto2 from '../../assets/images/user-2.webp'
import userPhoto3 from '../../assets/images/user-3.webp'
import userPhoto4 from '../../assets/images/user-4.webp'
import userPhoto5 from '../../assets/images/user-5.webp'
import userPhoto6 from '../../assets/images/user-6.webp'
import styles from './Team.module.scss'

interface IUserProfiles {
	name: string,
	job: string,
	imgSrc: string
}

const usersProfiles: IUserProfiles[] = [
	{
		name: 'Alora Dakari',
		job: 'Accountant',
		imgSrc: userPhoto1
	},
	{
		name: 'Ashanti Mazi',
		job: 'Database Analyst',
		imgSrc: userPhoto2
	},
	{
		name: 'Zyaire Olatunde',
		job: 'Security Specialist',
		imgSrc: userPhoto3
	},
	{
		name: 'Nini Chidera',
		job: 'Administrator',
		imgSrc: userPhoto4
	},
	{
		name: 'Shardae Babatunde',
		job: 'Designer',
		imgSrc: userPhoto5
	},
	{
		name: 'Zula Baduwa',
		job: 'Service Technician',
		imgSrc: userPhoto6
	},
]

const Team = () => {
	return (
		<section className={styles["team"]} id="team">
			<img src="../src/assets/icons/figure-2.svg" aria-hidden="true" alt="" className={styles["team__figure"]} />
			<div className={`container`}>
				<h2 className={`title ${styles["team__title"]}`}>Наша команда</h2>

				<ul className={`grid ${styles["team__list"]}`}>
					{usersProfiles.map(user => (
						<li className={styles["team__item"]} key={user.name}>
							<div className={styles["team__img-wrapper"]}>
								<img src={user.imgSrc} alt="" className={styles["team__img"]} />
							</div>
							<strong className={styles["team__subtitle"]}>{user.name}</strong>
							<span className={styles["team__job"]}>{user.job}</span>
						</li>
					))}
				</ul>

			</div>
		</section>
	)
}

export default Team