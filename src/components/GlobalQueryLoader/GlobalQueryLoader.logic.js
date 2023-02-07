import {
  useIsFetching,
  useIsMutating,
  useQueryClient,
} from "@tanstack/react-query";

const GlobalQueryLoaderLogic = () => {
  const queryClient = useQueryClient();

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const isLoading = isFetching > 0 || isMutating > 0;

  const handleRefetch = () => {
    queryClient.invalidateQueries();
  };

  return { isLoading, handleRefetch };
};

export default GlobalQueryLoaderLogic;
