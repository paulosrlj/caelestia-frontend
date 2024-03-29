import {
  FormControl, FormErrorMessage, FormLabel, Input,
} from '@chakra-ui/react';

function TextFieldFormik({
  name, field, form, placeholder, formLabel,
}) {
  return (
    <FormControl isInvalid={form.errors[name]} isRequired mb="10px">
      <FormLabel>{formLabel}</FormLabel>
      <Input placeholder={placeholder} {...field} type="text" />
      <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
    </FormControl>

  );
}

export default TextFieldFormik;
