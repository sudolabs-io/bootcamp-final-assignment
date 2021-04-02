import React, { useState, useEffect } from 'react'
import { Box, Center } from '@chakra-ui/react'
import { getBoards } from '../utils/api'

const Boards = () => {
  const [status, setStatus] = useState('loading')
  const [boards, setBoards] = useState([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getBoards()
        setBoards(data)
      }
      fetchData()
    } catch (e) {
      // do nothing
    }
  }, [])

  return (
    <Box h="100vh">
      <Center h="100%" />
    </Box>
  )
}

export default Boards
