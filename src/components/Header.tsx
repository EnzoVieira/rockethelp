import { Heading, HStack, IconButton, StyledProps, useTheme } from "native-base"
import { CaretLeft } from "phosphor-react-native"

interface IProps extends StyledProps {
  title: string
}

export const Header = ({ title, ...rest }: IProps) => {
  const { colors } = useTheme()

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton icon={<CaretLeft color={colors.gray[200]} size={24} />} />

      <Heading
        fontFamily="heading"
        color="gray.100"
        textAlign="center"
        fontSize="lg"
        flex={1}
        ml={-6}
      >
        {title}
      </Heading>
    </HStack>
  )
}
