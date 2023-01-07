import { ReactTagify } from 'react-tagify';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import {
  EditInput,
  EditForm,
  Description
} from './style';
import { api } from '../../services';
import { useAuth } from '../../providers';

async function submit(e, requestData) {
  e.preventDefault();
  const {
    isLoading,
    setLoading,
    post_id,
    newDescription,
    token,
    setEditing,
    display,
    setDisplay
  } = requestData;
  if (isLoading)
    return;

  setLoading(1);

  const originalHashtags = display.split(' ').filter(w => w.startsWith('#'));
  
  const currentHashtags = newDescription.split(' ').filter(w => w.startsWith('#'));
  
  const removedHashtags = [];
  originalHashtags.forEach(hashtag => {
    if (!currentHashtags.find(h => h === hashtag))
      removedHashtags.push(hashtag);
  });
  
  const newHashtags = [];
  currentHashtags.forEach(hashtag => {
    if (!originalHashtags.find(h => h === hashtag))
      newHashtags.push(hashtag);
  });
  
  try {
    await api.put(`/timeline/${post_id}`, {
       description: newDescription,
       removedHashtags: removedHashtags,
       newHashtags: newHashtags,
       post_id: post_id
       }, { headers: { Authorization: `Bearer ${token}` } });

    setLoading(0);
    setEditing(0);
    setDisplay(newDescription);
  } catch (e) {
    alert('Could not save changes');
    setLoading(0);
  };

  return;
};

export default function PostDescription({ data, editState }) {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [value, setValue] = useState(data.description);
  const [display, setDisplay] = useState(data.description);
  const { userAuth } = useAuth();
  const [isLoading, setLoading] = useState(0);
  const requestData = {
    setLoading: setLoading,
    isLoading: isLoading,
    newDescription: value,
    token: userAuth.token,
    post_id: data.post_id,
    setEditing: editState.setEditing,
    display: display,
    setDisplay: setDisplay
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Escape')
      editState.setEditing(!editState.isEditing)
  };

  useEffect(() => {
    if (editState.isEditing) {
      inputRef.current.focus();
    }

    setValue(display);
  }, [editState.isEditing], setValue, display);

  return (
    editState.isEditing ?
      <EditForm
        onSubmit={(e) => submit(e, requestData)}
      >
        <EditInput
          ref={inputRef}
          type='text'
          value={value}
          onKeyUp={(e) => handleKeyUp(e)}
          onChange={(e) => setValue(e.target.value)}
          enabled={!isLoading}
        />
      </EditForm> :
      <Description>
        <ReactTagify
          colors="white"
          tagClicked={(tag) => { navigate(`/hashtag/${tag.replace('#', '')}`) }}
        >
          {display}
        </ReactTagify>
      </Description>

  );
};