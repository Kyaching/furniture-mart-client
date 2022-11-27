import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";

export const useRole = email => {
  const [role, setRole] = useState("");
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(res => {
        setRole(res?.data?.data?.role);
        setIsAdminLoading(false);
      });
  }, [email]);
  return [role, isAdminLoading];
};
