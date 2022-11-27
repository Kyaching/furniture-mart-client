import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";

export const useRole = email => {
  const [role, setRole] = useState("");
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  console.log(role);
  useEffect(() => {
    axios.get(`http://localhost:5000/users/${email}`).then(res => {
      setRole(res?.data?.data?.role);
      setIsAdminLoading(false);
    });
  }, [email]);
  return [role, isAdminLoading];
};
