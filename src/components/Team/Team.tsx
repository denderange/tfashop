import styles from './Team.module.css'

interface IUserProfiles {
	name: string,
	job: string,
	imgSrc: string
}

const usersProfiles: IUserProfiles[] = [
	{
		name: 'Alora Dakari',
		job: 'Accountant',
		imgSrc: '../src/assets/images/user-1.webp'
	},
	{
		name: 'Ashanti Mazi',
		job: 'Database Analyst',
		imgSrc: '../src/assets/images/user-2.webp'
	},
	{
		name: 'Zyaire Olatunde',
		job: 'Security Specialist',
		imgSrc: '../src/assets/images/user-3.webp'
	},
	{
		name: 'Nini Chidera',
		job: 'Administrator',
		imgSrc: '../src/assets/images/user-4.webp'
	},
	{
		name: 'Shardae Babatunde',
		job: 'Designer',
		imgSrc: '../src/assets/images/user-5.webp'
	},
	{
		name: 'Zula Baduwa',
		job: 'Service Technician',
		imgSrc: '../src/assets/images/user-6.webp'
	},
]

const Team = () => {
	return (
		<section className={styles["team"]}>
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