import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"
import { QueryClient, QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import type { Route } from "./+types/root"
import stylesheet from "./styles/app.css?url"
import { useEffect } from "react"
import { Box, ThemeProvider } from "@mui/material"
import themes from "./themes"
import store from "./store/store"
import AssetsManager from "./constants/AssetsManager"

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",
	},
	{ rel: "stylesheet", href: stylesheet },
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<Box className="flex items-center justify-center h-screen scale-x-[-1]">
					<img src={AssetsManager.ANIMATED_LOADER} width="64px" height="64px" />
				</Box>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export default function App() {
	useEffect(() => {
		const appHeight = () => {
			const doc = document.documentElement
			doc.style.setProperty("--window-height", `${window.innerHeight}px`)
		}

		appHeight()

		window.addEventListener("resize", appHeight)

		return () => {
			window.removeEventListener("resize", appHeight)
		}
	}, [])

	return (
		<Provider store={store}>
			<QueryClientProvider client={new QueryClient()}>
				<ThemeProvider theme={themes}>
					<Outlet />
				</ThemeProvider>
			</QueryClientProvider>
		</Provider>
	)
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!"
	let details = "An unexpected error occurred."
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error"
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	)
}
