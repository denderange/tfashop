interface INavLinks {
	linkText: string,
	href: string,
	id: string
}
export const navLinks: INavLinks[] = [
	{
		linkText: "Каталог",
		href: "/",
		id: "catalog"
	},
	{
		linkText: "О нас",
		href: "/",
		id: "about"
	},
	{
		linkText: "Подбор товара",
		href: "/",
		id: "quiz"
	},
	{
		linkText: "Наша команда",
		href: "/",
		id: "team"
	},
	{
		linkText: "FAQ",
		href: "/",
		id: "faq"
	},
	{
		linkText: "Контакты",
		href: "/",
		id: "contacts"
	}
]