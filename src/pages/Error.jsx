import { Link, useRouteError } from "react-router-dom"
import '../style/Error.css'

export default function Error() {
    const error = useRouteError()

    if(error.status === 404) {
        return (
            <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <Link to='/' className="linki">Homepage</Link>
            </div>
        </div>)
    }

    return (
        <>
        <div id="nodfound">
		<div className="nodfound">
			<div className="nodfound-404">
				<h1>Oops!</h1>
				<h2>Something went wrong</h2>
			</div>
			<a>
                <Link to='/'>
                Go TO Homepage
                </Link>
                </a>
		</div>
	</div>
        </>
    )
}
