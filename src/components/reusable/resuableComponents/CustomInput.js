import { TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder, styles, onChangeText, placeholderTextColor}) => {
  return (
    <TextInput
      placeholder = {placeholder}
      style = {styles}
      onChangeText = {onChangeText}
      placeholderTextColor = {placeholderTextColor}
    />
  )
}

export default CustomInput