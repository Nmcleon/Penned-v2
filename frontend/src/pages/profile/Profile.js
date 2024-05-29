import React, { useEffect, useState } from 'react';
import './Profile.css';
import { getAuth, updateProfile } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
  updateDoc,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../firebase/firebase';
import Card from '../../components/CardSection/Card';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: auth.currentUser.email,
  });
  const [blogs, setBlogs] = useState([]);
  const { username, email } = formData;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setFormData({
            username:
              userData.username || `${userData.firstName} ${userData.lastName}`,
            email: userData.email,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Error fetching user data');
      }
    };

    const fetchUserBlogs = async () => {
      try {
        const q = query(
          collection(db, 'blogs'),
          where('userId', '==', auth.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const userBlogs = [];
        querySnapshot.forEach((doc) => {
          userBlogs.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(userBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        toast.error('Error fetching blogs');
      }
    };

    fetchUserData();
    fetchUserBlogs();
  }, [auth.currentUser.uid]);

  function onLogout() {
    auth.signOut();
    navigate('/');
  }

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== username) {
        // Update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: username,
        });

        // Update name in the Firestore
        const docRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(docRef, {
          username,
        });
      }
      toast.success('Profile successfully updated');
    } catch (error) {
      toast.error('Could not update the profile details');
    }
  }

  return (
    <>
      <section className="container">
        <h1 className="profile-title">My Profile</h1>
        <div className="profile-container">
          <form className="profile-form">
            <input
              type="text"
              id="username"
              value={username}
              disabled={!changeDetail}
              onChange={onChange}
              className="container-name"
            />

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="container-email"
            />

            <div className="profile-details">
              <p className="items-center">
                Do you want to change your username?
              </p>
              <div className="profile-cta">
                <p
                  onClick={() => {
                    changeDetail && onSubmit();
                    setChangeDetail((prevState) => !prevState);
                  }}
                  className="container-span"
                >
                  {changeDetail ? 'Apply change' : 'Edit'}
                </p>
                <p onClick={onLogout} className="profile-signout">
                  Sign out
                </p>
              </div>
            </div>
          </form>
        </div>

        <div className="blogs-container">
          <h2>My Blogs</h2>
          {blogs.length > 0 ? (
            <div className="blogs-list">
              {blogs.map((blog) => (
                <Card key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="no-blogs">
              <p>No blogs you've written yet.</p>
              <Link to="/blogs">Go to Blogs</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
