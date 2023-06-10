import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isIntructor, isLoading: isIntructorLoading } = useQuery({
    queryKey: ["isIntructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      console.log("is instructor response", res);
      return res.data.instructor;
    },
  });
  return [isIntructor, isIntructorLoading];
};
export default useInstructor;
