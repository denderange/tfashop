import { useState } from 'react'
import { sendTgMessage } from '../../api/telegram'
import instLogo from '../../assets/images/Instagram_logo.webp'
import instImg1 from '../../assets/images/inst1.webp'
import instImg2 from '../../assets/images/inst2.webp'
import instImg3 from '../../assets/images/inst3.webp'
import instImg4 from '../../assets/images/inst4.webp'
import instImg5 from '../../assets/images/inst5.webp'
import styles from './Instagr.module.scss'
import toast, { Toaster } from 'react-hot-toast';

type FormValues = {
	userName: string,
	userTel: string,
}

const Instgrm = () => {
	const [isSending, setIsSending] = useState(false)
	const [formValues, setFormValues] = useState<FormValues>({
		userName: "",
		userTel: ""
	})

	const notifySendSuccess = () => toast('Сообщение отправлено.', {
		style: {
			border: '1px solid #46005c',
			backgroundColor: "#DBBBA9"
		},
	});
	const notifySendError = () => toast('Ваше сообщение не отправлено.', {
		style: {
			border: '1px solid black',
			backgroundColor: "red"
		},
	});

	const sendForm = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()

		try {
			setIsSending(true)

			const message = `Имя пользователя из формы: ${formValues.userName}; Телефон пользователя из формы: ${formValues.userTel} `

			await sendTgMessage(message)
			notifySendSuccess()

		} catch (error) {
			notifySendError()
		} finally {
			setIsSending(false)
		}
	}

	return (
		<section className={styles["inst"]}>
			<h2 className={"visually-hidden"}>Связь с нами через instagram.</h2>
			<div className={`container ${styles["inst__container"]}`}>

				<div className={styles["inst__left"]}>
					<form className={styles["form-feedback"]} onSubmit={(e) => sendForm(e)}>
						<h3 className={`title ${styles["inst__title"]}`}>Есть вопросы?</h3>
						<p className={styles["inst__descr"]}>Заполните форму и наш менеджер свяжется с вами</p>

						<input
							type="text"
							className={`input-feedback ${styles["form-feedback__input"]}`} placeholder='Ваше имя'
							onChange={(e) => setFormValues({ ...formValues, userName: e.target.value })}
							maxLength={30}
							minLength={1}
						/>
						<input
							type="tel"
							className={`input-feedback ${styles["form-feedback__input"]}`} placeholder='Номер телефона'
							onChange={(e) => setFormValues({ ...formValues, userTel: e.target.value })}
							maxLength={40}
							minLength={5}
						/>
						<button className="btn btn--primary form-feedback__btn" type='submit'>
							{isSending ? "...идет отправка..." : "Отправить"}
						</button>
					</form>
					<Toaster />
				</div>

				<div className={styles["inst__right"]}>
					<a href="" className={styles["inst__link"]}>
						<img src={instLogo} alt="instagram logo image link" />
					</a>
					<div className={styles["inst__content"]}>
						<article className={styles["inst__item"]}>
							<h3 className="visually-hidden">inst-photo</h3>
							<a href="" target="_blank">
								<img src={instImg1} alt="instagram photo" />
							</a>
						</article>

						<article className={styles["inst__item"]}>
							<h3 className="visually-hidden">inst-photo</h3>
							<a href="" target="_blank">
								<img src={instImg2} alt="instagram photo" />
							</a>
						</article>
						<article className={styles["inst__item"]}>
							<h3 className="visually-hidden">inst-photo</h3>
							<a href="" target="_blank">
								<img src={instImg5} alt="instagram photo" />
							</a>
						</article>
						<article className={styles["inst__item"]}>
							<h3 className="visually-hidden">inst-photo</h3>
							<a href="" target="_blank">
								<img src={instImg4} alt="instagram photo" />
							</a>
						</article>
						<article className={styles["inst__item"]}>
							<h3 className="visually-hidden">inst-photo</h3>
							<a href="" target="_blank">
								<img src={instImg3} alt="instagram photo" />
							</a>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Instgrm