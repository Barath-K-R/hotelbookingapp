import React, { useContext, useEffect } from "react";
import UserDetailContext from "../context/UserDetailContext";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllBookings, getAllFav } from "../utils/api";

const useBookings = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const { user } = useAuth0();

  const { data, isLoading, isError } = useQuery({
    queryKey: "allBookings",
    queryFn: () => getAllBookings(user?.email),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  



  return { data, isError, isLoading };
};

export default useBookings;
