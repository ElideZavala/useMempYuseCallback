import { memo, useEffect } from 'react'
import Item from './Item'

const List = memo (({ users, handleDelete }) => {

	useEffect(() => {
		// console.log('List Render')
	})

	return (
		<div>
			<ul>
				{ users.map(user => (
					<Item 
						key={user.id}
						user={user}
						handleDelete={handleDelete}
						/>
				))}
			</ul>
		</div>
	)
})

export default List