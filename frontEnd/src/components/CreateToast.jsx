import { useToast } from '@chakra-ui/react';

function CreateToast({ title, description, state }) {
    const toast = useToast();
    return(
        toast({
            title: title,
            description: description,
            status: state,
            duration: 9000,
            isClosable: true,
        })
    )
};

export default CreateToast