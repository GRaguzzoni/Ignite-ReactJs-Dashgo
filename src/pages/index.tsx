import { Flex, Button, Stack,  } from '@chakra-ui/react';
import { Input} from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

export default function SignIn() {
  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            type="email" 
            name="email" 
            label="email" 
            error={formState.errors.email}
            {...register('email')} 
          />
          <Input 
            type="password" 
            name="password" 
            label="senha" 
            error={formState.errors.password}
            {...register('password')} 
          />                 
        </Stack>

        <Button 
          type="submit" 
          size="lg" 
          mt="6" 
          colorScheme="pink" 
          isLoading={formState.isSubmitting}>Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
