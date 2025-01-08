import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useProductStore } from '../store/product';

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue('gray.600, gray.200');
  const bg = useColorModeValue('white, gray.800');

  const { deleteProduct } = useProductStore();
  const toast = useToast();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true,
      });
    } else {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true,
      });
    }
  };
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'x1' }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={'full'}
        objectFit={'cover'}
      />
      <Box p={4}>
        <Heading as="h3" size={'md'} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<FaEdit />} />
          <IconButton
            icon={<MdDelete />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme={'red'}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
