import React from 'react'
import PropTypes from 'prop-types'
import { Text, Icon } from '@chakra-ui/react'
import { HiOutlineViewBoards } from 'react-icons/hi'

const BrandLogo = ({ size = '3xl' }) => {
  return (
    <Text as="span" fontSize={size} fontWeight="bold">
      <Icon as={HiOutlineViewBoards} color="blue.400" mr={2} />
      reboard
    </Text>
  )
}

BrandLogo.propTypes = {
  size: PropTypes.string,
}

export { BrandLogo }