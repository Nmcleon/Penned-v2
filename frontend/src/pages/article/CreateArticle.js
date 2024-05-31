import React, { useState, useEffect } from 'react';
import './CreateArticle.css';
import Footer from '../../components/Footer/Footer';
import { addDoc, collection, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { Button } from '../../components/Button/Button';
import { auth } from '../../firebase/firebase';
import { toast } from 'react-toastify';
import {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
} from 'firebase/storage';
import { format } from 'date-fns';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [subtopic1, setSubtopic1] = useState('');
  const [details1, setDetails1] = useState('');
  const [subtopic2, setSubtopic2] = useState('');
  const [details2, setDetails2] = useState('');
  const [tags, setTags] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data()?.username || 'User Name');
        } else {
          setUserName('User Name');
        }
      }
    };

    fetchUserName();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSignedIn) {
      alert('Please sign in to upload a blog.');
      window.location.href = '/signin';
      return;
    }

    if (!imgUrl) {
      toast.error('Please wait for the image to finish uploading.');
      return;
    }

    const blog = {
      title,
      image: imgUrl,
      tags,
      publishedAt: format(new Date(), 'yyyy-MM-dd'),
      author: {
        uid: auth.currentUser.uid,
        name: userName,
        image: auth.currentUser.photoURL || '',
      },
      sections: [
        { subtopic: subtopic1, details: details1 },
        ...(subtopic2 ? [{ subtopic: subtopic2, details: details2 }] : []),
      ],
    };

    console.log('Article Created:', JSON.stringify(blog, null, 2));
    toast.success('Article Created');

    try {
      const docRef = await addDoc(collection(db, 'blogs'), blog);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error adding document');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Handle progress, success, and errors
      },
      (error) => {
        console.error('Upload failed:', error);
        toast.error('Failed to upload image');
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImgUrl(downloadURL);
      }
    );
  };

  return (
    <>
      <section className="create-article">
        <h1>Create Article</h1>
        {!isSignedIn && (
          <div>
            <p>Please sign in to upload a blog.</p>
            <Button onClick={() => (window.location.href = '/signin')}>
              Sign In
            </Button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image Upload</label>
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              required
            />
          </div>
          <div className="form-group">
            <label>Subtopic 1</label>
            <input
              type="text"
              value={subtopic1}
              onChange={(e) => setSubtopic1(e.target.value)}
              required
            />
            <label>Content 1</label>
            <textarea
              value={details1}
              onChange={(e) => setDetails1(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Subtopic 2 (Optional)</label>
            <input
              type="text"
              value={subtopic2}
              onChange={(e) => setSubtopic2(e.target.value)}
            />
            <label>Content 2 (Optional)</label>
            <textarea
              value={details2}
              onChange={(e) => setDetails2(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input
              type="text"
              placeholder="Use a comma (,) to separate tags"
              value={tags.join(',')}
              onChange={(e) => setTags(e.target.value.split(','))}
            />
          </div>
          <Button onClick={handleSubmit} type="submit">
            Create Article
          </Button>
        </form>
      </section>
      <Footer />
    </>
  );
}
