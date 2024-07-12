import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId : number;
}

const GameScreenshots = ({gameId}: Props) => {
const {data, isPending, error} = useScreenshots(gameId);
if (isPending) return null;

if (error) throw error;

  return (
    <SimpleGrid columns={{base: 1, lg: 2}}>
        {data?.results.map(file => <Image src={file.image} key={file.id} />)}
    </SimpleGrid>
  )
}

export default GameScreenshots