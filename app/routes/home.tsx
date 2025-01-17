import { Box, CssBaseline, Typography } from "@mui/material"
import Setup from "~/components/core/Setup"
import type { Route } from "./+types/home"

export function meta({}: Route.MetaArgs) {
	return [{ title: "Hyperflex" }, { name: "description", content: "Welcome to Hyperflex" }]
}

export default function Home() {
	return (
		<Box padding={{ xs: "32px 16px", md: "32px 32px 32px 62px" }}>
			<CssBaseline />
			<Box className="flex flex-col items-center md:items-start max-w-[515px] w-full gap-10">
				<Box className="flex flex-col gap-4">
					<Box
						className="flex items-center justify-center rounded-[10px] p-px w-min"
						sx={{
							background:
								"linear-gradient(170deg, #0A0A0A 7.63%, #090417 31.48%, #2B184C 46.15%, #533787 60.93%, #BDA0FF 87.43%, #F5F3FF 100%)",
						}}
					>
						<Typography className="flex items-center justify-center size-10 rounded-[9px] font-manrope font-semibold text-xl leading-[22px] bg-black">
							👋
						</Typography>
					</Box>
					<Typography fontSize="24px" fontWeight={600} lineHeight="22px" color="#FFF">
						Hello there, welcome back!
					</Typography>
				</Box>
				<Setup />
			</Box>
		</Box>
	)
}
