import { useQuery } from "@tanstack/react-query";

const useClass = () => {
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["class"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/class")
            return res.json();
        }
    })
    console.log(classes);
    return [classes, loading, refetch]
}
export default useClass;