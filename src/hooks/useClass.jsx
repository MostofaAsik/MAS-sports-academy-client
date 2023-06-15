import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["class"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/class`)
            return res.json();
        }
    })
    console.log(classes);
    return [classes, loading, refetch]
}
export default useClass;