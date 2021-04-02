import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Center } from '@chakra-ui/react'
import { getBoard } from '../utils/api'

const Board = () => {
  const { id } = useParams()
  const [status, setStatus] = useState('loading')
  const [board, setBoard] = useState({})

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getBoard(id)
        setBoard(data)
      }
      fetchData()
    } catch (e) {
      // do nothing
    }
  }, [id])

  return (
    <Box h="100vh">
      <Center h="100%">Board {id} detail</Center>
    </Box>
  )
}

export default Board
