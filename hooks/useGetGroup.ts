import { useGetGroupQuery } from "@/api/api";

export default function useGetGroup() {
  const { data } = useGetGroupQuery();

  return { group: data };
}
