import { Box, Typography } from '@mui/material'
import { useState } from 'react'

function Infrastructor() {
  const [selected, setSelected]  = useState<string>()

  const SelectionTile = ({Icon, name, isSelected}: {Icon: React.ElementType,name: string, isSelected: boolean}) => {
    <Box className="flex gap-2 justify-between py-6 pl-8 pr-7">
      <Box className="flex flex-col gap-[14px] ">
        {/* <Icon size={} /> */}
        <Typography>{name}</Typography>
      </Box>
      
    </Box>
  } 
  return (
    <Box className="flex flex-col items-stretch gap-4">

    </Box>
  )
}

export default Infrastructor
