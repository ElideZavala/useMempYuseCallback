import { memo, useEffect } from 'react'
import Item from './Item'

const List = memo (({ users }) => {

	useEffect(() => {
		// console.log('List Render')
	})

	return (
		<div>
			<ul>
				{ users.map(user => (
					<Item key={user.id} user={user}/>
				))}
			</ul>
		</div>
	)
})

export default List