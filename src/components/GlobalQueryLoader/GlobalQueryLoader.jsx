import { Button, Loader } from "@components/_exports";
import GlobalQueryLoaderLogic from "./GlobalQueryLoader.logic";

const GlobalQueryLoader = () => {
  const { isLoading, handleRefetch } = GlobalQueryLoaderLogic();

  return isLoading ? (
    <Loader isLoading={true} />
  ) : (
    <Button onClick={handleRefetch}>Refetch</Button>
  );
};

export default GlobalQueryLoader;
