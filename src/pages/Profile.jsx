import { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE from "../config/api";
import { useParams } from 'react-router-dom';
import ThemeRenderer from '../components/ThemeRenderer';
import LoadingScreen from "../components/LoadingScreen";




export default function Profile() {
  const { username } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/profile/${username}`);
        setData(res.data); // { user, links }
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [username]);


  if (!data) return <LoadingScreen />;

  return <ThemeRenderer user={data.user} links={data.links}/>;
}