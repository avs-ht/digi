import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

import { ICard } from '../model/types'

import Modal from '$/shared/ui/Modal'
import styles from './ServiceCard.module.scss'

export const ServiceCard = ({ card }: { card: ICard }) => {
	const [openedModal, setOpenedModal] = useState(false)
	const { isLoading, data, isError, refetch } = useQuery({
		queryKey: ['serviceCard'],
		queryFn: () => {
			setTimeout(() => {}, 2000)
			return axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
		},
		select: (data: { data: unknown }) => data?.data,
		refetchOnMount: false,
	})
	return (
		<div className={styles.card}>
			<div className={styles.icon}>{card.icon}</div>
			<h3 className={styles.title}>{card.title}</h3>
			<p className={styles.desc}>{card.desc}</p>
			<button
				className={styles.moreButton}
				onClick={() => setOpenedModal(true)}
			>
				Подробнее →
			</button>
			<Modal
				opened={openedModal}
				closeByClick={() => {
					setOpenedModal(false)
					refetch()
				}}
			>
				{isError ? (
					'Error...'
				) : (
					<div className={styles.modal}>
						{isLoading ? 'Грузим...' : JSON.stringify(data)}
					</div>
				)}
			</Modal>
		</div>
	)
}
