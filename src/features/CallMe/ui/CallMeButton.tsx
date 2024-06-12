import Button from '$/shared/ui/Button'

export const CallMeButton = () => {
	const openModal = () => {} // логика открытия модалки
	// В этой папке подразумевается открытие модалки, в которой есть форма
	return (
		<Button onClick={openModal} inverted>
			ПЕРЕЗВОНИТЕ МНЕ
		</Button>
	)
}
