import { memo, useEffect } from "react"


const Item = memo(({ user }) => {

	useEffect(() => {
		// console.log('List Render'+user.name)
	})

	return (
			<li>
				{ user.name }
			</li>
	)
})

export default Item