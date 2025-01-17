import { Box, Button, CssBaseline, Typography } from "@mui/material"
import Infrastructor from "./Infrastructor"
import Stepper from "~/components/utilities/Stepper"
import { useMemo, useState } from "react"
import Credentials from "./Credentials"
import Certificates from "./Certificates"

function Setup() {
	const [step, setStep] = useState<number>(1)

	const getStepForm = useMemo(() => {
		switch (step) {
			case 1:
				return <Infrastructor />
			case 2:
				return <Credentials />
			case 3:
				return <Certificates />
			default:
				return <Typography color="#FFF">No more steps found</Typography>
		}
	}, [step])

	return (
		<Box className="flex flex-col gap-10 w-full">
			<CssBaseline />
			<Stepper steps={3} color="#CCFE76" currentStep={step} />
			<Box className="flex flex-col gap-3">
				<Typography fontSize="14px" fontWeight={400} lineHeight="20px" color="#ABA9B1">
					Choose elastic infrastructure
				</Typography>
				{getStepForm}
			</Box>
		</Box>
	)
}

export default Setup
