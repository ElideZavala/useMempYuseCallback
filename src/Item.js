import { useEffect } from "react"


const Item = ({ user }) => {

	useEffect(() => {
		console.log('List Render')
	})

	return (
			<li>
				{ user.name }
			</li>
	)
}

export default Item