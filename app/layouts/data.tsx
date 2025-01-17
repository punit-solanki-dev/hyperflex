import { Box, CssBaseline } from "@mui/material"
import { Outlet } from "react-router"
import AssetsManager from "../constants/AssetsManager"
import { useMemo } from "react"

function DataLayout() {
	const getLogo = useMemo(() => {
		return (
			<Box className="flex items-center gap-2">
				<Box
					className="flex items-center justify-center rounded-[14px] p-px"
					sx={{
						background:
							"linear-gradient(170deg, #0A0A0A 7.63%, #090417 31.48%, #2B184C 46.15%, #533787 60.93%, #BDA0FF 87.43%, #F5F3FF 100%)",
					}}
				>
					<Box
						className="flex items-center justify-center size-16 rounded-[13px]"
						border="0.442px solid #25222C"
						maxHeight="64px"
						maxWidth="64px"
						sx={{
							backdropFilter: "blur(21.857912063598633px)",
							background:
								"linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(187, 184, 199, 0.06) 100%)",
						}}
						flexGrow={1}
					>
						<img src={AssetsManager.LOGO_TRANSPARENT} height="36.67px" width="37.031px" />
					</Box>
				</Box>
				<Box sx={{ display: "flex", flexGrow: 1, maxHeight: "58px", maxWidth: "216px" }}>
					<img src={AssetsManager.NAMED_LOGO_TRANSPARENT} height="58px" width="216px" />
				</Box>
			</Box>
		)
	}, [])

	return (
		<Box className="flex flex-col md:flex-row w-full bg-black px-0 pt-0 pb-3 md:py-3 md:px-4">
			<CssBaseline />
			<Box
				className="hidden md:flex flex-col justify-between w-full rounded-3xl relative flex-grow"
				padding="29px 24px 24px 29px"
				height="calc(var(--window-height) - 24px)"
				maxWidth="494px"
				sx={{
					background:
						"linear-gradient(170deg, #0A0A0A 7.63%, #090417 31.48%, #2B184C 46.15%, #533787 60.93%, #BDA0FF 87.43%, #F5F3FF 100%)",
				}}
			>
				<Box className="absolute bottom-0 left-0 mix-blend-color-dodge">
					<img src={AssetsManager.LAYOUT_LOGO_TRANSITION} width="428px" height="474px" />
				</Box>
				<Box className="absolute flex flex-shrink-0 bottom-0">
					<img src={AssetsManager.STARS_SMALL} width="693px" height="520px" />
				</Box>
				<Box className="absolute flex flex-shrink-0 bottom-0">
					<img src={AssetsManager.STARS_LARGE} width="693px" height="520px" />
				</Box>
				{getLogo}
				<Box className="flex justify-end">
					<Box className="flex size-12 bg-black rounded-lg"></Box>
				</Box>
			</Box>
			<Box className="flex md:hidden border-b border-solid border-gray-400 p-4">{getLogo}</Box>
			<Box className="flex flex-grow w-full">
				<Outlet />
			</Box>
		</Box>
	)
}

export default DataLayout
